// Import All Dependencies
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});
const {v4: uuidv4}= require("uuid");


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

// app.get("/config", (req, res) => {
//   res.send({
//     publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
//   });
// });




const formSchema = new mongoose.Schema({
  username: String,
  email: String,
  phoneNumber: String,
  aadharNumber: Number,
  address: String,
  state: String,
  nationality: String,
  cause: String,
  tittle: String,
  isPrivate: Boolean,
  isPublic: Boolean,
  whatsappNumber: String,
  bankAccountHolder: String,
  bankAccountNumber: Number,
  ifscCode: Number,
  branch: String,
  estimatedAmount: Number,
  image: String,
  expiresAt: String,
  raised: String
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
    form.tittle = req.body.tittle;
    form.isPrivate = req.body.isPrivate;
    form.isPublic = req.body.isPublic;
    form.whatsappNumber = req.body.whatsappNumber;
    form.bankAccountHolder = req.body.bankAccountHolder;
    form.bankAccountNumber = req.body.bankAccountNumber;
    form.ifscCode = req.body.ifscCode;
    form.branch = req.body.branch;
    form.estimatedAmount = req.body.estimatedAmount;
    form.image = req.body.image;
    form.expiresAt = req.body.expiresAt;
    form.raised = req.body.raised;
    
  

    const doc = await form.save();
    console.log(doc);
    res.json(doc);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});






app.post("/checkout", (req, res) => {
  const { number, token } = req.body;
  console.log("AMOUNT ", number);

  const idempontencyKey = uuidv4();

  
 stripe.checkout.sessions.create({
    success_url: 'http://localhost:3000/success',
    cancel_url: 'https://localhost:3000/cancel',
    payment_method_types: ['card'],
    mode:'payment',
  
  })

  return stripe.customers
    .create({
      email: token.email,
      source: token.id
    })
    .then(customer => {
      stripe.charges.create(
        {
          amount: number * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          
        },
        { idempontencyKey }
      );
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err));
    
});

// app.post("/api/fundraisers", async (req, res) => {
//   try {
//     const formData = req.body;

//     // Create a new instance of the Fundraiser model with the form data
//     const fundraiser = new Fundraiser(formData);

//     // Save the fundraiser data to the database
//     await fundraiser.save();

//     res.status(200).json({ message: "Fundraiser data saved successfully." });
//   } catch (error) {
//     console.error("Error saving fundraiser:", error);
//     res.status(500).json({ error: "An error occurred while saving the fundraiser data." });
//   }
// });


app.get('/get-form-count', async (req, res) => {
  try {
    const counterValue = await collection.findOne({ key: 'Form' });
    client.close();
    res.json({ success: true, count: counterValue ? counterValue.count : 0 });
  } catch (error) {
    console.error('Error getting form count:', error);
    res.status(500).json({ success: false });
  }
});


// API endpoint to fetch project data
// Example in your server.js or wherever you define routes
app.get('/getForms', async (req, res) => {
  // Your logic to fetch forms from MongoDB
  await Form.find()
  .then(forms => res.json(forms) )
  .catch(err => res.json(err))
});

app.get('/getForms/:formId', async (req, res) => {
  const { formId } = req.params;
  // Your logic to fetch a specific form from MongoDB based on formId
  await Form.findOne({ _id: formId })
    .then(forms => {
      if (forms) {
        res.json(forms);
      } else {
        res.status(404).json({ error: 'Form not found' });
      }
    })
    .catch(err => res.status(500).json({ error: 'Internal server error' }));
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

