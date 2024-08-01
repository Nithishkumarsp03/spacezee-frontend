import React from "react";
import styles from "./UserEMIHeader.module.css";
import logo from "../../../../assets/images/logo.png";

function UserEMIHeader() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headWrap}>
          <div className={styles.headerContent}>
            <img src={logo} alt="Nergy Vidya" className={styles.logo} />
          </div>
          <div className={styles.qstnCount}>Question No: EMI_003AC</div>
        </div>
      </div>
    </header>
  );
}

export default UserEMIHeader;
