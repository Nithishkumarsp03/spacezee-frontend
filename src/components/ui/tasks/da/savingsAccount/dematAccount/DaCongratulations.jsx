import styles from "./DaCongratulations.module.css";
import { FaCheckCircle } from "react-icons/fa";

const DaCongratulations = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.content}>
          <h2 className={styles.title}>Congratulations!</h2>
          <div className={styles.messageContainer}>
            <div className={styles.message}>
              <FaCheckCircle className={styles.icon} />
              <span>
                Your application for opening a demat trading account was
                successfully submitted. After the verification of the
                application, your trading account details and login credentials
                will be sent to your registered Email address.
              </span>
            </div>
            <button
              type="submit"
              className={styles.button}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaCongratulations;
