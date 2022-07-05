const { handleError, handleSuccess } = require("../lib/helpers/response");
const orderRepository = require("../lib/services/order");

module.exports.create = async (event) => {
    try {
        const data = JSON.parse(event.body);

        const order = await orderRepository.createOrder(data);

        return handleSuccess(order);
    } catch (e) {
        console.error(e);
        return handleError({ body: JSON.stringify(e) });
    }
};
