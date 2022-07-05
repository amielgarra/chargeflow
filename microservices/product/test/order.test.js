const sinon = require("sinon");
const { assert } = require("chai");
const service = require("../lib/services/order");
const { event } = require("./data/events");

let mock = null;
let sandbox = null;

describe("Test Order Services", () => {
    before(() => {
        sandbox = sinon.createSandbox();
        mock = setup();
    });

    after(() => {
        mock = null;
        sinon.restore();
    });

    describe("Create Order", () => {
        it("should insert an order", async () => {
            const mockService = mock.mockService.service.createOrder;
            const createOrder = mockService.returns(event.payload.createOrder);
            const order = createOrder();
            assert.isNotEmpty(order);
        });
    });
});

function setup() {
    let mockService = { service: {} };
    mockService.service.createOrder = sandbox.stub(service, "createOrder");
    return { mockService };
}
