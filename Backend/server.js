import dotenv from "dotenv";
dotenv.config(); // Load .env first

import express from "express"
import cors from "cors"
import connectDB from "./config/db.js"
import { clerkWebhooks } from "./controllers/webhooks.js"
import multer from "multer";
import {v2 as cloudinary} from "cloudinary"
import streamifier from "streamifier";
import ReportIssue from "./models/ReportIssue.js"
import Contact from "./models/Contact.js"

// Configure Cloudinary
cloudinary.config({ 
        cloud_name: 'dbsghk0em', 
        api_key: '733595422355339', 
        api_secret: 'ews3ZpKeI98XbpI-WMDUdFQQZSA',// Click 'View API Keys' above to copy your API secret
        cloudinary_url: process.env.CLOUDINARY_URL
    });

// Initialize express app
const app = express()

// Database connection
await connectDB();
// console.log("MONGO URI:", process.env.MONGODB_URI);

const indexesToDrop = [
  "email_1",
  "location_1",
  "description_1",
  "category_1",
  "image_1",
  "Issue_title_1"
];

for (const index of indexesToDrop) {
  try {
    await ReportIssue.collection.dropIndex(index);
    // console.log(`✅ Dropped unique index on ${index}`);
  } catch (error) {
    // console.log(`⚠️ Index ${index} not found or already removed:`, error.message);
  }
}

// Middleware
app.use(cors())
app.use(express.json())

// Routes

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.post("/webhooks",clerkWebhooks)

// Image storage Engine



const upload = multer({ storage: multer.memoryStorage() });

// Creating Upload Endpoint for images

app.use('/images', express.static('upload/images'))

// app.post("/upload", upload.single('IssuePhoto'), (req, res) => {
//     res.json({
//         success: 1,
//         image_url: `http://localhost:${PORT}/images/${req.file.filename}`
//     })
// })

app.post("/upload", upload.single("IssuePhoto"), async (req, res) => {
  try {
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "issue_images" },
        (error, result) => {
          if (result) resolve(result);
          else reject(error);
        }
      );
      streamifier.createReadStream(req.file.buffer).pipe(stream);
    });

    res.json({
      success: 1,
      image_url: result.secure_url,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: 0, error: error.message });
  }
});


app.post('/ReportIssue', async (req,res)=> {

  const lastIssue = await ReportIssue.findOne().sort({ _id: -1 });

    const nextId = lastIssue ? lastIssue._id + 1 : 1;

   const reportData = new ReportIssue({
      _id : nextId,
      Issue_title : req.body.Issue_title,
      email : req.body.email,
      location : req.body.location,
      description : req.body.description,
      category : req.body.category,
      image : req.body.image,
   })
   console.log(reportData);
   await reportData.save();
   console.log("Issue Reported Successfully");
   res.json({
    success:true,
    message:'Issue Reported Successfully'
  })
})

// creating api for deleting products

app.post('/removeIssue', async (req,res) => {
  await ReportIssue.findByIdAndDelete({_id:req.body._id});
  console.log("Issue Deleted Successfully");
  res.json({
    success:true,
    message:'Issue Deleted Successfully'
  })
})

// creating api for fetching all Issues

app.get('/allIssues', async (req,res) => {
  let issues = await ReportIssue.find({});
  console.log("all Issues fetched");
  res.json(issues);
})

// creating api for save contact us messages
app.post('/contact', async (req,res) => {
   const lastIssue = await Contact.findOne().sort({ _id: -1 });

    const nextId = lastIssue ? lastIssue._id + 1 : 1;

   const reportData = new Contact({
      _id : nextId,
      name : req.body.name,
      email : req.body.email,
      message : req.body.message,
      subject : req.body.subject,
   })
   console.log(reportData);
   await reportData.save();
   console.log("Issue contact Successfully");
   res.json({
    success:true,
    message:'Issue contact Successfully'
  })
})


const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
