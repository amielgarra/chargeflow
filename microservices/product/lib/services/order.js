const { connect } = require("../db/config");
const { Order } = require("../models/order.model");
const { sendEmail } = require("./email");

class OrderRepository {
    constructor() {
        connect();
    }

    async createOrder(order) {
        const total = order.products.reduce((sum, product) => {
            return sum + product.quantity * product.price;
        }, 0);
        order.totalAmount = total;
        console.log(this.generateOrderEmail(order));
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
        const tableRows = order.products.map((product) => {
            return `
			<tr>
				<td>${product.name}</td>
				<td>${product.price}</td>
				<td>${product.quantity}</td>
				<td>${+product.price * +product.quantity}</td>
			</tr>
			`;
        });
        html += `
		<table style="width: 50%">
			<tr>
				<th style="text-align: left;">Product</th>
				<th style="text-align: left;">Amount</th>
				<th style="text-align: left;">Quantity</th>
				<th style="text-align: left;">Total</th>
			</tr>
			${tableRows.join("")}
		</table>
		<h3>Total Amount: ${order.totalAmount}</h3>`;

        return html;
    }
}

module.exports = new OrderRepository();
