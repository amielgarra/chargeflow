const { handleError, handleSuccess } = require("../lib/helpers/response");
const productRepository = require("../lib/services/product");

module.exports.create = async (event) => {
    try {
        const data = JSON.parse(event.body);

        const order = await productRepository.createProduct(data);

        return handleSuccess(order);
    } catch (e) {
        console.error(e);
        return handleError({ body: JSON.stringify(e) });
    }
};
