import React from "react";
import styles from "./PBDTHeader.module.css";

const PBDTHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <a href="/" className={styles.logoLink}>
            <img
              src="/budgeting/static/media/360logoVidya.fa5fc9ccf7a60ead5a649e372e3e321b.svg"
              alt="nergy vidya"
              className={styles.logo}
            />
          </a>
          <div className={styles.budgetLabel}>Budget</div>
        </div>
        <div className={styles.questionSection}>
          <span>
            Question No : <strong>PBDT_001AA</strong>
          </span>
        </div>
      </div>
    </header>
  );
};

export default PBDTHeader;
