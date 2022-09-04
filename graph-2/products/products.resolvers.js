const { getAllProducts, getProductsByPrice } = require("./products.model");

module.exports = {
    Query: {
        products: () => getAllProducts(),
        productsByPrice: (_, args) => getProductsByPrice(args.min, args.max),
    },
};
