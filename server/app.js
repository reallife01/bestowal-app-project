const dotenv = require('dotenv');
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Configure ENV File & Require Connection File
dotenv.config({ path: './.env' });

const dbUri = process.env.MONGO;

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Mongo DB connection established");
}).catch((e) => {
  console.log("Error connecting to MongoDB:", e);
});

const app = express();
const port = process.env.PORT;


// Require Model    
const Message = require('./models/msgSchema');



// These Method is Used to Get Data and Cookies from FrontEnd
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.get('/', (req, res) => {
  res.send("Hello World");
})


const donationSchema = new mongoose.Schema({
  formId: String,
  campaignName: String,
  donatorName: String,
  donationAmount: Number,
});

const Donation = mongoose.model('Donation', donationSchema);

// Endpoint to handle donation submissions
app.post('/donate/:formId', async (req, res) => {
  const { formId } = req.params;
  const { campaignName, donatorName, donationAmount, } = req.body;

  try {
    // Save the donation data to MongoDB
    const donation = new Donation({
      formId,
      campaignName,
      donatorName,
      donationAmount,
    });

    await donation.save();

    res.status(201).json({ message: 'Donation submitted successfully' });
  } catch (error) {
    console.error('Error saving donation:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




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
  raised: String,
  donator: String,
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
    form.donator = req.body.donator;



    const doc = await form.save();
    console.log(doc);
    res.json(doc);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});









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
    .then(forms => res.json(forms))
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

