import React from "react";
import styles from "./DaAccountHeader.module.css";

const DaAccountHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.brand}>
            <a href="#">
              <img
                src="/account/static/media/nergy_vidya_logo.ad0dae067621588aca5a339af18c7c3a.svg"
                alt="nergy vidya"
              />
            </a>
            <div className={styles.accountType}>
              <span>Savings Account</span>
            </div>
          </div>
          <div className={styles.question}>
            Question No: <span>SBA_001AA</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DaAccountHeader;
