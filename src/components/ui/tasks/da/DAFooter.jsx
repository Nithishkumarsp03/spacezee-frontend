import React from "react";
import styles from "./styles/DAFooter.module.css";
import facebookIcon from "./assets/facebook-icon.svg";
import twitterIcon from "./assets/twitter-icon.svg";
import instagramIcon from "./assets/instagram-icon.svg";

const DAFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className={styles.socialIcons}>
              <a href="#">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#">
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a href="#">
                <img src={instagramIcon} alt="Instagram" />
              </a>
            </div>
          </div>
          <div className="col-sm-3 d-none d-sm-block">
            <h5>About</h5>
            <div className={styles.footerLinks}>
              <a href="#">Leadership</a>
              <a href="#">Safe Banking</a>
              <a href="#">Careers</a>
              <a href="#">Insurance</a>
            </div>
          </div>
          <div className="col-sm-3 d-none d-sm-block">
            <h5>Popular Products</h5>
            <div className={styles.footerLinks}>
              <a href="#">Car loan</a>
              <a href="#">Home loan</a>
              <a href="#">Saving accounts</a>
              <a href="#">Credit cards</a>
            </div>
          </div>
          <div className="col-sm-2 d-none d-sm-block">
            <h5>Socials</h5>
            <div className={styles.footerLinks}>
              <a href="#">Discord</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
              <a href="#">Facebook</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className="row">
            <div className="col-sm-6 text-center text-sm-start pb-3 pb-sm-0">
              ©2024. All rights reserved
            </div>
            <div className="col-sm-6">
              <div className="d-flex justify-content-center justify-content-sm-end gap-3">
                <a href="#">Privacy &amp; Policy</a>
                <a href="#">Terms &amp; Condition</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DAFooter;
