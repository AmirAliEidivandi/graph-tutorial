const products = [
    {
        id: "h1",
        description: "hello-1",
        price: 42.5,
        reviews: [],
    },
    {
        id: "h2",
        description: "hello-2",
        price: 70.4,
        reviews: [],
    },
];

const getAllProducts = () => products;

const getProductsByPrice = (min, max) => products.filter((product) => product.price >= min && product.price <= max);

const getProductById = (id) => products.find((product) => product.id === id);

const addNewProduct = (id, description, price) => {
    const newProduct = {
        id,
        description,
        price,
        reviews: [],
    };
    products.push(newProduct);
    return newProduct;
};

const addNewProductReview = (id, rating, comment) => {
    const matchedProduct = getProductById(id);

    if (matchedProduct) {
        const newProductReview = {
            rating,
            comment,
        };

        matchedProduct.reviews.push(newProductReview);
        return newProductReview;
    }
};

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
    addNewProductReview,
};
