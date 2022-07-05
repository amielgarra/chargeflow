const sinon = require("sinon");
const { assert } = require("chai");
const service = require("../lib/services/product");
const { event } = require("./data/events");

let mock = null;
let sandbox = null;

describe("Test Product Services", () => {
    before(() => {
        sandbox = sinon.createSandbox();
        mock = setup();
    });

    after(() => {
        mock = null;
        sinon.restore();
    });

    describe("Create Product", () => {
        it("should insert a product", async () => {
            const mockService = mock.mockService.service.createProduct;
            const createProduct = mockService.returns(event.payload.createProduct);
            const product = createProduct();
            assert.isNotEmpty(product);
        });
    });
    describe("Get All Products", () => {
        it("should get all products", async () => {
            const mockService = mock.mockService.service.getProducts;
            const getProducts = mockService.returns(event.payload.getProducts);
            const products = getProducts();
            assert.isNotEmpty(products);
        });
    });
});

function setup() {
    let mockService = { service: {} };
    mockService.service.createProduct = sandbox.stub(service, "createProduct");
    mockService.service.getProducts = sandbox.stub(service, "getProducts");
    return { mockService };
}
