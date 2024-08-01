import React from "react";
import styles from "./PdfLink.module.css";

const PdfLink = ({ title, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.chipButton} border ps-3 pe-3 pt-2 pb-2 me-3 mb-3 d-flex rounded-pill align-items-center`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-file-earmark-pdf me-2"
        viewBox="0 0 16 16"
      >
        <path d="M5.5 6.5A.5.5 0 0 1 6 6h4a.5.5 0 0 1 .5.5V7H6a.5.5 0 0 0-.5.5V8H4.5a.5.5 0 0 1 0-1h1V6.5zm0 1.5h1.5v1H6v-.5a.5.5 0 0 0-.5-.5H5.5zm1.5 1v1H7v-.5a.5.5 0 0 0-.5-.5H6zm1 1.5V8h1v3H8v-.5a.5.5 0 0 0-.5-.5H7zm1 1.5v-1h.5a.5.5 0 0 0 .5-.5V9h-1v3z" />
        <path d="M14 4.5V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6l.5.5H13a1 1 0 0 1 1 1v3zm-1-3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2V10H9v3H3V2a1 1 0 0 1 1-1h6v1h2z" />
      </svg>
      <span>{title}</span>
    </a>
  );
};

export default PdfLink;
