import styles from "./DaAccountHeader.module.css";
import { useSelector } from "react-redux";
import { selectTask } from "../../../../../redux/features/user/userTaskSlice";

const DaAccountHeader = () => {
  const task = useSelector(selectTask);
  console.log(task);
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
