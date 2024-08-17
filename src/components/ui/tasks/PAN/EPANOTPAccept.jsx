import { useState, useEffect } from "react";
import styles from "./EPANOTPAccept.module.css";
import { FaCheck } from "react-icons/fa"; // Importing the white tick icon
import breadcrumb_img from "./assets/img/breadCrumb.svg";
import line_right_arrow from "./assets/img/line_right_arrow.png";
import line_right_arrow_active from "./assets/img/line_right_active1_arrow.png";
import nextIconPrimary from "./assets/img/nextIconPrimary.svg";

const EPANOTPAccept = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    setIsButtonActive(isConfirmed);
  }, [isConfirmed]);

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
            <div className={styles["style-53"]}>
              <div className={styles["style-54"]}>
                <h4 className={styles["style-55"]}>OTP Validation</h4>
              </div>
            </div>
            <div className={styles["style-56"]}>
              <div className={styles["style-57"]}>
                <div className={styles["style-58"]}>
                  <h5 className={styles["style-59"]}>
                    Request for generating OTP by SMS to your Aadhaar linked
                    Mobile Number will be sent to UIDAI - Please read the terms
                    and provide consent.
                  </h5>
                </div>
                <div className={styles["style-60"]}>
                  <div className={styles["style-61"]}>
                    <div className={styles["style-62"]}>
                      <h5 className={styles["style-63"]}>
                        Consent Declaration for Generation of new PAN based on
                        Aadhaar e-KYC details:
                      </h5>
                    </div>
                    <div className={styles["style-64"]}>
                      <ol className={styles["style-65"]}>
                        <li className={styles["style-66"]}>
                          <p className={styles["style-67"]}>
                            I have understood the process of authentication
                            described herein and hereby grant consent for use of
                            my Aadhaar identity information (through Aadhaar
                            based e-KYC authentication facility of UIDAI) for
                            purposes of authentication of my identity in
                            accordance with the provisions of the Aadhaar
                            (Targeted Delivery of Financial and other Subsidies,
                            Benefits and Services) Act, 2016 and allied rules
                            and regulations notified there under, and for
                            purposes of verifying and validating my credentials
                            as maintained by the Income Tax Department.
                          </p>
                        </li>
                        <li className={styles["style-68"]}>
                          <p className={styles["style-69"]}>
                            I hereby grant consent to the Income Tax Department
                            for recording, storing, using, updating, processing
                            e-KYC data received through Aadhaar based eKYC
                            authentication services of UIDAI, including my
                            demographic information and photograph, for purpose
                            of - (a) authenticating my identity on the e-filing
                            portal www.incometaxindiaefiling.gov.in through
                            measures including use of OneTime-Password/OTP,
                            and/or (b) generating and allotting a PAN number and
                            updating my information on the PAN database in
                            accordance with my Aadhaar e-KYC data. I declare
                            that my consent relating to e-KYC data above is
                            voluntary and is my chosen alternative for
                            submission of identity information.
                          </p>
                        </li>
                        <li className={styles["style-70"]}>
                          <p className={styles["style-71"]}>
                            I have understood that I bear the sole
                            responsibility for maintaining up-to-date
                            information linked to my Aadhaar, PAN and any other
                            related information provided to the Income Tax
                            Department, and the Income Tax Department shall not
                            be liable in any manner whatsoever for any actions
                            taken, or lack thereof, due to my failure to update
                            or correct any such information.
                          </p>
                        </li>
                        <li className={styles["style-72"]}>
                          <p className={styles["style-73"]}>
                            I have understood that the Income Tax Department
                            shall deploy reasonable security practices and
                            safeguards to protect the security and
                            confidentiality of data and information in
                            possession or control of the Income Tax Department,
                            and that such data and information will be stored
                            for such time as may be prescribed by regulations
                            issued by the UIDAI and other applicable law.
                          </p>
                        </li>
                        <li className={styles["style-74"]}>
                          <p className={styles["style-75"]}>
                            I hereby Certify that I do not have any PAN alloted
                            to me and in case I am found be in possession of
                            more than one PAN then I shall be liable for penalty
                            of Rs. 10,000/- under section 272B(1).
                          </p>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className={styles["style-76"]}>
                  <div className={styles["style-77"]}>
                    <input
                      className={styles["style-78"]}
                      type="checkbox"
                      id="defaultCheck1"
                      checked={isConfirmed}
                      onChange={() => setIsConfirmed(!isConfirmed)}
                    />
                    <label
                      className={styles["style-79"]}
                      htmlFor="defaultCheck1"
                    >
                      I have read the consent terms and agree to proceed further
                    </label>
                  </div>
                </div>
              </div>
              <div className={styles["style-80"]}>
                <div className={styles["style-81"]}>
                  <div className={styles["style-82"]}>
                    <button className={styles["style-83"]}>Cancel</button>
                  </div>
                  <div className={styles["style-84"]}>
                    <button
                      className={styles["style-85"]}
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
                      <div className={styles["style-86"]}>
                        Continue
                        <span className={styles["style-87"]}>
                          <span className={styles["style-88"]}>
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

export default EPANOTPAccept;
