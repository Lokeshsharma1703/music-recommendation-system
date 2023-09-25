const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Song = require("./models/song");
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

app.listen(process.env.PORT, () => {
  console.log(`server is running at port ${process.env.PORT}`);
});
