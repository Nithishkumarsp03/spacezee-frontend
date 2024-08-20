import styles from "./styles/DAHeader.module.css";
import logo from "./assets/logo.png";
import helpIcon from "./assets/help-icon.svg";
import callSupportIcon from "./assets/call-support.svg";
import { useSelector } from "react-redux";
import { selectTask } from "../../../../redux/features/user/userTaskSlice";
import { useLocation, useNavigate } from "react-router-dom";

const DAHeader = () => {
  const task = useSelector(selectTask);
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const handleNavigation = (accountType) => {
    if (accountType === "Savings Account") {
      navigate(`/task/savings/savings-account/?${queryParams}`);
    } else if (accountType === "Demat Account") {
      navigate("/demat-account");
    }
  };

  const isSavingsAccount = task?.name === "Savings Account";
  const isDematAccount = task?.name === "Demat Account";

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
                    className={`${styles.dropdownItem} ${
                      !isSavingsAccount ? styles.customDisabled : ""
                    }`}
                    href="#"
                    tabIndex={isSavingsAccount ? "0" : "-1"}
                    aria-disabled={!isSavingsAccount}
                    onClick={() =>
                      isSavingsAccount && handleNavigation("Savings Account")
                    }
                    style={{
                      cursor: isSavingsAccount ? "pointer" : "not-allowed",
                    }}
                  >
                    Savings Account
                  </a>
                </li>
                <li className={styles.dropdownDivider}></li>
                <li>
                  <a
                    className={`${styles.dropdownItem} ${
                      !isDematAccount ? styles.customDisabled : ""
                    }`}
                    href="#"
                    tabIndex={isDematAccount ? "0" : "-1"}
                    aria-disabled={!isDematAccount}
                    onClick={() =>
                      isDematAccount && handleNavigation("Demat Account")
                    }
                    style={{
                      cursor: isDematAccount ? "pointer" : "not-allowed",
                    }}
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
            <img src={logo} alt="logo" style={{ height: "60px" }} />
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
                      className={`${styles.dropdownItem} ${
                        !isSavingsAccount ? styles.customDisabled : ""
                      }`}
                      href="#"
                      tabIndex={isSavingsAccount ? "0" : "-1"}
                      aria-disabled={!isSavingsAccount}
                      onClick={() =>
                        isSavingsAccount && handleNavigation("Savings Account")
                      }
                      style={{
                        cursor: isSavingsAccount ? "pointer" : "not-allowed",
                      }}
                    >
                      Savings Account
                    </a>
                  </li>
                  <li className={styles.dropdownDivider}></li>
                  <li>
                    <a
                      className={`${styles.dropdownItem} ${
                        !isDematAccount ? styles.customDisabled : ""
                      }`}
                      href="#"
                      tabIndex={isDematAccount ? "0" : "-1"}
                      aria-disabled={!isDematAccount}
                      onClick={() =>
                        isDematAccount && handleNavigation("Demat Account")
                      }
                      style={{
                        cursor: isDematAccount ? "pointer" : "not-allowed",
                      }}
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
