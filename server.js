const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const axios = require("axios");
const app = express();

let message = "this is a message";

const schema = buildSchema(`
    type Post {
        userId: Int
        id: Int
        title: String
        body: String
    }

    type User {
        name: String
        age: Int
        college: String
    }

    type Query {
        hello: String
        welcomeMessage(name: String, dayOfWeek: String!): String
        getUser: User
        getUsers: [User]
        getPostsFromExternalAPI: [Post]
    }

    input UserInput {
        name: String!
        age: Int!
        college: String!
    }

    type Mutation {
        setMessage(newMessage: String): String
        createUser(user: UserInput): User
    }
`);

// createUser(name: String!, age: Int!, college: String!): User

const root = {
    hello: () => {
        return "Hello World!";
    },
    welcomeMessage: (args) => {
        // console.log(name);
        return `hello ${args.name} welcome to our website, ${args.dayOfWeek}`;
    },
    getUser: () => {
        const user = {
            name: "amirali",
            age: 20,
            college: "rostami",
        };
        return user;
    },
    getUsers: () => {
        const users = [
            {
                name: "amirali",
                age: 20,
                college: "shahidan",
            },
            {
                name: "amir",
                age: 23,
                college: "mohammadi",
            },
            {
                name: "mohammad",
                age: 25,
                college: "combridge",
            },
            {
                name: "alireza",
                age: 30,
                college: "gharb",
            },
        ];
        return users;
    },
    getPostsFromExternalAPI: async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return result.data;
    },
    setMessage: ({ newMessage }) => {
        message = newMessage;
        return message;
    },
    createUser: (args) => {
        console.log(args);
        // craete a new user inside db or external api or even firestore
        return args.user;
    },
};

app.use(
    "/graphql",
    graphqlHTTP({
        graphiql: true,
        schema: schema,
        rootValue: root,
    })
);

const port = 8000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
