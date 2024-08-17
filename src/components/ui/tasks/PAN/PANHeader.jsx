import styles from "./PANHeader.module.css";
import down_arrow from "./assets/img/down-arrow.svg";
import dark_mode from "./assets/img/dark-mode.svg";
import search_icon from "./assets/img/search-icon-prev.svg";
const PANHeader = () => {
  return (
    <>
      <div className={styles["style-3"]}>
        <div className={styles["style-4"]}>
          <div className={styles["style-5"]}>
            <div className={styles["style-6"]}>
              <h1 className={styles["style-7"]}>
                <a className={styles["style-8"]}></a>Question No: EPAN_001AA
              </h1>
            </div>
          </div>
          <div className={styles["style-9"]}>
            <div className={styles["style-10"]}>
              <section className={styles["style-11"]}>
                <div className={styles["style-12"]}>
                  <div className={styles["style-13"]}>
                    <i className={styles["style-14"]}></i>
                    <span className={styles["style-15"]}> Call Us</span>
                    <span className={styles["style-16"]}>
                      <span className={styles["style-17"]}>
                        <img
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2725%27%20height=%2715%27/%3e"
                          className={styles["style-18"]}
                        />
                      </span>
                      <img
                        alt="down-arrow"
                        src={down_arrow}
                        className={styles["style-19"]}
                      />
                      <noscript className={styles["style-20"]}></noscript>
                    </span>
                  </div>
                  <span className={styles["style-21"]}></span>
                  <div className={styles["style-22"]}>
                    <i className={styles["style-23"]}></i>
                    <span className={styles["style-24"]}> English</span>
                    <span className={styles["style-25"]}>
                      <span className={styles["style-26"]}>
                        <img
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2725%27%20height=%2715%27/%3e"
                          className={styles["style-27"]}
                        />
                      </span>
                      <img
                        alt="down-arrow"
                        src={down_arrow}
                        className={styles["style-28"]}
                      />
                      <noscript className={styles["style-29"]}></noscript>
                    </span>
                  </div>
                  <span className={styles["style-30"]}></span>
                  <div className={styles["style-31"]}>
                    <span className={styles["style-32"]}> A-</span>
                    <span className={styles["style-33"]}>A</span>
                    <span className={styles["style-34"]}>A+</span>
                  </div>
                  <span className={styles["style-35"]}></span>
                  <div className={styles["style-36"]}>
                    <span className={styles["style-37"]}>
                      <span className={styles["style-38"]}>
                        <img
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2725%27%20height=%2718%27/%3e"
                          className={styles["style-39"]}
                        />
                      </span>
                      <img
                        alt="dark"
                        src={dark_mode}
                        className={styles["style-40"]}
                      />
                      <noscript className={styles["style-41"]}></noscript>
                    </span>
                  </div>
                  <span className={styles["style-42"]}></span>
                  <span className={styles["style-43"]}>
                    <a className={styles["style-44"]}>Login</a>
                  </span>
                  <button className={styles["style-45"]}>Register</button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["style-46"]}>
        <div className={styles["style-47"]}>
          <div className={styles["style-48"]}>
            <div className={styles["style-49"]}>
              Simulated website for educational purpose only
            </div>
          </div>
        </div>
      </div>
      <div className={styles["style-50"]}>
        <div className={styles["style-51"]}>
          <div className={styles["style-52"]}>
            <section className={styles["style-53"]}>
              <ul className={styles["style-54"]}>
                <li className={styles["style-55"]}>
                  <a className={styles["style-56"]}>Home</a>
                  <hr className={styles["style-57"]} />
                </li>
                <li className={styles["style-58"]}>
                  <a className={styles["style-59"]}>Individual/HUF</a>
                  <hr className={styles["style-60"]} />
                </li>
                <li className={styles["style-61"]}>
                  <a className={styles["style-62"]}>Company</a>
                  <hr className={styles["style-63"]} />
                </li>
                <li className={styles["style-64"]}>
                  <a className={styles["style-65"]}>Non-Company</a>
                  <hr className={styles["style-66"]} />
                </li>
                <li className={styles["style-67"]}>
                  <a className={styles["style-68"]}>
                    Tax Professionals &amp; Others
                  </a>
                  <hr className={styles["style-69"]} />
                </li>
                <li className={styles["style-70"]}>
                  <a className={styles["style-71"]}>Downloads</a>
                  <hr className={styles["style-72"]} />
                </li>
                <li className={styles["style-73"]}>
                  <a className={styles["style-74"]}>Help</a>
                  <hr className={styles["style-75"]} />
                </li>
              </ul>
            </section>
            <section className={styles["style-76"]}>
              <div className={styles["style-77"]}>
                <a className={styles["style-78"]}>
                  <span className={styles["style-79"]}>
                    <span className={styles["style-80"]}>
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2723%27%20height=%2723%27/%3e"
                        className={styles["style-81"]}
                      />
                    </span>
                    <img
                      alt="prev"
                      src={search_icon}
                      className={styles["style-82"]}
                    />
                    <noscript className={styles["style-83"]}></noscript>
                  </span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PANHeader;
