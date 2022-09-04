const orders = [
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
];

function getAllOrders() {
    return orders;
}

module.exports = { getAllOrders };
