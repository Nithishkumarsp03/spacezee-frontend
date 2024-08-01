import { useState } from "react";
import UserEMIHeader from "./UserEMIHeader";
import UserEMITabView from "./UserEMITabView";
import UserEMICalculator from "./UserEMICalculator";
import UserEMIWidgetToggler from "./UserEMIWidgetToggler";
import styles from "./UserEMIApp.module.css";
import UserEMIMainCalculator from "./UserEMIMainCalculator";

function UserEMIApp() {
  const [activeTab, setActiveTab] = useState("question");

  return (
    <div className={styles.app}>
      <UserEMIHeader />
      <section className={styles.contentWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-4 mb-lg-0">
              <UserEMITabView
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
            <div className="col-lg-4">
              <UserEMIMainCalculator />
            </div>
          </div>
        </div>
      </section>
      <UserEMIWidgetToggler />
    </div>
  );
}

export default UserEMIApp;
