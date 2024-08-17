import React from "react";
import styles from "./styles/DAPrivileges.module.css";
import rewardIcon from "./assets/icons-reward.svg";
import lifeCycleIcon from "./assets/icons-life-cycle.svg";
import moneyIcon from "./assets/icons-money.svg";
import accessIcon from "./assets/icons-access.svg";
import lockIcon from "./assets/icons-lock.svg";
import bonusIcon from "./assets/icons-bonus.svg";

const DAPrivileges = () => {
  return (
    <section className={styles.privileges}>
      <div className="container">
        <h2 className={`text-center ${styles.heading}`}>Features</h2>
        <div className={`row ${styles.gridRow} justify-content-center`}>
          <div className={`col-md-6 col-lg-4 ${styles.privilegeItem}`}>
            <figure className={styles.figure}>
              <img
                src={rewardIcon}
                alt="Unlimited Rewards"
                className={styles.icon}
              />
            </figure>
            <div className={styles.text}>
              <h3>Unlimited Rewards</h3>
              <p>
                Get 1 reward point on every ₹100 spent using your debit card.
              </p>
            </div>
          </div>
          <div className={`col-md-6 col-lg-4 ${styles.privilegeItem}`}>
            <figure className={styles.figure}>
              <img
                src={lifeCycleIcon}
                alt="Online Securities Platform"
                className={styles.icon}
              />
            </figure>
            <div className={styles.text}>
              <h3>Online Securities Platform</h3>
              <p>
                A platform to manage portfolios, track market values, and
                execute trades.
              </p>
            </div>
          </div>
          <div className={`col-md-6 col-lg-4 ${styles.privilegeItem}`}>
            <figure className={styles.figure}>
              <img
                src={moneyIcon}
                alt="Access To Money Anytime"
                className={styles.icon}
              />
            </figure>
            <div className={styles.text}>
              <h3>Access To Money Anytime</h3>
              <p>
                24/7 access to funds and banking services, even on holidays.
              </p>
            </div>
          </div>
          <div className={`col-md-6 col-lg-4 ${styles.privilegeItem}`}>
            <figure className={styles.figure}>
              <img
                src={accessIcon}
                alt="Easy Access To Your Securities"
                className={styles.icon}
              />
            </figure>
            <div className={styles.text}>
              <h3>Easy Access To Your Securities</h3>
              <p>Access and trade securities seamlessly.</p>
            </div>
          </div>
          <div className={`col-md-6 col-lg-4 ${styles.privilegeItem}`}>
            <figure className={styles.figure}>
              <img
                src={lockIcon}
                alt="Convenient Locker Sizes"
                className={styles.icon}
              />
            </figure>
            <div className={styles.text}>
              <h3>Convenient Locker Sizes</h3>
              <p>A range of locker sizes based on your storage needs.</p>
            </div>
          </div>
          <div className={`col-md-6 col-lg-4 ${styles.privilegeItem}`}>
            <figure className={styles.figure}>
              <img
                src={bonusIcon}
                alt="Real-Time Information"
                className={styles.icon}
              />
            </figure>
            <div className={styles.text}>
              <h3>Real-Time Information</h3>
              <p>Access to real-time market data to make informed decisions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DAPrivileges;
