const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const app = express();

const schemaText = `
    type Query {
        products: [Product]
        orders: [Order]
    }
`;

const schema = makeExecutableSchema({
    typeDefs: [schemaText],
});

const root = {
    products: [
        {
            id: "h1",
            description: "hello-1",
            price: 42.5,
        },
        {
            id: "h2",
            description: "hello-2",
            price: 45.6,
        },
    ],
    orders: [
        {
            date: "2005-05-05",
            subtotal: 90.22,
            items: [
                {
                    product: {
                        id: "h1",
                        description: "old hello-1",
                        price: 45.86,
                    },
                    quantity: 2,
                },
            ],
        },
    ],
};

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        rootValue: root,
        graphiql: true,
    })
);

const port = 8000;
app.listen(port, () => console.log("listening on port 8000"));
