import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import styles from "./EPANAdharOTP.module.css";
import hidePasswordIcon from "./assets/img/hide-password.svg";
import showPasswordIcon from "./assets/img/show-password.svg";
import { useSelector } from "react-redux";
import { selectTask } from "../../../../redux/features/user/userTaskSlice";

const EPANAdharOTP = ({ setIsValid, setIsValidateOpen }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [isFilled, setIsFilled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { questions } = useSelector(selectTask);

  // Function to generate a new 6-digit OTP
  const generateOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
  };

  useEffect(() => {
    generateOtp(); // Generate a new OTP when the component mounts
  }, []);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    let otpArray = [...otp];
    otpArray[index] = element.value;
    setOtp(otpArray);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }

    setIsFilled(otpArray.every((digit) => digit !== ""));
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp === generatedOtp) {
      console.log("OTP verified:", enteredOtp);
      setIsValid(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "Incorrect OTP",
        text: "The OTP you entered is incorrect. Please try again.",
      });
    }
  };

  return (
    <li className={styles["style-0"]}>
      <div className={styles["style-1"]}>
        <div className={styles["style-2"]}>Email id</div>
        <div className={styles["style-3"]}>
          {questions?.Email_ID}{" "}
          <span className={styles["style-4"]}>Validate email</span>
          <div className={styles["style-5"]}>
            <div className={styles["style-6"]}>
              <div className={styles["style-7"]}>
                Enter the OTP <span className={styles["style-8"]}>* </span>
                {`[${generatedOtp}]`}
              </div>
              <div className={styles["style-10"]}>
                <div className={styles["style-11"]}>
                  {otp.map((data, index) => (
                    <input
                      className={styles[`style-${12 + index}`]}
                      type={showPassword ? "text" : "password"}
                      name="otp"
                      maxLength="1"
                      key={index}
                      value={data}
                      onChange={(e) => handleChange(e.target, index)}
                      onFocus={(e) => e.target.select()}
                    />
                  ))}
                  <span
                    className={styles["password-toggle"]}
                    onClick={toggleShowPassword}
                  >
                    <img
                      src={showPassword ? hidePasswordIcon : showPasswordIcon}
                      alt={showPassword ? "Hide password" : "Show password"}
                      className={styles["password-icon"]}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className={styles["style-22"]}>
              <div className={styles["style-23"]}>
                <div className={styles["style-24"]}>
                  <div className={styles["style-25"]}>
                    OTP expires in 14m:52s
                  </div>
                  <div className={styles["style-26"]}>3 Attempts remaining</div>
                </div>
              </div>
            </div>
            <div className={styles["style-27"]}>
              <div className={styles["style-28"]}>
                <span
                  className={styles["style-29"]}
                  onClick={generateOtp}
                  style={{ cursor: "pointer" }}
                >
                  Resend OTP
                </span>
              </div>
            </div>
            <div className={styles["style-30"]}>
              <div className={styles["style-31"]}>
                <div
                  className={styles["style-32"]}
                  onClick={() => setIsValidateOpen(false)}
                >
                  Cancel
                </div>
                <div className={styles["style-33"]}>
                  <button
                    className={styles["style-34"]}
                    style={{
                      opacity: isFilled ? "1" : "0.65",
                      pointerEvents: isFilled ? "auto" : "none",
                    }}
                    onClick={handleSubmit}
                    disabled={!isFilled}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default EPANAdharOTP;
