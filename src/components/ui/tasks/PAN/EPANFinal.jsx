import styles from "./EPANFinal.module.css";
import breadCrumb from "./assets/img/breadCrumb.svg";
import tickIcon from "./assets/img/tick_ic.svg";
import nextIconPrimary from "./assets/img/nextIconPrimary.svg";
import { useCompleteTaskWithBroadcast } from "../../../../hooks/useCompleteTaskWithBroadcast";

const EPANFinal = () => {
  useCompleteTaskWithBroadcast();

  return (
    <div className={styles["style-0"]}>
      <div className={`${styles["style-1"]} my-3`}>
        <span className={styles["style-4"]}>
          <a className={styles["style-5"]}>Home</a>
        </span>
        <span className={styles["style-6"]}>
          <span className={styles["style-7"]}>
            <img src={breadCrumb} alt="" />
          </span>
        </span>

        <span className={styles["style-12"]}>e-PAN</span>
      </div>
      <div className={styles["style-13"]}>
        <div className={styles["style-14"]}>
          <div className={styles["style-15"]}>
            <div className={styles["style-16"]}>
              <ul className={styles["style-17"]}>
                <li className={styles["style-18"]}>
                  <div className={styles["style-19"]}>
                    <img
                      src={tickIcon}
                      alt="Success"
                      className={styles["style-61"]}
                    />
                  </div>
                </li>
                <li className={styles["style-20"]}>
                  <div className={styles["style-19"]}>
                    <img
                      src={tickIcon}
                      alt="Success"
                      className={styles["style-61"]}
                    />
                  </div>
                  <hr className={styles["style-26"]} />
                </li>
                <li className={styles["style-27"]}>
                  <div className={styles["style-19"]}>
                    <img
                      src={tickIcon}
                      alt="Success"
                      className={styles["style-61"]}
                    />
                  </div>
                  <hr className={styles["style-33"]} />
                </li>
                <li className={styles["style-34"]}>
                  <div className={styles["style-19"]}>
                    <img
                      src={tickIcon}
                      alt="Success"
                      className={styles["style-61"]}
                    />
                  </div>
                  <hr className={styles["style-40"]} />
                </li>
              </ul>
              <div className={styles["style-41"]}>
                <div className={styles["style-42"]}>
                  <div className={styles["style-43"]}>Enter Aadhaar </div>
                  <div className={styles["style-44"]}>Number</div>
                </div>
                <div className={styles["style-45"]}>
                  <span className={styles["style-46"]}>OTP Validation</span>
                </div>
                <div className={styles["style-47"]}>
                  <div className={styles["style-48"]}>Validate Aadhaar</div>
                  <div className={styles["style-49"]}> Details</div>
                </div>
                <div className={styles["style-50"]}>
                  <div className={styles["style-51"]}>Select &amp; Update</div>
                  <div className={styles["style-52"]}> PAN Details</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["style-53"]}>
            <div className={styles["style-54"]}>
              <div className={styles["style-55"]}>
                <div className={styles["style-56"]}>
                  <div className={styles["style-57"]}>
                    <div className={styles["style-58"]}>
                      <div className={styles["style-59"]}>
                        <div className={styles["style-60"]}>
                          <img
                            src={tickIcon}
                            alt="Success"
                            className={styles["style-61"]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["style-62"]}>
                    <div className={styles["style-63"]}>
                      <div className={styles["style-64"]}>
                        <h4 className={styles["style-65"]}>
                          Your request for e-PAN has been submitted successfully
                        </h4>
                      </div>
                      <div className={styles["style-66"]}>
                        Acknowledgement Number for the same is ******. Please
                        save the Acknowledgement Number for future purposes to
                        check the status or to download the e-PAN. The
                        Acknowledgement number has also been sent by SMS to the
                        Mobile Number. You will receive e-PAN shortly.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles["style-67"]} w-100 ms-auto`}>
              <button className={styles["style-68"]}>
                <div className={styles["style-69"]}>
                  Go To Login
                  <span className={styles["style-70"]}>
                    <img src={nextIconPrimary} alt="" />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EPANFinal;
