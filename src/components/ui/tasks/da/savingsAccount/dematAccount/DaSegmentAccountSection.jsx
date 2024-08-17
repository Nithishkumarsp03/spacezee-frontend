import React from "react";
import styles from "./DaSegmentAccountSection.module.css";
import image from "../assets/segment-account-graphics.svg";

const DaSegmentAccountSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.imageColumn}>
            <figure>
              <img src={image} alt="Segment Account Graphics" />
            </figure>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.stepInfo}>
              <span>Step 2 of 7</span>
            </div>
            <div className={styles.formContainer}>
              <div className={styles.formContent}>
                <h2>Segment Account Opening</h2>
                <label className={styles.subtitle}>
                  Buy and sell shares, mutual funds, and derivatives on the NSE
                  and BSE.
                </label>
                <form>
                  <div className={styles.checkboxGroup}>
                    <div className={styles.checkbox}>
                      <input type="checkbox" />
                      <label>Equity</label>
                    </div>
                    <div className={styles.checkbox}>
                      <input type="checkbox" />
                      <label>Debt</label>
                    </div>
                    <div className={styles.checkbox}>
                      <input type="checkbox" />
                      <label>F&amp;O</label>
                    </div>
                    <div className={styles.checkbox}>
                      <input type="checkbox" />
                      <label>Currency</label>
                    </div>
                    <div className={styles.checkbox}>
                      <input type="checkbox" />
                      <label>Commodity</label>
                    </div>
                  </div>
                  <button type="button">Continue</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaSegmentAccountSection;
