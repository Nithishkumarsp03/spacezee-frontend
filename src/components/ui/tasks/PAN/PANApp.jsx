import styles from "./PANHeader.module.css";
import PANHeader from "./PANHeader";
import PANFooter from "./PANFooter";
import { Outlet } from "react-router-dom";

function PANApp() {
  return (
    <div className={styles["style-1"]}>
      <div className={styles["style-2"]}>
        {/* Header */}
        <PANHeader />

        {/* Content */}
        <Outlet />

        {/* Footer */}
        <PANFooter />
      </div>
    </div>
  );
}

export default PANApp;
