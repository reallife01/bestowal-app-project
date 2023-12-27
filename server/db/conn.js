// const mongoose = require('mongoose');

// const db = process.env.DATABASE;

// mongoose.connect(db, {
//     useNewUrlParser : true,
//     useUnifiedTopology : true
// }).then(()=>{
//     console.log("Connection Successfull");
// }).catch((e)=>{
//     console.log(e);
// })


var multer = require("multer");
var Express  = require("express");
var Mongoclient = require("mongodb").MongoClient;


var CONNECTION_STRING = "mongodb+srv://lateefaminu205:Asus99137@cluster0.aotk9gk.mongodb.net/?retryWrites=true&w=majority";

var DATABASENAME = "test";
var database;




