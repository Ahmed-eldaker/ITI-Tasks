require("dotenv").config("./.env");

const mongoose = require("mongoose")
const URI_MONGO_LOCAL=process.env.URI_MONGO_LOCAL;

const connectDB = ()=>{
    mongoose.connect(URI_MONGO_LOCAL).then(()=>{
        console.log("connected to DB successfully");
    }).catch((err)=>{
        console.log(err.message);
    })
}

module.exports = connectDB