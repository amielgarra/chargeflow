const { handleError, handleSuccess } = require("../lib/helpers/response");
const productRepository = require("../lib/services/product");

module.exports.get = async (event) => {
    try {
        const params = event.pathParameters || {};

        if (!params && !params.id) {
            return handleError({ body: "Insufficient parameter. " });
        }

        const product = await productRepository.getProduct(params.id);

        if (!product) {
            return handleError({ body: "Product not found." });
        }

        return handleSuccess(product);
    } catch (e) {
        console.log(e);
        return handleError({ body: JSON.stringify(e) });
    }
};
