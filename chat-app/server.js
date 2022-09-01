import { ApolloServer, gql } from "apollo-server";

const users = [
    {
        id: 1,
        firstName: "amirali",
        lastName: "eidivandi",
        email: "amirali@gmail.com",
        password: "amirali1234",
    },
    {
        id: 1,
        firstName: "ali",
        lastName: "ahmadi",
        email: "ali@gmail.com",
        password: "ali1234",
    },
];

const typeDefs = gql`
    type Query {
        users: [User]
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
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
