const { connect } = require("../db/config");
const { Product } = require("../models/product.model");
const { ObjectId } = require("mongodb");
class ProductService {
    constructor() {
        connect();
    }

    async getProducts() {
        const products = await Product.find({});
        console.log("Products: ", products);

        return products;
    }

    async getProduct(id) {
        const product = await Product.findOne({ _id: new ObjectId(id) });
        console.log("Product: ", product);

        return product;
    }
}

module.exports = new ProductService();
