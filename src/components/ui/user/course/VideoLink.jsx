import React from "react";
import styles from "./VideoLink.module.css";

const VideoLink = ({ title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.chipButton} border ps-3 pe-3 pt-2 pb-2 me-3 mb-3 d-flex rounded-pill align-items-center`}
      style={{ cursor: "pointer" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-play-btn-fill me-2"
        viewBox="0 0 16 16"
      >
        <path d="M6.79 5.093A.5.5 0 0 1 7.5 5.5v5a.5.5 0 0 1-.71.457L4.79 9.703a.5.5 0 0 1 0-.867l2-1.25a.5.5 0 0 1 .5 0z" />
        <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4z" />
      </svg>
      <span>{title}</span>
    </div>
  );
};

export default VideoLink;
