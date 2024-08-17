import styles from "./DaAccountOtpSection.module.css";
import image from "./assets/step-two-graphics.svg";

const DaAccountOtpSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.imageColumn}>
            <figure>
              <img src={image} alt="Step Two Graphics" />
            </figure>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.formContainer}>
              <div className={styles.formContent}>
                <h2>Confirm OTP</h2>
                <div className={styles.sentTo}>
                  <label>Sent to +91 xxxxxxxxxx</label>
                </div>
                <div className={styles.otpInputs}>
                  <input type="text" maxLength="1" />
                  <input type="text" maxLength="1" />
                  <input type="text" maxLength="1" />
                  <input type="text" maxLength="1" />
                </div>
                <div className={styles.otpInfo}>
                  <label>
                    Your OTP is <strong>1234</strong>
                  </label>
                </div>
                <button type="submit" className={styles.submitButton}>
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaAccountOtpSection;
