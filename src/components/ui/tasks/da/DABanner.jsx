import React from "react";
import bannerGraphics from "./assets/banner-graphics.png";
import styles from "./styles/DABanner.module.css";

const DABanner = () => {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 d-flex flex-column justify-content-center">
            <h1 className={styles.bannerTitle}>
              Follow your financial dreams with confidence.
            </h1>
            <p className={styles.bannerDescription}>
              Enjoy financial freedom by managing your account effectively,
              executing financial transactions, and getting the essentials you
              need with no monthly maintenance fee.
            </p>
          </div>
          <div className="col-lg-5">
            <img
              src={bannerGraphics}
              alt="Banner Graphics"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DABanner;
