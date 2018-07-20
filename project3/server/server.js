var express=require("express");
var app=express();
var bodyParser=require("body-Parser");
var mongoose=require("mongoose");

Movie=require("./models/Movie");
User=require("./models/User");
//connect to moongose
mongoose.connect("mongodb://localhost/movie");
var db=mongoose.connection;

app.listen(5000);
console.log("Listening on Port");