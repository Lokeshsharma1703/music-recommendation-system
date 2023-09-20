const Song = require("./models/song");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/songsDB")
  .then(() => {
    console.log("DB connected");
  })
  .catch((e) => {
    console.log(e);
  });

const songs = [
  {
    name: "O Bedardiya",
    emotion: "Sad",
    src: "abc",
  },
  {
    name: "Let's go crazy",
    emotion: "Happy",
    src: "abc",
  },
  {
    name: "Cocktail Beat",
    emotion: "Neutral",
    src: "abc",
  },
  {
    name: "Double Dare Ya",
    emotion: "Angry",
    src: "abc",
  },
];

async function add() {
  await Song.create(songs);
}

add();

console.log("Database seeded");
