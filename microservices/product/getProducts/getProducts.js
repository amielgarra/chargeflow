const { handleError, handleSuccess } = require("../lib/helpers/response");
const productRepository = require("../lib/services/product");
const emailRepository = require("../lib/services/email");

module.exports.get = async (event) => {
    try {
        const products = await productRepository.getProducts();

        return handleSuccess(products);
    } catch (e) {
        console.error(e);
        return handleError({ body: JSON.stringify(e) });
    }
};
