import React from "react";
import DAHeader from "./DAHeader";
import DABanner from "./DABanner";
import DAFeatures from "./DAFeatures";
import DAPrivileges from "./DAPrivileges";
import DAFooter from "./DAFooter";
import styles from "./styles/DAApp.module.css";

const DAApp = () => {
  return (
    <div className={styles.app}>
      <DAHeader />
      <DABanner />
      <DAFeatures />
      <DAPrivileges />
      <DAFooter />
    </div>
  );
};

export default DAApp;
