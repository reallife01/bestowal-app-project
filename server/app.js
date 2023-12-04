// Import All Dependencies
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');


const app = express();

// Configure ENV File & Require Connection File
dotenv.config({ path: './config.env' });
require('./db/conn');
const port = process.env.PORT;



// Require Model    
const Message = require('./models/msgSchema');



// These Method is Used to Get Data and Cookies from FrontEnd
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());



app.get('/', (req, res) => {
  res.send("Hello World");
})




const formSchema = new mongoose.Schema({
  username: String,
  email: String,
  phoneNumber: Number,
  aadharNumber: Number,
  address: String,
  state: String,
  nationality: String,
  cause: String,
  isPrivate: Boolean,
  isPublic: Boolean,
  whatsappNumber: Number,
  bankAccountHolder: String,
  bankAccountNumber: Number,
  ifscCode: Number,
  branch: String,
  estimatedAmount: Number,
  image: String
});

const Form = mongoose.model('Form', formSchema);

app.post('/api/donateEase', async (req, res) => {
  try {
    let form = new Form();
    form.username = req.body.username;
    form.email = req.body.email;
    form.phoneNumber = req.body.phoneNumber;
    form.aadharNumber = req.body.aadharNumber;
    form.address = req.body.address;
    form.state = req.body.state;
    form.nationality = req.body.nationality;
    form.cause = req.body.cause;
    form.isPrivate = req.body.isPrivate;
    form.isPublic = req.body.isPublic;
    form.whatsappNumber = req.body.whatsappNumber;
    form.bankAccountHolder = req.body.bankAccountHolder;
    form.bankAccountNumber = req.body.bankAccountNumber;
    form.ifscCode = req.body.ifscCode;
    form.branch = req.body.branch;
    form.estimatedAmount = req.body.estimatedAmount;
    form.image = req.body.image
    
  

    const doc = await form.save();
    console.log(doc);
    res.json(doc);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post("/api/fundraisers", async (req, res) => {
  try {
    const formData = req.body;

    // Create a new instance of the Fundraiser model with the form data
    const fundraiser = new Fundraiser(formData);

    // Save the fundraiser data to the database
    await fundraiser.save();

    res.status(200).json({ message: "Fundraiser data saved successfully." });
  } catch (error) {
    console.error("Error saving fundraiser:", error);
    res.status(500).json({ error: "An error occurred while saving the fundraiser data." });
  }
});

// API endpoint to fetch project data
app.get('/api/projects', (req, res) => {
  // Your logic to fetch and send project data
  res.json({ projectData: 'your project data' });
});



// Message
app.post('/message', async (req, res) => {
  try {
    // Get body or Data
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const sendMsg = new Message({
      name: name,
      email: email,
      message: message
    });

    // Save Method is Used to Create User or Insert User 
    // Because of Hashing. After Hash, It will save to DB
    const created = await sendMsg.save();
    console.log(created);
    res.status(200).send("Sent");

  } catch (error) {
    res.status(400).send(error)
  }
})

// Run Server 
app.listen(port, () => {
  console.log("Server is Listening")
})


// Our Backend is Done And Store Data in Database
// Now Its Time to Connect Front End With BackEnd

