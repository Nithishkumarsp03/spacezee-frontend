import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import styles from "./DaOtpVerification.module.css";
import { FaCheckSquare, FaSquare } from "react-icons/fa";
import useNavigateToDirectory from "../../../../../../hooks/useNavigateToDirectory";

const DaOtpVerification = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [isChecked, setIsChecked] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const navigate = useNavigateToDirectory();

  const correctOtp = "1234";

  useEffect(() => {
    const isOtpComplete = otp.every((digit) => digit !== "");
    setIsButtonEnabled(isChecked && isOtpComplete);
  }, [otp, isChecked]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus on the next input field if available
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const toggleCheckbox = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp === correctOtp) {
      navigate("success"); // Replace "next-step" with your next directory or path
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid OTP",
        text: "The OTP you entered is incorrect. Please try again.",
      });
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.content}>
          <div className={styles.notice}>
            <p>
              Nergy Private Limited has requested to digitally sign the document
            </p>
            <p>
              Transaction IDESIGN 230525154003799EKSSYSKI/BYJGYFXTYNNIRKHGKEVS
              dated {new Date(Date.now()).toISOString()}
            </p>
          </div>

          <div className={styles.checkboxContainer} onClick={toggleCheckbox}>
            {isChecked ? (
              <FaCheckSquare className={styles.checkbox} />
            ) : (
              <FaSquare className={styles.checkbox} />
            )}
            <label className={styles.label}>
              I hereby authorize Nergy eGov Technologies Limited to:
            </label>
          </div>

          <div className={styles.termsContainer}>
            <ul className={styles.termsList}>
              <li>
                Use my Aadhaar/ Virtual ID details (as applicable) eSign of
                documents requested using Digio - a Digital Transaction
                Management platform for/with Digiotech Solutions Private Limited
                , and authenticate my identity through the Aadhaar
                Authentication system (Aadhaar based e-KYC services of UIDAI) in
                accordance with the provisions of the Aadhaar (Targeted Delivery
                of Financial and Other Subsidies, Benefits and Services) Act,
                2016 and the allied rules and regulations notified thereunder
                and for no other purpose.
              </li>
              <li>
                Please authenticate my identity using either OTP or biometrics
                for the Aadhaar Authentication system in order to obtain my
                e-KYC through UIDAI's Aadhaar-based e-KYC services. You may also
                utilise my photo, eSign, and demographic details (including
                name, gender, date of birth, and address) for the same purpose.
              </li>
            </ul>
          </div>

          <div className={styles.otpSection}>
            <div className={styles.otpMessage}>
              Your OTP is <strong>1234</strong>
            </div>
            <div className={styles.otpInputContainer}>
              {otp.map((data, index) => (
                <input
                  type="text"
                  key={index}
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  className={styles.otpInput}
                />
              ))}
            </div>
            <div className={styles.resendLink}>
              <a href="#">Resend OTP</a>
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <button type="button" className={styles.cancelButton}>
              Cancel
            </button>
            <button
              type="button"
              className={styles.verifyButton}
              disabled={!isButtonEnabled}
              onClick={handleVerifyOtp}
            >
              Verify OTP
            </button>
          </div>
        </div>
        <div className={styles.logoContainer}>
          <img
            src="/account/static/media/otp-page-logos.dc142056600dfe213590.png"
            alt="Logo"
            className={styles.logo}
          />
        </div>
      </div>
    </section>
  );
};

export default DaOtpVerification;
