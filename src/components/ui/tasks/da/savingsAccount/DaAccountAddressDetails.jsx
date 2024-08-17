import React from "react";
import styles from "./DaAccountAddressDetails.module.css";
import image from "./assets/step-three-graphics.svg";

const DaAccountAddressDetails = () => {
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
                <h2>Address details!</h2>
                <form>
                  <div className={styles.formGroup}>
                    <label>
                      Address Type <em>*</em>
                    </label>
                    <select aria-label="Select">
                      <option value="">Select</option>
                      <option value="Home">Home</option>
                      <option value="Office">Office</option>
                    </select>
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
                      name="city_Village"
                      type="text"
                      placeholder="Enter City/Village"
                      maxLength="35"
                      autoComplete="off"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      District <em>*</em>
                    </label>
                    <input
                      name="district"
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
                      name="state"
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
                      name="pin_Code"
                      type="text"
                      placeholder="Enter PIN Code"
                      maxLength="6"
                      autoComplete="off"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      Country Name <em>*</em>
                    </label>
                    <select aria-label="Select" disabled>
                      <option value="">Select</option>
                      <option value="India" selected>
                        India
                      </option>
                      {/* Add other countries as needed */}
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      Nearest Branch <em>*</em>
                    </label>
                    <input
                      name="branch"
                      type="text"
                      placeholder="Enter Branch Name"
                      maxLength="35"
                      autoComplete="off"
                    />
                    <div className={styles.errorText}>
                      <img
                        src="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e"
                        alt="Error"
                        height="16"
                        width="16"
                      />
                      Branch is required
                    </div>
                  </div>
                  <button type="submit">Continue</button>
                  <div className={styles.checkboxGroup}>
                    <input type="checkbox" checked />
                    <span>
                      My communication address is the same as my Aadhaar
                      address.
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaAccountAddressDetails;
