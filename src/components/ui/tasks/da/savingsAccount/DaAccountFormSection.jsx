import styles from "./DaAccountFormSection.module.css";
import image from "./assets/step-one-graphics.svg";

const DaAccountFormSection = () => {
  return (
    <section className={`${styles.section} h-100`}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.imageColumn}>
            <figure>
              <img src={image} alt="Step One Graphics" />
            </figure>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.formContainer}>
              <div className={styles.formContent}>
                <h2>Take the first step!</h2>
                <form>
                  <div className={styles.formGroup}>
                    <label>
                      Mobile Number <em>*</em>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Phone Number"
                      maxLength="10"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      Email <em>*</em>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      maxLength="35"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      PAN <em>*</em>
                    </label>
                    <input type="text" placeholder="Enter PAN" maxLength="10" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      Enter Aadhaar Number <em>*</em>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter 12 digit Aadhaar number"
                      maxLength="12"
                    />
                  </div>
                  <button type="submit">Get OTP to verify Aadhaar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaAccountFormSection;
