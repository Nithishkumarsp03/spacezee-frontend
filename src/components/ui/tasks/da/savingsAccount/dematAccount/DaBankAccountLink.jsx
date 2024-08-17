import React, { useState } from "react";
import styles from "./DaBankAccountLink.module.css";

const DaBankAccountLink = () => {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: true,
    checkbox2: true,
    checkbox3: true,
  });

  const allChecked = Object.values(checkboxes).every(Boolean);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.stepSection}>
        <span className={styles.step}>Step 3 of 7</span>
      </div>
      <div className={styles.scrollContainer}>
        <div className={styles.formWrapper}>
          <h2 className={styles.title}>Link Bank Account Using IFSC</h2>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Branch's IFSC</label>
              <div className={styles.inputWrapper}>
                <input
                  name="branch_Ifsc"
                  type="text"
                  maxLength="11"
                  className={styles.input}
                  placeholder="IFSC"
                  autoComplete="off"
                />
                <div className={styles.error}></div>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Branch MICR Code</label>
              <div className={styles.inputWrapper}>
                <input
                  name="branch_Micr"
                  type="text"
                  maxLength="9"
                  className={styles.input}
                  placeholder="MICR"
                  autoComplete="off"
                />
                <div className={styles.error}></div>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Bank Account Number</label>
              <div className={styles.inputWrapper}>
                <input
                  name="account_Number"
                  type="text"
                  maxLength="35"
                  className={styles.input}
                  placeholder="e.g. 4224 5553 2223 55"
                  autoComplete="off"
                />
                <div className={styles.error}></div>
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Confirm Bank Account Number
              </label>
              <div className={styles.inputWrapper}>
                <input
                  name="confirm_Account_Number"
                  type="text"
                  maxLength="35"
                  className={styles.input}
                  placeholder="e.g. 4224 5553 2223 55"
                  autoComplete="off"
                />
                <div className={styles.error}></div>
              </div>
            </div>
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={!allChecked}
            >
              Continue
            </button>
            <div className={styles.checkboxSection}>
              <div className={styles.checkboxWrapper}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  name="checkbox1"
                  checked={checkboxes.checkbox1}
                  onChange={handleCheckboxChange}
                />
                <label className={styles.checkboxLabel}>
                  My sole country of tax residency is India. I/We have
                  understood the information requirements of this form (read
                  along with the FATCA & CRS Instructions) and hereby confirm
                  that the information provided by me/us on this form is true,
                  correct, and complete. I/We also confirm that I/We have read
                  and understood the FATCA & CRS Terms and Conditions below and
                  hereby accept the same.
                </label>
              </div>
              <div className={styles.checkboxWrapper}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  name="checkbox2"
                  checked={checkboxes.checkbox2}
                  onChange={handleCheckboxChange}
                />
                <label className={styles.checkboxLabel}>
                  I authorise Nergy Limited to operate the movement of
                  securities from my demat account for any obligation created at
                  the exchange through my order(s)/trade(s) as per the Terms &
                  Conditions of the Online Delivery Instruction.
                </label>
              </div>
              <div className={styles.checkboxWrapper}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  name="checkbox3"
                  checked={checkboxes.checkbox3}
                  onChange={handleCheckboxChange}
                />
                <label className={styles.checkboxLabel}>
                  I confirm and understand that my name as per the IT Department
                  will be taken as my default Nergy account name, in case there
                  is any mismatch of my name as per the IT department and my
                  name as per the KRA database/Aadhaar/Bank account. I further
                  confirm that the linked bank accounts, Aadhaar, and PAN belong
                  to me.
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DaBankAccountLink;
