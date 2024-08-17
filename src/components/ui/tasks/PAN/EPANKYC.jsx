import React, { useState } from "react";
import styles from "./EPANKYC.module.css";
import breadCrumb from "./assets/img/breadCrumb.svg";
import tickIcon from "./assets/img/tick_ic.svg";
import arrowIcon from "./assets/img/line_right_active1_arrow.png";
import nextIconPrimary from "./assets/img/nextIconPrimary.svg";
import { FaUserCircle } from "react-icons/fa";
import EPANAdharOTP from "./EPANAdharOTP";
import EPANAdharOtpValid from "./EPANAdharOtpValid";

const EPANKYC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isValidateOpen, setIsValidateOpen] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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
                <img
                  alt=""
                  aria-hidden="true"
                  src={breadCrumb}
                  className={styles["style-9"]}
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
                  <div
                    className={styles["style-19"]}
                    style={{ backgroundImage: `url(${tickIcon})` }}
                  ></div>
                </li>
                <li className={styles["style-20"]}>
                  <span className={styles["style-21"]}>
                    <span className={styles["style-22"]}>
                      <img
                        alt=""
                        aria-hidden="true"
                        className={styles["style-23"]}
                      />
                    </span>
                    <img
                      src={arrowIcon}
                      decoding="async"
                      className={styles["style-24"]}
                      alt=""
                    />
                  </span>
                  <div
                    className={styles["style-25"]}
                    style={{ backgroundImage: `url(${tickIcon})` }}
                  ></div>
                  <hr className={styles["style-26"]} />
                </li>
                <li className={styles["style-27"]}>
                  <span className={styles["style-28"]}>
                    <span className={styles["style-29"]}>
                      <img
                        alt=""
                        aria-hidden="true"
                        className={styles["style-30"]}
                      />
                    </span>
                    <img
                      src={arrowIcon}
                      decoding="async"
                      className={styles["style-31"]}
                      alt=""
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
                        className={styles["style-37"]}
                      />
                    </span>
                    <img
                      src={arrowIcon}
                      decoding="async"
                      className={styles["style-38"]}
                      alt=""
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
              <h4 className={styles["style-55"]}>
                Your personal data based on Aadhaar e-KYC
              </h4>
            </div>
            <div className={styles["style-56"]}>
              <div className={styles["style-57"]}>
                <ul className={styles["style-58"]}>
                  <li className={styles["style-59"]}>
                    <div className={styles["style-60"]}>
                      <div className={styles["style-61"]}>Fields</div>
                      <div className={styles["style-62"]}>Details</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={styles["style-63"]}>
                <ul className={styles["style-64"]}>
                  <li className={styles["style-65"]}>
                    <div className={styles["style-66"]}>
                      <div className={styles["style-67"]}>Photo</div>
                      <div className={styles["style-68"]}>
                        <div className={styles["style-69"]}>
                          <div className={styles["style-70"]}>
                            <FaUserCircle className={styles["style-71"]} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className={styles["style-72"]}>
                    <div className={styles["style-73"]}>
                      <div className={styles["style-74"]}>Aadhaar Number</div>
                      <div className={styles["style-75"]}>**** ****512</div>
                    </div>
                  </li>
                  <li className={styles["style-76"]}>
                    <div className={styles["style-77"]}>
                      <div className={styles["style-78"]}>
                        Name of the international group
                      </div>
                      <div className={styles["style-79"]}>****</div>
                    </div>
                  </li>
                  <li className={styles["style-80"]}>
                    <div className={styles["style-81"]}>
                      <div className={styles["style-82"]}>Date of Birth</div>
                      <div className={styles["style-83"]}>25/07/1998</div>
                    </div>
                  </li>
                  <li className={styles["style-84"]}>
                    <div className={styles["style-85"]}>
                      <div className={styles["style-86"]}>Gender</div>
                      <div className={styles["style-87"]}>Male</div>
                    </div>
                  </li>
                  <li className={styles["style-88"]}>
                    <div className={styles["style-89"]}>
                      <div className={styles["style-90"]}>Mobile Number</div>
                      <div className={styles["style-91"]}>2329796944</div>
                    </div>
                  </li>
                  {!isValidateOpen && (
                    <li className={styles["style-92"]}>
                      <div className={styles["style-93"]}>
                        <div className={styles["style-94"]}>Email id</div>
                        <div className={styles["style-95"]}>
                          amarjit12345@nergymail.com
                          <span
                            className={styles["style-96"]}
                            onClick={() => setIsValidateOpen(true)}
                          >
                            Validate email
                          </span>
                        </div>
                      </div>
                    </li>
                  )}
                  {isValidateOpen && !isValid && (
                    <EPANAdharOTP setIsValid={setIsValid} />
                  )}
                  {isValid && <EPANAdharOtpValid />}
                  <li className={styles["style-97"]}>
                    <div className={styles["style-98"]}>
                      <div className={styles["style-99"]}>Address</div>
                      <div className={styles["style-100"]}>
                        Chatiwind Gate Round, CGR01 line road, Amritsar, Punjab,
                        142001
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles["style-101"]}>
            <div className={styles["style-102"]}>
              <div className={styles["style-103"]}>
                <input
                  className={styles["style-104"]}
                  type="checkbox"
                  value=""
                  onChange={handleCheckboxChange}
                />
                <label className={styles["style-105"]}>
                  I accept that <span className={styles["style-106"]}>*</span>
                  <ul className={styles["style-107"]}>
                    <li className={styles["style-108"]}>
                      1. The above details are correct and I hereby certify that
                      I do not have any PAN allotted to me.
                    </li>
                    <li className={styles["style-109"]}>
                      2. In case I am found be in possession of more than one
                      PAN then I shall be liable for penalty of Rs. 10,000/-
                      under section 272B(1).
                    </li>
                    <li className={styles["style-110"]}>
                      3. I agree that Permanent Account Number may be allotted
                      based on Aadhaar as per with Rule 114 (1B) of Income-Tax
                      Rules 1962.
                    </li>
                  </ul>
                </label>
              </div>
            </div>
            <div className={styles["style-111"]}>
              <div className={styles["style-112"]}>
                <div className={styles["style-113"]}>
                  <button className={styles["style-114"]}>Cancel</button>
                </div>
                <div className={styles["style-115"]}>
                  <button
                    className={styles["style-116"]}
                    style={{
                      backgroundColor:
                        isChecked && isValid ? "rgb(41, 57, 141)" : "",
                      opacity: isChecked && isValid ? 1 : "",
                      color: isChecked && isValid ? "#ffffff" : "",
                    }}
                  >
                    <div className={styles["style-117"]}>
                      Continue
                      <img src={nextIconPrimary} alt="" />
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

export default EPANKYC;
