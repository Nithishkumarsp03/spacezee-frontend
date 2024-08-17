import React from "react";
import styles from "./DaDematAccount.module.css";
import image from "../assets/step-one-graphics.svg";

const DaDematAccount = () => {
  return (
    <section className={styles.section}>
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
                <h2>Signup now</h2>
                <form>
                  <div className={styles.formGroup}>
                    <label>
                      Mobile Number <em>*</em>
                    </label>
                    <input
                      name="signup_Mob"
                      type="text"
                      maxLength="10"
                      placeholder="Enter Phone Number"
                      autoComplete="off"
                      className={styles.inputError}
                    />
                    <div className={styles.errorText}>
                      <img
                        src="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e"
                        alt="Error"
                        height="16"
                        width="16"
                      />
                      Enter a valid mobile number
                    </div>
                  </div>
                  <label className={styles.infoText}>
                    <span>You will receive an OTP on your number.</span>
                  </label>
                  <button type="submit" className={styles.submitButton}>
                    Continue
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaDematAccount;
