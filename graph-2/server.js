const path = require("path");
const express = require("express");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { ApolloServer } = require("apollo-server-express");

const typesArray = loadFilesSync(path.join(__dirname, "**/*.gql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

const startApolloServer = async () => {
    const app = express();

    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolversArray,
    });

    const server = new ApolloServer({
        schema,
    });

    await server.start();
    server.applyMiddleware({ app, path: "/graphql" });

    const port = 8000;
    app.listen(port, () => console.log("listening on port 8000"));
};

startApolloServer();
