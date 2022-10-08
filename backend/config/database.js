const mongoose = require("mongoose");

exports.connectDatabase = () =>{
    mongoose
        .connect(process.env.MONGO_URI,{
            useNewUrlParser:true ,
            useUnifiedTopology : true
        })
        .then((conn) => console.log(`Database Connected : ${conn.connection.host}`))
        .catch((err)=>console.log(err))
}