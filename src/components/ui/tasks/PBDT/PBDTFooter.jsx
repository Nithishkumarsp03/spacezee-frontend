import React from "react";
import styles from "./PBDTFooter.module.css";

const PBDTFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <button className={styles.validateButton}>Validate</button>
      </div>
    </footer>
  );
};

export default PBDTFooter;
