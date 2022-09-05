const { getAllProducts, getProductsByPrice, getProductById, addNewProduct, addNewProductReview } = require("./products.model");

module.exports = {
    Query: {
        products: () => getAllProducts(),
        productsByPrice: (_, args) => getProductsByPrice(args.min, args.max),
        product: (_, args) => getProductById(args.id),
    },
    Mutation: {
        addNewProduct: (_, args) => addNewProduct(args.id, args.description, args.price),
        addNewProductReview: (_, args) => addNewProductReview(args.id, args.rating, args.comment),
    },
};
