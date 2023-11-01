// Import All Dependencies
const dotenv = require('dotenv');
const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');

const app = express();

// Configure ENV File & Require Connection File
dotenv.config({ path: './config.env' });
require('./db/conn');
const port = process.env.PORT;

// Require Model
const projectNew = require('./models/createProject');
const projects = require('./models/dataSchema');
const Message = require('./models/msgSchema');


// These Method is Used to Get Data and Cookies from FrontEnd
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send("Hello World");
})


// Registration
app.post('/createProjectAccount', async (req, res) => {
    try {
        // Get body or Data
        const title = req.body.title;
        const cost = req.body.cost;
        const accountNumber = req.body.accountNumber;
        const bankName = req.body.bankName;
        const accountName = req.body.accountName;
        const date = req.body.date;
        const imageURL = req.body.imageURL;
        const description = req.body.description;


        const createProject = new projectNew({
            title: title,
            cost: cost,
            accountNumber: accountNumber,
            bankName: bankName,
            accountName: accountName,
            date: date,
            imageURL: imageURL,
            description: description
            
        });

        // Save Method is Used to Create 
        const created = await createProject.save();
        console.log(created);
        res.status(200).send("Project created successfully");
        // const user = createProject.findOne({title: `${title.title}`});
        // await user.save();


    } catch (error) {
        res.status(400).send(error)
    }
})


// Use the async keyword for the route handler function

router.get("/get-dashboard-data", async (req, res) => {
    try {
      // Use the await keyword to wait for the promises to resolve
      const totalProjects = await projects.countDocuments({});
  
      // Create an object to store the total projects
      const allTotalProjects = {
        totalProjects: totalProjects
      };
  
      // Send the result as a JSON object
      res.status(200).json(allTotalProjects);
    } catch (err) {
      // Handle any errors
      console.error("Error fetching dashboard data:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  module.exports = router;


// router.get("/get-dashboard-data", async (req, res) => {
//     try {
//     // Use the await keyword to wait for the promises to resolve
//     const totalProjects = await projectNew.countDocuments({});

//     const allTotalProjects = new projects({
//         totalProjects: totalProjects
//     });
    
//     // const totalBacking = await projectNew
//     // .aggregate([
//     // {
//     // "$group": {
//     // "_id": null,
//     // "totalBacking": { "$sum": "$backing" },
//     // },
//     // },
//     // ])
//     // .next()?.totalBacking ?? 0;
    
//     // const totalDonations = await projectNew
//     // .aggregate([
//     // {
//     // "$group": {
//     // "_id": null,
//     // "totalDonations": { "$sum": "$donations" },
//     // },
//     // },
//     // ])
//     // .next()?.totalDonations ?? 0;
    
//     // Send the result as a JSON object
//     res.json({
//     totalProjects,
//     // totalBacking,
//     // totalDonations,
//     });


//     const total = await allTotalProjects
//     console.log(total);
//     res.status(200).send(success);

//     } catch (err) {
//     // Handle any errors
//     res.status(500).send(err);
//     }
//     });
    



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