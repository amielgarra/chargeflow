const mongoose = require("mongoose");

const connect = () => {
    const url = process.env.DB_CONNECTION;
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

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
