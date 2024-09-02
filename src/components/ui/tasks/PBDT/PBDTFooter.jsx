import React from "react";
import styles from "./PBDTFooter.module.css";

const PBDTFooter = ({ validateData }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <button className={styles.validateButton} onClick={validateData}>
          Validate
        </button>
      </div>
    </footer>
  );
};

export default PBDTFooter;
