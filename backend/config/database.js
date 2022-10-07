const mongoose = require("mongoose");

exports.connectDatabase = () =>{
    mongoose
        .connect(process.env.MONGO_URI)
        .then((conn) => console.log(`Database Connected : ${conn.connection.host}`))
        .catch((err)=>console.log(err))
}