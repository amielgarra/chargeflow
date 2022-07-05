const { connect } = require("../db/config");
const { Product } = require("../models/product.model");

class ProductService {
    constructor() {
        connect();
    }

    async getProducts() {
        const products = await Product.find({});
        console.log("Products: ", products);
        return products;
    }

    async createProduct(product) {
        return await Product.create(product);
    }
}

module.exports = new ProductService();
