import React from "react";
import "./songCard.css";

const SongCard = ({ song }) => {
  return (
    <a href={song.src} target="_blank" rel="noreferrer">
      <div className="songcard py-3 px-5 mt-3 d-flex justify-content-between align-items-center">
        <div className="m-0">
          <span className="d-flex">
            <i class="fa fa-music" aria-hidden="true"></i>
            <h4 style={{ margin: "0 0 0 10px" }}>{song.name}</h4>
          </span>
          <p style={{ margin: 0 }}>Singer</p>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ width: "40%" }}
        >
          <h5>{song.emotion}</h5>
          <i
            class="fa fa-external-link"
            aria-hidden="true"
            style={{ color: "#1f1448" }}
          ></i>
        </div>
      </div>
    </a>
  );
};

export default SongCard;
