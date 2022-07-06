const mongoose = require("mongoose");

const connect = () => {
    const url = process.env.DB_CONNECTION || "mongodb+srv://admin:admin1234@chargeflow.culu1uo.mongodb.net/?retryWrites=true&w=majority";
    mongoose.connect(url);

    mongoose.connection.once("open", async () => {
        console.info("Connected to database");
    });

    mongoose.connection.on("error", (err) => {
        console.error("Error connecting to database  ", err);
    });
};

const disconnect = () => {
    if (!mongoose.connection) {
        return;
    }

    mongoose.disconnect();

    mongoose.once("close", async () => {
        console.log("Disconnected  to database");
    });
};

module.exports = {
    connect,
    disconnect,
};
