import styles from "./UserEMIHeader.module.css";
import logo from "../../../../assets/images/logo.png";
import { useSelector } from "react-redux";
import { selectTask } from "../../../../redux/features/user/userTaskSlice";

function UserEMIHeader() {
  const task = useSelector(selectTask);
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headWrap}>
          <div className={styles.headerContent}>
            <img src={logo} alt="Nergy Vidya" className={styles.logo} />
          </div>
          <div className={styles.qstnCount}>Question No: {task?.taskName}</div>
        </div>
      </div>
    </header>
  );
}

export default UserEMIHeader;
