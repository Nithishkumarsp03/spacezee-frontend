import { useState } from "react";
import styles from "./EPANOtp.module.css";

import breadcrumb_img from "./assets/img/breadCrumb.svg";
import line_right_arrow from "./assets/img/line_right_arrow.png";
import line_right_arrow_active from "./assets/img/line_right_active1_arrow.png";
import hide_password from "./assets/img/hide-password.svg";
import show_password from "./assets/img/show-password.svg";
import nextIconPrimary from "./assets/img/nextIconPrimary.svg";

const EPANOtp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }

    // Check if OTP is fully entered and checkbox is checked
    setIsButtonActive(newOtp.join("").length === 6 && isChecked);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setIsButtonActive(otp.join("").length === 6 && !isChecked);
  };

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
                  <div className={styles["style-19"]}></div>
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
                      src={line_right_arrow_active}
                      className={styles["style-24"]}
                      alt="arrow"
                    />
                  </span>
                  <div className={styles["style-25"]}>2</div>
                  <hr className={styles["style-26"]} />
                </li>
                <li className={styles["style-27"]}>
                  <span className={styles["style-28"]}>
                    <span className={styles["style-29"]}>
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%276%27%20height=%2712%27/%3e"
                        className={styles["style-30"]}
                      />
                    </span>
                    <img
                      src={line_right_arrow}
                      className={styles["style-31"]}
                      alt="arrow"
                    />
                  </span>
                  <div className={styles["style-32"]}>3</div>
                  <hr className={styles["style-33"]} />
                </li>
                <li className={styles["style-34"]}>
                  <span className={styles["style-35"]}>
                    <span className={styles["style-36"]}>
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%276%27%20height=%2712%27/%3e"
                        className={styles["style-37"]}
                      />
                    </span>
                    <img
                      src={line_right_arrow}
                      className={styles["style-38"]}
                      alt="arrow"
                    />
                  </span>
                  <div className={styles["style-39"]}>4</div>
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
              <h4 className={styles["style-55"]}>OTP Validation</h4>
            </div>
          </div>
          <div className={styles["style-56"]}>
            <div className={styles["style-57"]}>
              <span className={styles["style-58"]}>*</span> Indicates mandatory
              fields
            </div>
            <div className={styles["style-59"]}>
              <h3 className={styles["style-60"]}>Check your phone</h3>
              <div className={styles["style-61"]}>
                <div className={styles["style-62"]}>
                  We have sent a One Time Password (OTP) in a text message (SMS)
                  to your Primary mobile number{" "}
                  <span className={styles["style-63"]}>+91 23********44 </span>{" "}
                  and primary email id{" "}
                  <span className={styles["style-64"]}>
                    amarjit12345@nergymail.com
                  </span>
                </div>
              </div>
              <div className={styles["style-65"]}>
                <div className={styles["style-66"]}>
                  Enter the OTP <span className={styles["style-67"]}>*</span>
                  <div className={styles["style-68"]}>[370251]</div>
                </div>
                <div className={styles["style-69"]}>
                  {otp.map((data, index) => (
                    <input
                      key={index}
                      className={styles[`style-7${index}`]}
                      type={isOtpVisible ? "text" : "password"}
                      maxLength="1"
                      value={data}
                      onChange={(e) => handleChange(e.target, index)}
                    />
                  ))}
                  <span
                    className={styles["style-76"]}
                    onClick={() => setIsOtpVisible(!isOtpVisible)}
                    style={{ cursor: "pointer" }}
                  >
                    <span className={styles["style-77"]}>
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2725%27%20height=%2725%27/%3e"
                        className={styles["style-78"]}
                      />
                    </span>
                    {isOtpVisible ? (
                      <img
                        src={hide_password}
                        alt="hide password"
                        className={styles["style-79"]}
                      />
                    ) : (
                      <img
                        src={show_password}
                        alt="show password"
                        className={styles["style-79"]}
                      />
                    )}
                  </span>
                </div>
              </div>
              <div className={styles["style-80"]}>
                <div className={styles["style-81"]}>
                  <div className={styles["style-82"]}>
                    <div className={styles["style-83"]}>
                      OTP expires in 14m:52s
                    </div>
                    <div className={styles["style-84"]}>
                      3 Attempts remaining
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["style-85"]}>
                <div className={styles["style-86"]}>
                  <span className={styles["style-87"]}>Resend OTP</span>{" "}
                  <span className={styles["style-88"]}>
                    (Available in 00m:02s)
                  </span>
                </div>
              </div>
            </div>
            <div className={styles["style-89"]}>
              <div className={styles["style-90"]}>
                <div className={styles["style-91"]}>
                  <input
                    className={styles["style-92"]}
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <label className={styles["style-93"]} htmlFor="defaultCheck1">
                  I agree to validate my Aadhaar details with UIDAI. After
                  successful validation of OTP entered by you, the request for
                  e-KYC Aadhaar data will be fetched from UIDAI
                </label>
              </div>
            </div>
            <div className={styles["style-94"]}>
              <div className={styles["style-95"]}>
                <div className={styles["style-96"]}>
                  <button className={styles["style-97"]}>Cancel</button>
                </div>
                <div className={styles["style-98"]}>
                  <button
                    className={styles["style-99"]}
                    style={{
                      backgroundColor: isButtonActive
                        ? "rgb(42, 58, 141)"
                        : "rgb(193, 193, 193)",
                      color: isButtonActive
                        ? "rgb(255, 255, 255)"
                        : "rgb(126, 126, 126)",
                    }}
                    disabled={!isButtonActive}
                  >
                    <div className={styles["style-100"]}>
                      Continue
                      <span className={styles["style-101"]}>
                        <span className={styles["style-102"]}>
                          <img
                            alt=""
                            aria-hidden="true"
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e"
                            className={styles["style-103"]}
                          />
                        </span>
                        <img
                          src={nextIconPrimary}
                          alt="next icon"
                          className={styles["style-104"]}
                        />
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
  );
};

export default EPANOtp;
