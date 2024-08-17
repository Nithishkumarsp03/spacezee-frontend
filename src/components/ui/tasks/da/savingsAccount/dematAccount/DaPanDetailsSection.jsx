import styles from "./DaPanDetailsSection.module.css";
import image from "../assets/man-carrying-papers-graphics.svg";

const DaPanDetailsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.imageColumn}>
            <figure>
              <img src={image} alt="Man Carrying Papers" />
            </figure>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.stepInfo}>
              <span>Step 1 of 7</span>
            </div>
            <div className={styles.formContainer}>
              <div className={styles.formContent}>
                <h2>Let’s start with your PAN</h2>
                <label className={styles.subtitle}>
                  or track your existing application.
                </label>
                <form>
                  <div className={styles.inputGroup}>
                    <label>
                      PAN <em>*</em>
                    </label>
                    <input type="text" maxLength="10" placeholder="Enter PAN" />
                    <div className={styles.errorText}></div>
                  </div>
                  <div className={styles.inputGroup}>
                    <label>
                      Date of Birth <em>*</em>
                    </label>
                    <div className={styles.dobInputs}>
                      <input type="number" maxLength="2" placeholder="DD" />
                      <input type="number" maxLength="2" placeholder="MM" />
                      <input type="text" maxLength="4" placeholder="YYYY" />
                    </div>
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

export default DaPanDetailsSection;
