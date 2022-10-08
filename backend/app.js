const express = require("express");
const app = express();

if(process.env.NODE_ENV !== "production"){
    require("dotenv").config({path: "./config/config.env"})
}

// Using Middlewares
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// Importing Routes
const post = require("./routes/post");   // url will be :- localhost:3000/api/v1/post/upload


// Using Routes
app.use("/api/v1",post);




module.exports  = app;


