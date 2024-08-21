import { useState } from "react";
import styles from "./DATermsAndConditions.module.css";
import image from "./assets/step-seven-graphics.svg";
import { useCompleteTaskWithBroadcast } from "../../../../../hooks/useCompleteTaskWithBroadcast";

const DATermsAndConditions = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const completeTask = useCompleteTaskWithBroadcast();

  const handleCheckboxChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleComplete = async () => {
    completeTask();
  };
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.imageColumn}>
            <figure>
              <img src={image} alt="Step Seven Graphics" />
            </figure>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.formContainer}>
              <div className={styles.formContent}>
                <h6>Let us know when you would like to fund your account.</h6>
                <div className={styles.radioGroup}>
                  <div className={styles.radioOption}>
                    <input
                      type="radio"
                      name="fundAccount"
                      id="fundLater"
                      defaultChecked
                    />
                    <label htmlFor="fundLater">I want to fund it later.</label>
                  </div>
                  <div className={styles.radioOption}>
                    <input
                      type="radio"
                      name="fundAccount"
                      id="fundNow"
                      disabled
                    />
                    <label htmlFor="fundNow">I want to fund it now.</label>
                  </div>
                </div>
                <div className={styles.termsSection}>
                  <div className={styles.checkboxGroup}>
                    <input
                      type="checkbox"
                      id="termsCheckbox"
                      checked={termsAccepted}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="termsCheckbox">
                      I accept all the terms and conditions related to the bank
                      and authorise the bank to receive my CIBIL score and
                      report.
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!termsAccepted}
                  onClick={handleComplete}
                >
                  Open account now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DATermsAndConditions;
