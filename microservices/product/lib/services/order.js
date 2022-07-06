const { connect } = require("../db/config");
const { Order } = require("../models/order.model");
const { sendEmail } = require("./email");
const product = require("./product");

class OrderRepository {
    constructor() {
        connect();
    }

    async createOrder(order) {
        const total = order.product.quantity * order.product.price;
        order.totalAmount = total;
        const result = await Order.create(order);

        if (result) {
            const htmlEmail = this.generateOrderEmail(order);
            const subject = `Successful Order: ${order.orderNumber}`;
            await sendEmail(order.to, subject, htmlEmail);
        }

        return result;
    }

    generateOrderEmail(order) {
        let html = "";
        html += `<h3>You have successfully placed an order. Below is the summary of the order.</h3>`;
        html += `<h3>Order #${order.orderNumber}</h3>`;
        const tableRow = `
			<tr>
				<td>${order.product.name}</td>
				<td>${order.product.price}</td>
				<td>${order.product.quantity}</td>
				<td>${+order.product.price * +order.product.quantity}</td>
			</tr>
			`;
        html += `
		<table style="width: 50%">
			<tr>
				<th style="text-align: left;">Product</th>
				<th style="text-align: left;">Amount</th>
				<th style="text-align: left;">Quantity</th>
				<th style="text-align: left;">Total</th>
			</tr>
			${tableRow}
		</table>
		<h3>Total Amount: ${order.totalAmount}</h3>`;

        return html;
    }
}

module.exports = new OrderRepository();
