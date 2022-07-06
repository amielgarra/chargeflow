var expect = require("chai").expect;
const { assert } = require("chai");
const getProducts = require("../getProducts/getProducts");
const createOrder = require("../createOrder/createOrder");
const { event } = require("./data/events");

describe("Test Order Services", () => {
    describe("Create Order", () => {
        it("should create an order", async () => {
            const result = await createOrder.create(event.payload.createOrder);
            expect(result.statusCode).to.equal(200);
            assert.isNotEmpty(result.body);
        });
    });
});
