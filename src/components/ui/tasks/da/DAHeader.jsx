import React from "react";
import styles from "./styles/DAHeader.module.css";
import logo from "./assets/nergy_vidya_logo.svg";
import helpIcon from "./assets/help-icon.svg";
import callSupportIcon from "./assets/call-support.svg";

const DAHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <button
                className={styles.dropdownToggle}
                data-bs-toggle="dropdown"
              >
                Personal Banking
              </button>
              <ul className={`${styles.dropdownMenu} ${styles.largeDropdown}`}>
                <li>
                  <a
                    className={`${styles.dropdownItem} ${styles.customDisabled}`}
                    href="#"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Action
                  </a>
                </li>
                <li className={styles.dropdownDivider}></li>
                <li>
                  <a
                    className={`${styles.dropdownItem} ${styles.customDisabled}`}
                    href="#"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Another action
                  </a>
                </li>
                <li className={styles.dropdownDivider}></li>
                <li>
                  <a
                    className={`${styles.dropdownItem} ${styles.customDisabled}`}
                    href="#"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-8 text-end">
              <div className="d-flex justify-content-end">
                <a href="/about" className={`${styles.link} me-2`}>
                  About
                </a>
                <a href="/help" className={`${styles.link} me-2`}>
                  <img src={helpIcon} alt="Help" className="me-1" />
                  Help
                </a>
                <a href="tel:01252300" className={`${styles.link} me-2`}>
                  <img src={callSupportIcon} alt="Support" className="me-1" />
                  01252300
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Nergy Vidya" height="40" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className={`nav-item dropdown ${styles.navItemDropdown}`}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Account
                </a>
                <ul
                  className={`${styles.dropdownMenu} ${styles.largeDropdown}`}
                >
                  <li>
                    <a
                      className={`${styles.dropdownItem} ${styles.customDisabled}`}
                      href="#"
                      tabIndex="-1"
                      aria-disabled="true"
                    >
                      Savings Account
                    </a>
                  </li>
                  <li className={styles.dropdownDivider}></li>
                  <li>
                    <a
                      className={`${styles.dropdownItem} ${styles.customDisabled}`}
                      href="#"
                      tabIndex="-1"
                      aria-disabled="true"
                    >
                      Demat Account
                    </a>
                  </li>
                  <li className={styles.dropdownDivider}></li>
                  <li>
                    <a
                      className={`${styles.dropdownItem} ${styles.customDisabled}`}
                      href="#"
                      tabIndex="-1"
                      aria-disabled="true"
                    >
                      NRI Savings Account
                    </a>
                  </li>
                  <li className={styles.dropdownDivider}></li>
                  <li>
                    <a
                      className={`${styles.dropdownItem} ${styles.customDisabled}`}
                      href="#"
                      tabIndex="-1"
                      aria-disabled="true"
                    >
                      Current Account
                    </a>
                  </li>
                  <li className={styles.dropdownDivider}></li>
                  <li>
                    <a
                      className={`${styles.dropdownItem} ${styles.customDisabled}`}
                      href="#"
                      tabIndex="-1"
                      aria-disabled="true"
                    >
                      Corporate Salary Account
                    </a>
                  </li>
                  <li className={styles.dropdownDivider}></li>
                  <li>
                    <a
                      className={`${styles.dropdownItem} ${styles.customDisabled}`}
                      href="#"
                      tabIndex="-1"
                      aria-disabled="true"
                    >
                      Senior Citizens Savings Account
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${styles.customDisabled}`}
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Deposits
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${styles.customDisabled}`}
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Loans
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${styles.customDisabled}`}
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Payments
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${styles.customDisabled}`}
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Insurance
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${styles.customDisabled}`}
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  <img src="./assets/search-icon.svg" alt="Search" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`btn ${styles.btnPrimary} ${styles.customDisabled}`}
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Log in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DAHeader;
