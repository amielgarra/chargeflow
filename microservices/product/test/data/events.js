let payload = {};

payload.createProduct = {
    name: "Sample Product 5",
    description: "Sample Product 5 Description",
    price: 50.65,
    _id: "62c46a53d86c1198bbbc8c7b",
    createdAt: "2022-07-05T16:44:03.791Z",
    updatedAt: "2022-07-05T16:44:03.791Z",
    __v: 0,
};

payload.getProducts = [
    {
        _id: "62c446e394ff9b2c91a69f32",
        name: "Sample Product 1",
        description: "Sample Product Description",
        price: 50,
        createdAt: "2022-07-05T14:12:51.580Z",
        updatedAt: "2022-07-05T14:12:51.580Z",
        __v: 0,
    },
    {
        _id: "62c446fa8bc7b2d609db2de2",
        name: "Sample Product 2",
        description: "Sample Product Description",
        price: 65,
        createdAt: "2022-07-05T14:13:14.889Z",
        updatedAt: "2022-07-05T14:13:14.889Z",
        __v: 0,
    },
    {
        _id: "62c44702be53081eee7d7b4a",
        name: "Sample Product 3",
        description: "Sample Product Description",
        price: 80,
        createdAt: "2022-07-05T14:13:22.517Z",
        updatedAt: "2022-07-05T14:13:22.517Z",
        __v: 0,
    },
    {
        _id: "62c46a53d86c1198bbbc8c7b",
        name: "Sample Product 5",
        description: "Sample Product 5 Description",
        price: 50.65,
        createdAt: "2022-07-05T16:44:03.791Z",
        updatedAt: "2022-07-05T16:44:03.791Z",
        __v: 0,
    },
];

payload.createOrder = {
    body:
        "{\r\n" +
        '    "orderNumber": 1503,\r\n' +
        '    "product":\r\n' +
        "        {\r\n" +
        '            "name": "Product 1",\r\n' +
        '            "price": 50,\r\n' +
        '            "quantity": 3\r\n' +
        "        },\r\n" +
        '    "to": "amielvgarra@gmail.com"\r\n' +
        "}",
};

payload.getProduct = {
    pathParameters: {
        id: "62c446e394ff9b2c91a69f32",
    },
};

let event = {};

event.payload = payload;

module.exports = { event };
