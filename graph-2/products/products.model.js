const products = [
    {
        id: "h1",
        description: "hello-1",
        price: 42.5,
    },
    {
        id: "h2",
        description: "hello-2",
        price: 70.4,
    },
];

function getAllProducts() {
    return products;
}

const getProductsByPrice = (min, max) => products.filter((product) => product.price >= min && product.price <= max);

module.exports = {
    getAllProducts,
    getProductsByPrice,
};
