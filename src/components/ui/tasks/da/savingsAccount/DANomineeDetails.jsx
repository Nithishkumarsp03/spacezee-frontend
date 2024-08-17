import React from "react";
import styles from "./DANomineeDetails.module.css";
import image from "./assets/step-five-graphics.svg";

const DANomineeDetails = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.imageColumn}>
            <figure>
              <img src={image} alt="Step Five Graphics" />
            </figure>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.formContainer}>
              <div className={styles.formContent}>
                <h2>Add Nominee Details</h2>
                <form>
                  <div className={styles.formGroup}>
                    <label>
                      Nominee's Name <em>*</em>
                    </label>
                    <input
                      name="nominee_Name"
                      type="text"
                      placeholder="Enter Name"
                      maxLength="20"
                      autoComplete="off"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      Relationship with the applicant <em>*</em>
                    </label>
                    <select aria-label="Select">
                      <option value="">Select</option>
                      <option value="Father">Father</option>
                      <option value="Mother">Mother</option>
                      <option value="Daughter">Daughter</option>
                      <option value="Son">Son</option>
                      <option value="Husband">Husband</option>
                      <option value="Wife">Wife</option>
                      <option value="Brother">Brother</option>
                      <option value="Sister">Sister</option>
                      <option value="Other">Other</option>
                    </select>
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
                      Address <em>*</em>
                    </label>
                    <textarea
                      name="address"
                      placeholder="Enter Address"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      City/Village <em>*</em>
                    </label>
                    <input
                      name="nominee_City_Village"
                      type="text"
                      placeholder="Enter City/Village Name"
                      maxLength="35"
                      autoComplete="off"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      District <em>*</em>
                    </label>
                    <input
                      name="nominee_District"
                      type="text"
                      placeholder="Enter District Name"
                      maxLength="35"
                      autoComplete="off"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      State <em>*</em>
                    </label>
                    <input
                      name="nominee_State"
                      type="text"
                      placeholder="Enter State Name"
                      maxLength="35"
                      autoComplete="off"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      PIN Code <em>*</em>
                    </label>
                    <input
                      name="nominee_Pincode"
                      type="text"
                      placeholder="Enter PIN Code"
                      maxLength="6"
                      autoComplete="off"
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

export default DANomineeDetails;
