const { handleError, handleSuccess } = require("../lib/helpers/response");
const productRepository = require("../lib/services/product");

module.exports.get = async () => {
    try {
        const products = await productRepository.getProducts();

        return handleSuccess(products);
    } catch (e) {
        console.error(e);
        return handleError({ body: JSON.stringify(e) });
    }
};
