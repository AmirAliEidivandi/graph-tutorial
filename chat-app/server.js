import { ApolloServer, gql } from "apollo-server";
import { randomUUID } from "crypto";

const users = [
    {
        id: "fakueaioanfa",
        firstName: "amirali",
        lastName: "eidivandi",
        email: "amirali@gmail.com",
        password: "amirali1234",
    },
    {
        id: "kfadji43fa",
        firstName: "ali",
        lastName: "ahmadi",
        email: "ali@gmail.com",
        password: "ali1234",
    },
];

const typeDefs = gql`
    type Query {
        users: [User]
        user(id: ID!): User
    }

    input UserInput {
        firstName: String!
        lastName: String!
        email: String!
        password: String!
    }

    type Mutation {
        createUser(userNew: UserInput!): User
    }

    type User {
        id: ID
        firstName: String
        lastName: String
        email: String
        password: String
    }
`;

const resolvers = {
    Query: {
        users: () => users,
        user: (_, { id }) => users.find((item) => item.id == id),
    },
    Mutation: {
        createUser: (_, { userNew }) => {
            const newUser = {
                id: randomUUID(),
                ...userNew,
            };
            users.push(newUser);
            return newUser;
        },
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
