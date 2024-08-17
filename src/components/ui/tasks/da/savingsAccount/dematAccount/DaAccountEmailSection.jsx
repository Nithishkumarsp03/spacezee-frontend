import styles from "./DaAccountEmailSection.module.css";
import image from "../assets/step-two-graphics.svg";

const DaAccountEmailSection = () => {
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
                <h2>What’s your email?</h2>
                <form>
                  <div className={styles.formGroup}>
                    <label>Email</label>
                    <input
                      name="signup_Email"
                      type="text"
                      maxLength="35"
                      placeholder="Enter Email"
                      autoComplete="off"
                    />
                    <div className={styles.errorText}></div>
                  </div>
                  <div className={styles.infoText}>
                    <label>
                      <span>You will receive an OTP on your email.</span>
                    </label>
                  </div>
                  <button type="submit">Continue</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaAccountEmailSection;
