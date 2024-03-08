const mongoose = require("mongoose");
const URL_MONGO_LOCAL = process.env.URL_MONGO_LOCAL;

const connect = () => {
    mongoose
        .connect(URL_MONGO_LOCAL)
        .then(() => console.log("Database is connected"))
        .catch((err) => console.log(err));
}

module.exports = { connect };
