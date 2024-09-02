import styles from "./PBDTHeader.module.css";
import logo from "../../../../assets/images/logo.png";
import { useSelector } from "react-redux";
import { selectTask } from "../../../../redux/features/user/userTaskSlice";

const PBDTHeader = () => {
  const task = useSelector(selectTask);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <a href="/" className={styles.logoLink}>
            <img src={logo} alt="SL TL" className={styles.logo} />
          </a>
          <div className={styles.budgetLabel}>{task?.name}</div>
        </div>
        <div className={styles.questionSection}>
          <span>
            Question No : <strong>{task?.taskName}</strong>
          </span>
        </div>
      </div>
    </header>
  );
};

export default PBDTHeader;
