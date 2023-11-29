import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import "./cameraSection.css";
import cameraImage from "../assets/camera.jpg";

const CameraSection = () => {
  const [webCam, setWebCam] = useState(false);
  const webCamRef = useRef(null);

  const handleCapture = () => {
    const imageSource = webCamRef.current.getScreenshot();

    fetch("/api/images", {
      method: "POST",
      body: imageSource,
    });
  };

  return (
    <div className="camera-section" id="camera">
      <div className="container">
        <div className="row pb-5">
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
                Our Videos
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
              onClick={() => setWebCam(!webCam)}
            >
              try it. . .
            </button> */}
          </div>
        </div>
        <div className="row sec">
          <div className="col-lg-6">
            {webCam ? (
              <Webcam
                ref={webCamRef}
                onClickCapture={handleCapture}
                className="camera"
              ></Webcam>
            ) : (
              <img src={cameraImage} alt="camera" className="camera" />
            )}
          </div>
          <div className="col-lg-6">
            <div className="about-text ps-5">
              <h3
                className="title"
                style={{
                  fontFamily: "Satisfy",
                  fontSize: "2.5rem",
                  color: "#ea34ff",
                }}
              >
                Capture facial expressions
              </h3>
              {/* <h1 style={{ fontSize: "3rem", textTransform: "uppercase" }}>
                The electro vibe
              </h1> */}
              <p style={{ fontSize: "18px", float: "left" }}>
                Ready to embark on a personalized music journey? Click on the
                "Try it" button and let MoodBeat's advanced facial expression
                recognition technology transform your music experience. Our
                system will capture your facial expressions, analyze your
                emotions, and curate a playlist tailored to your unique mood.
                Immerse yourself in the power of music and let{" "}
                <b>
                  <i>MoodBeat</i>
                </b>{" "}
                be your guide to a world of personalized melodies.
              </p>
              <button
                className="login-butt px-4 py-2 mt-3 fs-5 rounded"
                style={{
                  color: "white",
                  textTransform: "uppercase",
                  border: "none",
                }}
                onClick={() => setWebCam(!webCam)}
              >
                try it . . .
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CameraSection;
