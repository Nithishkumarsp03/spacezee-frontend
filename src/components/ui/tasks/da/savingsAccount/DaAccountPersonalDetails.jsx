import React from "react";
import styles from "./DaAccountPersonalDetails.module.css";
import image from "./assets/step-three-graphics.svg";

const DaAccountPersonalDetails = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.imageColumn}>
            <figure>
              <img src={image} alt="Step Three Graphics" />
            </figure>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.formContainer}>
              <div className={styles.formContent}>
                <h2>Tell us about you!</h2>
                <form>
                  <div className={styles.formGroup}>
                    <label>
                      Name <em>*</em>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      maxLength="20"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      Date of Birth <em>*</em>
                    </label>
                    <div className={styles.dateRow}>
                      <input type="number" placeholder="DD" maxLength="2" />
                      <input type="number" placeholder="MM" maxLength="2" />
                      <input type="text" placeholder="YYYY" maxLength="4" />
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      Gender <em>*</em>
                    </label>
                    <select aria-label="Select">
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Student</label>
                    <div className={styles.radioGroup}>
                      <label>
                        <input type="radio" name="student" />
                        Yes
                      </label>
                      <label>
                        <input type="radio" name="student" />
                        No
                      </label>
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Marital Status</label>
                    <select aria-label="Select">
                      <option value="">Select</option>
                      <option value="Unmarried">Unmarried</option>
                      <option value="Married">Married</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Name of Spouse</label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      maxLength="35"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Father’s Name</label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      maxLength="35"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Mother’s Name</label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      maxLength="35"
                    />
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

export default DaAccountPersonalDetails;
