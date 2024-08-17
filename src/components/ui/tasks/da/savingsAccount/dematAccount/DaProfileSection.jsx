import React from "react";
import { Outlet } from "react-router-dom";
import {
  FaUser,
  FaCalendarAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaIdCard,
} from "react-icons/fa";

import styles from "./DaProfileSection.module.css";

const ProfileSection = () => {
  return (
    <div className="container">
      <div className="row vh-100">
        {/* Left Column */}
        <div
          className="col-lg-4 col-md-5 col-sm-12 mb-4 d-flex flex-column justify-content-center align-items-center"
          style={{ minWidth: "300px" }}
        >
          <div className={styles.profileContent}>
            <ul className={styles.profileList}>
              <li className={styles.profileItem}>
                <div className={styles.profileInfo}>
                  <FaUser className={styles.icon} />
                  <span className={styles.userName}>Nitin Radhakrishnan</span>
                </div>
                <hr className={styles.hrLine} />
              </li>
              <li className={styles.profileItem}>
                <div className={styles.profileInfo}>
                  <FaCalendarAlt className={styles.icon} />
                  <span>11-04-1987</span>
                </div>
                <hr className={styles.hrLine} />
              </li>
              <li className={styles.profileItem}>
                <div className={styles.profileInfo}>
                  <FaEnvelope className={styles.icon} />
                  <span>nitin88@nergymail.com</span>
                </div>
                <hr className={styles.hrLine} />
              </li>
              <li className={styles.profileItem}>
                <div className={styles.profileInfo}>
                  <FaMapMarkerAlt className={styles.icon} />
                  <span className={styles.address}>
                    Bhagwan Das Road, Mahatma Jyoti Rao Phule Marg Area
                  </span>
                </div>
                <hr className={styles.hrLine} />
              </li>
              <li className={styles.profileItem}>
                <div className={styles.profileInfo}>
                  <FaIdCard className={styles.icon} />
                  <div>
                    <span className={styles.panLabel}>Your PAN</span>
                    <div className={styles.panNumber}>SDSXD1290I</div>
                    <small className={styles.note}>
                      *This PAN should belong to you, the applicant. If it does
                      not,{" "}
                      <a href="#" className={styles.startOver}>
                        Start over
                      </a>
                    </small>
                  </div>
                </div>
                <hr className={styles.hrLine} />
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column (Outlet) */}
        <div className="col-lg-8 col-md-7 col-sm-12 d-flex justify-content-center align-items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
