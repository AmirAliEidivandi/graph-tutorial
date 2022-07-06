const { graphqlHTTP } = require("express-graphql");
const { Schema, root} = require("./schema");

module.exports = graphqlHTTP({
    graphiql: true,
    schema: Schema,
    rootValue: root,
});
