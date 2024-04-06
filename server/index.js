const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");
const Song = require("./models/song");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const multer = require("multer");
require("dotenv").config();

const { spawn } = require("child_process");
const childPython = spawn("python", ["algo.py"]);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((e) => {
    console.log("Error connecting to MongoDB:",e);
  });

<<<<<<< HEAD
//Define a schema for storing image data in MongoDB
const imageSchema = {
  image: String,
}
const Image = mongoose.model('Image',imageSchema);

const upload = multer({
  dest: "./uploads/",
});
=======
// const upload = multer({
//   dest: "./uploads/",
// });
>>>>>>> 2e7479efa84b27336e24d9b8f6c4399b729b546d


app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); // Destination folder for storing images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Renaming the file to include timestamp
  },
});

// Initialize multer middleware
const upload = multer({ storage });

app.post("/upload", upload.single("image"), async (req, res) => {
  const image = req.body.image;

  const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
  const dataBuffer = Buffer.from(base64Data, "base64");

  // Define the directory where you want to save the image
  // const uploadDirectory = path.join(__dirname, "", "images");

  // Ensure the directory exists
  fs.mkdirSync("./uploads", { recursive: true });

  // Generate a unique filename
  const filename = "image.jpg"; // You can modify this as needed

  // Define the path to save the image
  const filePath = path.join("./uploads", filename);

<<<<<<< HEAD
  const image = req.body;
 // console.log(image);
  // await image.save(`./uploads/${image.originalname}`);
=======
  // Write the image data to the file
  fs.writeFile(filePath, dataBuffer, (err) => {
    if (err) {
      console.error("Error saving image:", err);
    }
>>>>>>> 2e7479efa84b27336e24d9b8f6c4399b729b546d

    // Image saved successfully
    console.log("Image saved successfully.");
  });

  // console.log(image);
  const songs = await Song.find({ emotion: result });
  res.send(songs);
});

app.listen(process.env.PORT, () => {
  console.log(`server is running at port ${process.env.PORT}`);
});


// const sendEmail = require('./mailer');
// // Example usage
// sendEmail('recipient@example.com', 'Test Email', 'This is a test email from Nodemailer.');


