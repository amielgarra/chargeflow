const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({ name: "string", description: "string", price: "number", createDate: "date" }, { timestamps: { createDate: "created_at" } });

const Product = mongoose.model("products", productSchema);

module.exports = {
    Product,
};
