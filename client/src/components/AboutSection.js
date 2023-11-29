import React from "react";
import "./about.css";
import image from "../assets/about.png.webp";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";

const data = [
  { title: "kesariya", text: "Arijit Singh", image: img1 },
  { title: "Ek Mulaqaat", text: "Shreya Ghoshal", image: img2 },
  { title: "Mahiye Jinna Sohna", text: "Darshan Raval", image: img3 },
  { title: "Jazbaat", text: "Jubin Nautiyal", image: img4 },
  { title: "Main Parwaana", text: "A. R. Rahman", image: img5 },
  { title: "Udd Jaa Kaale Kaava", text: "Udit Narayan", image: img6 },
  { title: "Suit Patiala", text: "Neha Kakkar", image: img7 },
  { title: "Sara Zamana", text: "Benny Dayal", image: img8 },
];

const AboutSection = () => {
  return (
    <div>
      <div className="about" id="about">
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <div className="row">
            <div className="col-lg-6">
              <img
                src={image}
                alt="background"
                style={{ position: "relative", zIndex: "100" }}
              />
            </div>
            <div className="col-lg-6">
              <div className="about-text">
                <h3
                  className="title"
                  style={{
                    fontFamily: "Satisfy",
                    fontSize: "2.5rem",
                    color: "#ea34ff",
                  }}
                >
                  Let MoodBeat Harmonize with Your Emotions
                </h3>
                {/* <h1 style={{ fontSize: "3rem", textTransform: "uppercase" }}>
                  The electro vibe
                </h1> */}
                <p style={{ fontSize: "17px", float: "left" }}>
                  <b>
                    No matter your mood, Euphonia has the perfect soundtrack for
                    you.
                  </b>{" "}
                  <br />
                  We understand that emotions can be complex and ever-changing.
                  That's why MoodBeat has a wide range of songs to choose from,
                  catering to every mood, from happy and upbeat to sad and
                  reflective. Whether you're feeling energized and ready to take
                  on the world or seeking solace and comfort, our music
                  recommendation system will find the perfect melodies to match
                  your emotional state. <br />
                  <b>
                    So don't be afraid to let your emotions guide you. Click on
                    the "Try it" button and let MoodBeat help you navigate your
                    emotions through the power of music.
                  </b>
                </p>
                <a href="#camera">
                  <button
                    className="login-butt px-4 py-2 mt-3 fs-5 rounded"
                    style={{
                      color: "white",
                      textTransform: "uppercase",
                      border: "none",
                    }}
                  >
                    try it . . .
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title">
                <h3
                  className="title"
                  style={{
                    fontFamily: "Satisfy",
                    fontSize: "2.5rem",
                    color: "#ea34ff",
                  }}
                >
                  Our Discogaphy
                </h3>
                <h2 style={{ fontSize: "3rem", textTransform: "uppercase" }}>
                  newest albums & singles
                </h2>
              </div>
            </div>
            <div
              className="col-lg-4 text-left text-lg-right pt-2"
              style={{
                float: "right",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              {/* <button
                className="login-butt px-4 py-1 mt-5 fs-5 rounded"
                style={{
                  color: "white",
                  textTransform: "uppercase",
                  border: "none",
                  height: "3rem",
                }}
              >
                buy on itunes
              </button> */}
            </div>
          </div>
          <div className="row mt-5">
            {data.map((item) => (
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-image"
                    style={{
                      height: "18rem",
                      width: "18rem",
                      objectFit: "cover",
                    }}
                  />
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
