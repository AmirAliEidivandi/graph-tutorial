const path = require("path");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");
const app = express();

const typesArray = loadFilesSync(path.join(__dirname, "**/*.gql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
});

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

const port = 8000;
app.listen(port, () => console.log("listening on port 8000"));
