import React, { useState } from "react";
import styles from "./DaNomineeDetails.module.css";

const DaNomineeDetails = () => {
  const [nomineeName, setNomineeName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [dob, setDob] = useState({ day: "", month: "", year: "" });
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.step}>Step 7 of 7</span>
        <div className={styles.scrollContainer}>
          <div className={styles.formWrapper}>
            <h2 className={styles.title}>Add Nominee Details</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Nominee Name<em className={styles.required}>*</em>
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    name="nominee_Name"
                    type="text"
                    maxLength="30"
                    placeholder="Enter Name"
                    autoComplete="off"
                    value={nomineeName}
                    onChange={(e) => setNomineeName(e.target.value)}
                    className={styles.input}
                  />
                  <div className={styles.error}></div>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Relationship with the Applicant
                  <em className={styles.required}>*</em>
                </label>
                <div className={styles.inputWrapper}>
                  <select
                    aria-label="Select"
                    value={relationship}
                    onChange={(e) => setRelationship(e.target.value)}
                    className={styles.select}
                  >
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
                  <div className={styles.error}></div>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Date of Birth <em className={styles.required}>*</em>
                </label>
                <div className={styles.dobGroup}>
                  <div className={styles.dobWrapper}>
                    <input
                      name="date"
                      type="number"
                      maxLength="2"
                      placeholder="DD"
                      autoComplete="off"
                      value={dob.day}
                      onChange={(e) => setDob({ ...dob, day: e.target.value })}
                      className={styles.dobInput}
                    />
                    <div className={styles.error}></div>
                  </div>
                  <div className={styles.dobWrapper}>
                    <input
                      name="month"
                      type="number"
                      maxLength="2"
                      placeholder="MM"
                      autoComplete="off"
                      value={dob.month}
                      onChange={(e) =>
                        setDob({ ...dob, month: e.target.value })
                      }
                      className={styles.dobInput}
                    />
                    <div className={styles.error}></div>
                  </div>
                  <div className={styles.dobWrapper}>
                    <input
                      name="year"
                      type="text"
                      maxLength="4"
                      placeholder="YYYY"
                      autoComplete="off"
                      value={dob.year}
                      onChange={(e) => setDob({ ...dob, year: e.target.value })}
                      className={styles.dobInput}
                    />
                    <div className={styles.error}></div>
                  </div>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Address <em className={styles.required}>*</em>
                </label>
                <textarea
                  name="address"
                  placeholder="Enter Address"
                  rows="3"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className={styles.textarea}
                ></textarea>
                <div className={styles.error}></div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  City/Village <em className={styles.required}>*</em>
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    name="nominee_City_Village"
                    type="text"
                    maxLength="35"
                    placeholder="Enter City/Village Name"
                    autoComplete="off"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className={styles.input}
                  />
                  <div className={styles.error}></div>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  District <em className={styles.required}>*</em>
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    name="nominee_District"
                    type="text"
                    maxLength="35"
                    placeholder="Enter District Name"
                    autoComplete="off"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className={styles.input}
                  />
                  <div className={styles.error}></div>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  State <em className={styles.required}>*</em>
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    name="nominee_State"
                    type="text"
                    maxLength="35"
                    placeholder="Enter State Name"
                    autoComplete="off"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className={styles.input}
                  />
                  <div className={styles.error}></div>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  PIN Code <em className={styles.required}>*</em>
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    name="nominee_Pincode"
                    type="text"
                    maxLength="6"
                    placeholder="Enter PIN Code"
                    autoComplete="off"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className={styles.input}
                  />
                  <div className={styles.error}></div>
                </div>
              </div>
              <button type="submit" className={styles.submitBtn}>
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaNomineeDetails;
