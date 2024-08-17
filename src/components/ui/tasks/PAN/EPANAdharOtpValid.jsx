import styles from "./EPANAdharOtpValid.module.css";
import tickIcon from "./assets/img/tick_ic.svg";

const EPANAdharOtpValid = () => {
  return (
    <li className={styles["style-0"]}>
      <div className={styles["style-1"]}>
        <div className={styles["style-2"]}>Email id</div>
        <div className={styles["style-3"]}>
          amarjit12345@nergymail.com
          <span className={styles["style-4"]}>
            <span className={styles["style-5"]}>
              <span className={styles["style-6"]}>
                <img src={tickIcon} alt="Validated" />
              </span>
            </span>
            <span className={styles["style-11"]}>Validated</span>
          </span>
        </div>
      </div>
    </li>
  );
};

export default EPANAdharOtpValid;
