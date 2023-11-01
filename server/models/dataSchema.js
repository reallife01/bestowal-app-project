const mongoose = require("mongoose");

// Define a schema for the data details
const DataSchema = new mongoose.Schema({
// Define the fields and their types
totalBacking: {
type: Number,
required: true
},
totalProject: {
type: Number,
required: true
},
totalDonation: {
type: Number,
required: true
}
});

// Export the model as a module
const projects = new mongoose.model("DATA", DataSchema);

module.exports = projects;