import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./EPANAdhar.module.css";
import breadcrumb_img from "./assets/img/breadCrumb.svg";
import line_right_arrow from "./assets/img/line_right_arrow.png";
import nextIconPrimary from "./assets/img/nextIconPrimary.svg";
import roundedErrorIcon from "./assets/img/round-error-24px.svg";
import warningSvg from "./assets/img/Warning.svg";
import useNavigateToDirectory from "../../../../hooks/useNavigateToDirectory";
import { useSelector } from "react-redux";
import { selectTask } from "../../../../redux/features/user/userTaskSlice";
import Swal from "sweetalert2";

const EPANAdhar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [isConfirmed, setIsConfirmed] = useState(false);
  const navigate = useNavigateToDirectory();
  const aadhaarNumber = watch("aadhaarNumber");
  const task = useSelector(selectTask);

  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    const isValidAadhaar =
      aadhaarNumber &&
      aadhaarNumber.length === 12 &&
      /^\d+$/.test(aadhaarNumber);
    setIsButtonActive(isValidAadhaar && isConfirmed);
  }, [aadhaarNumber, isConfirmed]);

  const onSubmit = (data) => {
    const aadhar = Number(task.answers.Aadhaar_No);
    const aadharSubmit = Number(data.aadhaarNumber);
    if (aadhar == aadharSubmit) {
      navigate("epan-otp-acept");
    } else {
      Swal.fire({
        icon: "error",
        title: "Mismatch",
        text: "The Aadhaar numbers do not match. Please try again.",
      });
    }
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
                  <div
                    style={{ display: "flex", flexDirection: "row" }}
                    className={styles["warbox"]}
                  >
                    <div>
                      <img
                        alt="warning_icon"
                        style={{
                          verticalAlign: "middle",
                          width: "16px",
                          height: "16px",
                          marginRight: "8px",
                        }}
                        src={warningSvg}
                        aria-disabled="false"
                      />
                    </div>
                    <div>
                      <strong style={{ fontWeight: 700 }}>Warning :</strong> As
                      per provisions of Section 139A of Income Tax Act, 1961, a
                      person should not possess more than one PAN and as per
                      Section 272B(1) If a person fails to comply with the
                      provisions of section 139A i.e. if a person possesses more
                      than one PAN, it will attract a penalty of Rs. 10,000.
                    </div>
                  </div>
                  <div className={styles["style-64"]}>
                    <span className={styles["style-65"]}>Remember:</span> It's
                    an Aadhaar e-KYC based process and allotment of PAN is free
                    of cost. A pdf file of PAN will be generated and issued to
                    the applicant. Help?
                  </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles["style-66"]}>
                    <div className={styles["style-67"]}>
                      Enter your 12 digit Aadhaar Number for PAN allotment{" "}
                      <span className={styles["style-68"]}>*</span>
                    </div>
                    <div className={styles["style-69"]}>
                      <input
                        type="text"
                        placeholder="eg - 8969 1232 9200"
                        className={`${styles.input} ${
                          errors.aadhaarNumber ? styles.inputError : ""
                        }`}
                        maxLength="12"
                        {...register("aadhaarNumber", {
                          required: "Aadhaar number is required",
                          pattern: {
                            value: /^\d{12}$/,
                            message: "Aadhaar number must be 12 digits",
                          },
                        })}
                      />
                      {errors.aadhaarNumber && (
                        <div
                          className={`${styles.customErrorMessage} mt-2`}
                          role="alert"
                        >
                          <div className={styles.customErrorContent}>
                            <div>
                              <img
                                alt="errorIcon"
                                className={styles.customErrorIcon}
                                src={roundedErrorIcon}
                                aria-disabled="false"
                              />
                            </div>
                            <div>
                              <strong className={styles.customErrorStrong}>
                                Error:{" "}
                              </strong>
                              This is a Mandatory Field.
                            </div>
                          </div>
                        </div>
                      )}
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
                  <div className={styles["style-81"]}>
                    <div className={styles["style-82"]}>
                      <div className={styles["style-83"]}>
                        <button
                          type="button"
                          className={styles["style-84"]}
                          onClick={() => navigate(-1)}
                        >
                          Cancel
                        </button>
                      </div>
                      <div className={styles["style-85"]}>
                        <button
                          type="submit"
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EPANAdhar;
