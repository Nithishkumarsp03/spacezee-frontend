import React from "react";
import styles from "./DAProfessionalDetails.module.css";
import image from "./assets/step-six-graphics.svg";

const DAProfessionalDetails = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.imageColumn}>
            <figure>
              <img src={image} alt="Step Six Graphics" />
            </figure>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.formContainer}>
              <div className={styles.formContent}>
                <h2>Professional Details!</h2>
                <form>
                  <div className={styles.formGroup}>
                    <label>
                      Occupation <em>*</em>
                    </label>
                    <select aria-label="Select">
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
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      Occupation Type <em>*</em>
                    </label>
                    <select aria-label="Select">
                      <option value="">Select</option>
                      <option value="Healthcare and Medical Occupations">
                        Healthcare and Medical Occupations
                      </option>
                      <option value="Information Technology (IT)">
                        Information Technology (IT)
                      </option>
                      <option value="Business">Business</option>
                      <option value="Finance">Finance</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Education">Education</option>
                      <option value="Skilled Trades">Skilled Trades</option>
                      <option value="Management and Administration">
                        Management and Administration
                      </option>
                      <option value="Human Resources">Human Resources</option>
                      <option value="Social Services">Social Services</option>
                      <option value="Manufacturing and Production">
                        Manufacturing and Production
                      </option>
                      <option value="Sole Proprietorship">
                        Sole Proprietorship
                      </option>
                      <option value="Agriculture and Farming">
                        Agriculture and Farming
                      </option>
                      <option value="Media and Communications">
                        Media and Communications
                      </option>
                      <option value="Arts and Entertainment">
                        Arts and Entertainment
                      </option>
                      <option value="Public Services/Government Jobs">
                        Public Services/Government Jobs
                      </option>
                      <option value="Contract/Freelance/Gig Work">
                        Contract/Freelance/Gig Work
                      </option>
                      <option value="Daily Wage">Daily Wage</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      Source of Income <em>*</em>
                    </label>
                    <select aria-label="Select">
                      <option value="">Select</option>
                      <option value="Business">Business</option>
                      <option value="Salary">Salary</option>
                      <option value="Savings">Savings</option>
                      <option value="Family Wealth">Family Wealth</option>
                      <option value="Professional Fees">
                        Professional Fees
                      </option>
                      <option value="Investment">Investment</option>
                      <option value="Wages">Wages</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      Gross Annual Income <em>*</em>
                    </label>
                    <input
                      name="gross_Annual_Income_AccountHolder"
                      type="text"
                      placeholder="Enter Annual Income"
                      maxLength="15"
                      autoComplete="off"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Company/Organisation Name</label>
                    <input
                      name="company_Organisation_AccountHolder"
                      type="text"
                      placeholder="Enter Company/Organisation"
                      maxLength="35"
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

export default DAProfessionalDetails;
