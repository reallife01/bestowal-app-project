const mongoose = require('mongoose');


// User Schema Or Document Structure
const createProject = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        // unique : true,
    },
    cost : {
        type : Number,
        required : true,
        // unique : true,
    },
    accountNumber : {
        type : Number,
        required : true,
        // unique : true,
    },
    bankName : {
        type : String,
        required : true,
        // unique : true,
    },
    accountName : {
        type : String,
        required : true,
        // unique : true,
    },
    date : {
        type : String,
        required : true,
        // unique : true,
    },
    imageURL : {
        type : String,
        required : true,
        // unique : true,
    },
    description : {
        type : String,
        required : true,
        // unique : true,
    },
})
const projectNew = new mongoose.model("PROJECT", createProject);
module.exports = projectNew;



