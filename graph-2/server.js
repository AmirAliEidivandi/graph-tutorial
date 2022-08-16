const express = require("express");
const app = express();
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const schema = buildSchema(`
    type Query {
        products: [Product]
        orders: [Order]
    }

    type Product {
        id: ID!
        description: String!
        reviews: [Review]
        price: Float!
    }

    type Review {
        rating: Int!
        comment: String!
    }

    type Order {
        date: String!
        subtotal: Float!
        items: [OrderItem]
    }

    type OrderItem {
        product: Product!
        quantitiy: Int!
    }
`);

const root = {
    products: [
        {
            id: "redshoe",
            description: "Red Shoe",
            price: 42.21,
        },
        {
            id: "bluejean",
            description: "Blue Jean",
            price: 55.43,
        },
    ],
    orders: [
        {
            date: "2005-05-05",
            subtotal: 90.22,
            items: [
                {
                    product: {
                        id: "redshoe",
                        description: "Old Red Shoe",
                        price: 45.11,
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
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);

const port = 8000;
app.listen(port, () => console.log("Running Graphql server..."));
