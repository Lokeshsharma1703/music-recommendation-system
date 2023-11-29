const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Song = require("./models/song");
const fileUpload = require("express-fileupload");
require("dotenv").config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.get("/", async (req, res) => {
  const { q } = req.query;

  if (q) {
    const songs = await Song.find({ emotion: q });

    res.send(songs);
  } else {
    const songs = await Song.find();

    res.send(songs);
  }
});

app.post("/api/images", (req, res) => {
  const imgSrc = req.body;
  console.log(imgSrc);
  res.send("Image saved");
});

app.post("/uploads", (req, res) => {
  const file = req.files.image;

  file.mv("./uploads/" + file.name, (err) => {
    if (err) {
      return res.status(500).send("Error saving file");
    }

    return res.status(200).send("File uploaded successfully");
  });
});

app.listen(process.env.PORT, () => {
  console.log(`server is running at port ${process.env.PORT}`);
});
