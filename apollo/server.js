const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./resolvers");
const typeDefs = require("./typeDefs");
const mongoose = require("mongoose");

async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({ app: app });

    app.use((req, res) => {
        res.send("hello from express apollo server");
    });

    await mongoose.connect("mongodb://localhost:27017/post_db", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    console.log("mongoose connection");

    app.listen(4000, () => console.log("Server running on port 4000"));
}

startServer();
