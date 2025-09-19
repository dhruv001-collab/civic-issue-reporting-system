import dotenv from "dotenv";
dotenv.config(); // Load .env first

import express from "express"
import cors from "cors"
import connectDB from "./config/db.js"
import { clerkWebhooks } from "./controllers/webhooks.js"
import ReportIssue from "./models/ReportIssue.js"
import Path from "path"
import multer from "multer";

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

const storage = multer.diskStorage({
  destination:'./upload/images',
  filename:(req,file,cb)=>{
    return cb(null,`${file.fieldname}_${Date.now()}${Path.extname(file.originalname)}`)
  }
})

const upload = multer({ storage: storage })

// Creating Upload Endpoint for images

app.use('/images', express.static('upload/images'))

app.post("/upload", upload.single('IssuePhoto'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${PORT}/images/${req.file.filename}`
    })
})


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


const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
