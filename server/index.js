const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Song = require("./models/song");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const multer = require("multer");
require("dotenv").config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((e) => {
    console.log("Error connecting to MongoDB:",e);
  });

//Define a schema for storing image data in MongoDB
const imageSchema = {
  image: String,
}
const Image = mongoose.model('Image',imageSchema);

const upload = multer({
  dest: "./uploads/",
});


app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.get("/", async (req, res) => {
//   const { q } = req.query;

//   if (q) {
//     const songs = await Song.find({ emotion: q });

//     res.send(songs);
//   } else {
//     const songs = await Song.find();

//     res.send(songs);
//     // console.log("Data");
//   }
// });

// app.post("/upload", upload.single("image"), async (req, res) => {
//   // const imgSrc = req.body;
//   // console.log(imgSrc);
//   // console.log("Image saved");

//   const image = req.body;
//   // await image.save(`./uploads/${image.originalname}`);

//   console.log(image);

//   res.send("successfull");
// });

app.post("/upload", async (req, res) => {
  // const imgSrc = req.body;
  // console.log(imgSrc);
  // console.log("Image saved");

  const image = req.body;
 // console.log(image);
  // await image.save(`./uploads/${image.originalname}`);

  console.log(image);
  const songs = await Song.find();

  res.send(songs);
});

app.listen(process.env.PORT, () => {
  console.log(`server is running at port ${process.env.PORT}`);
});


// const sendEmail = require('./mailer');
// // Example usage
// sendEmail('recipient@example.com', 'Test Email', 'This is a test email from Nodemailer.');


