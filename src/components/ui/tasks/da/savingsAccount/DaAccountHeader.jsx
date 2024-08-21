import styles from "./DaAccountHeader.module.css";
import { useSelector } from "react-redux";
import { selectTask } from "../../../../../redux/features/user/userTaskSlice";
import logo from "./assets/logo.png";

const DaAccountHeader = () => {
  const task = useSelector(selectTask);
  console.log(task);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.brand}>
            <a href="#">
              <img src={logo} alt="logo" style={{ height: "60px" }} />
            </a>
            <div className={styles.accountType}>
              <span>{task?.name}</span>
            </div>
          </div>
          <div className={styles.question}>
            Question No: <span>{task?.taskName}</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DaAccountHeader;
