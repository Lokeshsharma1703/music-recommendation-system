import React from "react";

const Slider = () => {
  return (
    <div className="slider" id="home">
      <div class="slideshow-container" style={{ marginTop: "7rem" }}>
        <div
          class="mySlides d-flex "
          style={{ flexDirection: "column", alignItems: "start" }}
        >
          <h3
            className="title"
            style={{ fontFamily: "Satisfy", fontSize: "2.5rem" }}
          >
            The classical vibe
          </h3>
          {/* <h1
            style={{
              fontSize: "5rem",
              textTransform: "uppercase",
              marginTop: "1.5rem",
            }}
          >
            Tailor Lachiri
          </h1> */}
          <p
            style={{
              fontSize: "25px",
              float: "left",
              fontFamily: "Dancing Script",
            }}
          >
            Join us on this musical journey and rediscover the joy of classical
            music. Our curated playlists and personalized recommendations will
            guide you through a world of musical beauty, offering you a
            sanctuary of tranquility amidst the chaos of modern life. Embrace
            the power of classical music to elevate your spirit, soothe your
            mind, and enrich your life.
          </p>
          <button
            className="login-butt px-4 py-2 mt-3 fs-5 rounded"
            style={{
              color: "white",
              textTransform: "uppercase",
              border: "none",
            }}
          >
            Explore
          </button>
        </div>

        {/* <a class="prev" onclick="plusSlides(-1)">
          ❮
        </a>
        <a class="next" onclick="plusSlides(1)">
          ❯
        </a> */}
      </div>
    </div>
  );
};

export default Slider;
