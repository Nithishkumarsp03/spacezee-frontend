import React, { useState, useEffect } from "react";
import styles from "./EPANAdhar.module.css";
import breadcrumb_img from "./assets/img/breadCrumb.svg";
import line_right_arrow from "./assets/img/line_right_arrow.png";
import nextIconPrimary from "./assets/img/nextIconPrimary.svg";

const EPANAdhar = () => {
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    const isValidAadhaar =
      aadhaarNumber.length === 12 && /^\d+$/.test(aadhaarNumber);
    setIsButtonActive(isValidAadhaar && isConfirmed);
  }, [aadhaarNumber, isConfirmed]);

  return (
    <div className={styles["style-0"]}>
      <div className={styles["style-1"]}>
        <ol className={styles["style-2"]}>
          <li className={styles["style-3"]}>
            <span className={styles["style-4"]}>
              <a className={styles["style-5"]}>Home</a>
            </span>
            <span className={styles["style-6"]}>
              <span className={styles["style-7"]}>
                <span className={styles["style-8"]}>
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2715%27%20height=%2715%27/%3e"
                    className={styles["style-9"]}
                  />
                </span>
                <img
                  src={breadcrumb_img}
                  className={styles["style-10"]}
                  alt="breadcrumb"
                />
              </span>
            </span>
          </li>
          <li className={styles["style-11"]}>
            <span className={styles["style-12"]}>e-PAN</span>
          </li>
        </ol>
      </div>
      <div className={styles["style-13"]}>
        <div className={styles["style-14"]}>
          <div className={styles["style-15"]}>
            <div className={styles["style-16"]}>
              <ul className={styles["style-17"]}>
                <li className={styles["style-18"]}>
                  <div className={styles["style-19"]}>1</div>
                </li>
                <li className={styles["style-20"]}>
                  <span className={styles["style-21"]}>
                    <span className={styles["style-22"]}>
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%276%27%20height=%2712%27/%3e"
                        className={styles["style-23"]}
                      />
                    </span>
                    <img
                      src={line_right_arrow}
                      className={styles["style-24"]}
                      alt="arrow"
                    />
                  </span>
                  <div className={styles["style-26"]}>2</div>
                  <hr className={styles["style-27"]} />
                </li>
                <li className={styles["style-28"]}>
                  <span className={styles["style-29"]}>
                    <span className={styles["style-30"]}>
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%276%27%20height=%2712%27/%3e"
                        className={styles["style-31"]}
                      />
                    </span>
                    <img
                      src={line_right_arrow}
                      className={styles["style-32"]}
                      alt="arrow"
                    />
                  </span>
                  <div className={styles["style-34"]}>3</div>
                  <hr className={styles["style-35"]} />
                </li>
                <li className={styles["style-36"]}>
                  <span className={styles["style-37"]}>
                    <span className={styles["style-38"]}>
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%276%27%20height=%2712%27/%3e"
                        className={styles["style-39"]}
                      />
                    </span>
                    <img
                      src={line_right_arrow}
                      className={styles["style-40"]}
                      alt="arrow"
                    />
                  </span>
                  <div className={styles["style-42"]}>4</div>
                  <hr className={styles["style-43"]} />
                </li>
              </ul>
              <div className={styles["style-44"]}>
                <div className={styles["style-45"]}>
                  <div className={styles["style-46"]}>Enter Aadhaar </div>
                  <div className={styles["style-47"]}>Number</div>
                </div>
                <div className={styles["style-48"]}>
                  <span className={styles["style-49"]}>OTP Validation</span>
                </div>
                <div className={styles["style-50"]}>
                  <div className={styles["style-51"]}>Validate Aadhaar</div>
                  <div className={styles["style-52"]}> Details</div>
                </div>
                <div className={styles["style-53"]}>
                  <div className={styles["style-54"]}>Select &amp; Update</div>
                  <div className={styles["style-55"]}> PAN Details</div>
                </div>
              </div>
            </div>
            <div className={styles["style-56"]}>
              <div className={styles["style-57"]}>
                <h4 className={styles["style-58"]}>Get New e-PAN</h4>
              </div>
            </div>
            <div className={styles["style-59"]}>
              <div className={styles["style-60"]}>
                <span className={styles["style-61"]}>*</span> Indicates
                mandatory fields
              </div>
              <div className={styles["style-62"]}>
                <div className={styles["style-63"]}>
                  <div className={styles["style-64"]}>
                    <span className={styles["style-65"]}>Remember:</span> It's
                    an Aadhaar e-KYC based process and allotment of PAN is free
                    of cost. A pdf file of PAN will be generated and issued to
                    the applicant. Help?
                  </div>
                </div>
                <div className={styles["style-66"]}>
                  <div className={styles["style-67"]}>
                    Enter your 12 digit Aadhaar Number for PAN allotment{" "}
                    <span className={styles["style-68"]}>*</span>
                  </div>
                  <div className={styles["style-69"]}>
                    <input
                      type="text"
                      className={styles["style-70"]}
                      maxLength="12"
                      value={aadhaarNumber}
                      onChange={(e) => setAadhaarNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className={styles["style-71"]}>
                  <div className={styles["style-72"]}>
                    <input
                      className={styles["style-73"]}
                      type="checkbox"
                      id="defaultCheck1"
                      checked={isConfirmed}
                      onChange={() => setIsConfirmed(!isConfirmed)}
                    />
                    <label
                      className={styles["style-74"]}
                      htmlFor="defaultCheck1"
                    >
                      I confirm that
                      <span className={styles["style-75"]}>*</span>
                    </label>
                  </div>
                </div>
                <div className={styles["style-76"]}>
                  <div className={styles["style-77"]}>
                    1. I have never been allotted a Permanent Account
                    Number(PAN)
                  </div>
                  <div className={styles["style-78"]}>
                    2. My active mobile number is linked with Aadhaar
                  </div>
                  <div className={styles["style-79"]}>
                    3. My complete date of birth (DD-MM-YYYY) is available on
                    Aadhaar card
                  </div>
                  <div className={styles["style-80"]}>
                    4. I am not minor as on application date of Permanent
                    Account Number(PAN)
                  </div>
                </div>
              </div>
              <div className={styles["style-81"]}>
                <div className={styles["style-82"]}>
                  <div className={styles["style-83"]}>
                    <button className={styles["style-84"]}>Cancel</button>
                  </div>
                  <div className={styles["style-85"]}>
                    <button
                      className={styles["style-86"]}
                      style={{
                        backgroundColor: isButtonActive
                          ? "rgb(41, 57, 141)"
                          : "rgb(193, 193, 193)",
                        color: isButtonActive
                          ? "rgb(255, 255, 255)"
                          : "rgb(126, 126, 126)",
                      }}
                      disabled={!isButtonActive}
                    >
                      <div className={styles["style-87"]}>
                        Continue
                        <span className={styles["style-88"]}>
                          <span className={styles["style-89"]}>
                            <img src={nextIconPrimary} alt="next icon" />
                          </span>
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EPANAdhar;
