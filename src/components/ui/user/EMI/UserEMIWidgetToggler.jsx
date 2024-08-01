import React, { useState } from "react";
import styles from "./UserEMIWidgetToggler.module.css";
import UserEMICalculator from "./UserEMICalculator";

function UserEMIWidgetToggler() {
  const [showWidget, setShowWidget] = useState(true);

  const toggleWidget = () => {
    setShowWidget(!showWidget);
  };

  return (
    <div className={styles.widgetTogglerWrapper}>
      <button onClick={toggleWidget} className={styles.widgetToggler}>
        {showWidget ? "Hide Calculator" : "Show Calculator"}
      </button>
      {showWidget && (
        <div className={styles.widget}>
          <UserEMICalculator />
        </div>
      )}
    </div>
  );
}

export default UserEMIWidgetToggler;
