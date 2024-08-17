import breadcrumb_img from "./assets/img/breadCrumb.svg";
import easy_epan from "./assets/img/easyepan.svg";
import get_epan from "./assets/img/getepan.svg";
import holds_epan from "./assets/img/holdsepan.svg";
import all_epan from "./assets/img/allepan.svg";
import styles from "./EPANRoute.module.css";

const EPANRoute = () => {
  return (
    <div className={`${styles["style-0"]} my-4`}>
      <div className={styles["style-1"]}>
        <span className={styles["style-4"]}>
          <a className={styles["style-5"]}>Home</a>
        </span>
        <span className={styles["style-6"]}>
          <span className={styles["style-7"]}>
            <span className={styles["style-8"]}>
              <img alt="" src={breadcrumb_img} />
            </span>
          </span>
        </span>

        <span className={styles["style-13"]}>e-PAN</span>
      </div>

      <div className={styles["style-14"]}>
        <div className={styles["style-15"]}>
          <div className={styles["style-16"]}>
            <div className={styles["style-17"]}>
              <h4 className={styles["style-18"]}>e-PAN</h4>
            </div>
            <div className={styles["style-19"]}>
              e-PAN is for allotment of instant PAN (on near-real time basis)
              for those applicants who possess a valid Aadhaar number. PAN is
              issued in PDF format to applicants, which is free of cost.
            </div>
          </div>

          <div className={styles["style-20"]}>
            <div className={styles["style-21"]}>
              <div className={styles["style-22"]}>
                <div className={styles["style-23"]}>
                  <div className={styles["style-24"]}>
                    <span className={styles["style-25"]}>
                      <span className={styles["style-26"]}>
                        <img alt="" aria-hidden="true" src={easy_epan} />
                      </span>
                    </span>
                  </div>
                  <div className={styles["style-30"]}>
                    Easy &amp; Paperless Process
                  </div>
                </div>
              </div>

              <div className={styles["style-31"]}>
                <div className={styles["style-32"]}>
                  <div className={styles["style-33"]}>
                    <span className={styles["style-34"]}>
                      <span className={styles["style-35"]}>
                        <img alt="" aria-hidden="true" src={get_epan} />
                      </span>
                    </span>
                  </div>
                  <div className={styles["style-39"]}>
                    Get e-Pan within 10 Minutes
                  </div>
                </div>
              </div>

              <div className={styles["style-40"]}>
                <div className={styles["style-41"]}>
                  <div className={styles["style-42"]}>
                    <span className={styles["style-43"]}>
                      <span className={styles["style-44"]}>
                        <img alt="" src={holds_epan} />
                      </span>
                    </span>
                  </div>
                  <div className={styles["style-48"]}>
                    Holds Same Value as <br className={styles["style-49"]} />{" "}
                    Physical PAN Card
                  </div>
                </div>
              </div>

              <div className={styles["style-50"]}>
                <div className={styles["style-51"]}>
                  <div className={styles["style-52"]}>
                    <span className={styles["style-53"]}>
                      <span className={styles["style-54"]}>
                        <img alt="" src={all_epan} />
                      </span>
                    </span>
                  </div>
                  <div className={styles["style-58"]}>
                    All You Need is Aadhaar{" "}
                    <br className={styles["style-59"]} /> Card &amp; Linked
                    Mobile Number
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["style-60"]}>
            <div className={styles["style-61"]}>
              <div className={styles["style-62"]}>
                <div className={styles["style-63"]}>
                  <div className={styles["style-64"]}>
                    <h4 className={styles["style-65"]}>Get New e-PAN</h4>
                    <div className={styles["style-66"]}>
                      <p className={styles["style-67"]}>
                        e-PAN is a digitally signed PAN card issued in
                        electronic format based on e-KYC data of Aadhaar
                      </p>
                    </div>
                  </div>
                  <div className={styles["style-68"]}></div>
                  <div className={styles["style-69"]}>
                    <a className={styles["style-70"]}>Get New e-PAN</a>
                  </div>
                </div>
              </div>

              <div className={styles["style-71"]}>
                <div className={styles["style-72"]}>
                  <div className={styles["style-73"]}>
                    <h4 className={styles["style-74"]}>
                      Check Status/Download PAN
                    </h4>
                    <div className={styles["style-75"]}>
                      <p className={styles["style-76"]}>
                        Check status of pending e-PAN request/ Download e-PAN
                      </p>
                    </div>
                  </div>
                  <div className={styles["style-77"]}></div>
                  <div className={styles["style-78"]}>
                    <a className={styles["style-79"]}>Continue</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["style-80"]}>
            <div className={styles["style-81"]}>
              <h4 className={styles["style-82"]}>Need Help?</h4>
              <div className={styles["style-83"]}></div>
              <div className={styles["style-84"]}>
                <ul className={styles["style-85"]}>
                  <li className={styles["style-86"]}>
                    <span className={styles["style-87"]}>User Manual</span>
                  </li>
                  <li className={styles["style-88"]}>
                    <span className={styles["style-89"]}>FAQs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EPANRoute;
