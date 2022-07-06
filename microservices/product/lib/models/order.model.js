const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({ orderNumber: "string", totalAmount: "number", product: {}, createDate: "date" }, { timestamps: { createDate: "created_at" } });

const Order = mongoose.model("orders", orderSchema);

module.exports = {
    Order,
};
