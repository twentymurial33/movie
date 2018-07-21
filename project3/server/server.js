var express = require("express");
var app = express();
var morgan = require("morgan")
var mongoose = require("mongoose")
var router = require("./router")

mongoose.connect("mongodb://localhost/movie");

app.use(morgan("combined"));
app.use("/v1",router);

const server=app.listen(3000,()=>{
  const{address,port}=server.address();
    console.log("Listening on PORT!");
});
