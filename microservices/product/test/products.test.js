var expect = require("chai").expect;
const { assert } = require("chai");
const getProducts = require("../getProducts/getProducts");
const getProduct = require("../getProduct/getProduct");
const { event } = require("./data/events");

describe("Test Product Services", () => {
    describe("Get Products", () => {
        it("should get products", async () => {
            const result = await getProducts.get();
            expect(result.statusCode).to.equal(200);
            assert.isNotEmpty(result.body);
        });
    });

    describe("Get Product", () => {
        it("should get a single product", async () => {
            const result = await getProduct.get(event.payload.getProduct);
            expect(result.statusCode).to.equal(200);
            assert.isNotEmpty(result.body);
        });
    });
});
