import React from "react";
import styles from "./DaProfileDetails.module.css";

const DaProfileDetails = () => {
  return (
    <div className={styles.container}>
      <span className={styles.step}>Step 3 of 7</span>
      <div className={styles.scrollContainer}>
        <div className={styles.formWrapper}>
          <h2 className={styles.title}>Your Profile</h2>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Father's Name</label>
              <div className={styles.inputWrapper}>
                <input
                  name="father_Name_AccountHolder"
                  type="text"
                  maxLength="20"
                  className={styles.input}
                  placeholder="Enter Name"
                  autoComplete="off"
                />
                <div className={styles.error}></div>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Mother's Name</label>
              <div className={styles.inputWrapper}>
                <input
                  name="mothers_Name_AccountHolder"
                  type="text"
                  maxLength="20"
                  className={styles.input}
                  placeholder="Enter Name"
                  autoComplete="off"
                />
                <div className={styles.error}></div>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Marital Status</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input
                    className={styles.radioInput}
                    type="radio"
                    name="maritalStatus"
                    value="Single"
                  />
                  Single
                </label>
                <label className={styles.radioLabel}>
                  <input
                    className={styles.radioInput}
                    type="radio"
                    name="maritalStatus"
                    value="Married"
                  />
                  Married
                </label>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Annual Income</label>
              <div className={styles.inputWrapper}>
                <select className={styles.select} aria-label="Select">
                  <option value="">Select</option>
                  <option value="0 to ₹1,00,000">0 to ₹1,00,000</option>
                  <option value="More than ₹1,00,000 up to ₹5,00,000">
                    More than ₹1,00,000 up to ₹5,00,000
                  </option>
                  <option value="₹5,00,000 and above">
                    ₹5,00,000 and above
                  </option>
                </select>
                <div className={styles.error}></div>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Trading Experience</label>
              <div className={styles.inputWrapper}>
                <select className={styles.select} aria-label="Select">
                  <option value="">Select</option>
                  <option value="0 to 1 year">0 to 1 year</option>
                  <option value="More than 1 year up to 5 years">
                    More than 1 year up to 5 years
                  </option>
                  <option value="More than 5 years">More than 5 years</option>
                </select>
                <div className={styles.error}></div>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Funds and Securities Preference
              </label>
              <div className={styles.inputWrapper}>
                <select className={styles.select} aria-label="Select">
                  <option value="">Select</option>
                  <option value="Once every calendar quarter">
                    Once every calendar quarter
                  </option>
                  <option value="Once every calendar month">
                    Once every calendar month
                  </option>
                </select>
                <div className={styles.error}></div>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Occupation</label>
              <div className={styles.inputWrapper}>
                <select className={styles.select} aria-label="Select">
                  <option value="">Select</option>
                  <option value="Salaried">Salaried</option>
                  <option value="Student">Student</option>
                  <option value="Retired">Retired</option>
                  <option value="Sole Proprietorship">
                    Sole Proprietorship
                  </option>
                  <option value="Partnership/Company">
                    Partnership/Company
                  </option>
                  <option value="Self Employed Professional">
                    Self Employed Professional
                  </option>
                  <option value="Home Maker">Home Maker</option>
                </select>
                <div className={styles.error}></div>
              </div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.switchGroup}>
                <label className={styles.switchLabel}>
                  Are you a politically exposed person?
                </label>
                <label className={styles.switch}>
                  <input type="checkbox" className={styles.switchInput} />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>
            <button type="submit" className={styles.submitBtn}>
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DaProfileDetails;
