import styles from "./DaConfirmEmailOtpSection.module.css";
import image from "../assets/man-with-paper-plane-graphics.svg";

const DaConfirmEmailOtpSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.imageColumn}>
            <figure>
              <img src={image} alt="Man with Paper Plane" />
            </figure>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.formContainer}>
              <div className={styles.formContent}>
                <h2>Confirm Email OTP</h2>
                <div className={styles.sentTo}>
                  <label>Sent to nitin88@nergymail.com</label>
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
                <button type="submit">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaConfirmEmailOtpSection;
