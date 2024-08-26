import React, { useRef } from "react";
import Swal from "sweetalert2";
import styles from "./DaConfirmEmailOtpSection.module.css";
import image from "../assets/man-with-paper-plane-graphics.svg";
import { useSelector } from "react-redux";
import { selectTask } from "../../../../../../redux/features/user/userTaskSlice";
import useNavigateToDirectory from "../../../../../../hooks/useNavigateToDirectory";

const DaConfirmEmailOtpSection = () => {
  const userData = useSelector(selectTask);
  const navigate = useNavigateToDirectory();
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    if (value.length === 1 && index < inputRefs.current.length - 1) {
      // Move to the next input
      inputRefs.current[index + 1].focus();
    } else if (value.length === 0 && index > 0) {
      // Move to the previous input if backspace
      inputRefs.current[index - 1].focus();
    }
  };

  const handleContinue = () => {
    const otp = inputRefs.current.map((input) => input.value).join("");
    const correctOtp = "1234"; // Replace with dynamic OTP logic if available

    if (otp === correctOtp) {
      navigate("pan-details"); // Adjust based on your next step
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid OTP",
        text: "Please check the OTP and try again.",
      });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.imageColumn}>
            <figure>
              <img src={image} alt="Man with Paper Plane" />
            </figure>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.formContainer}>
              <div className={styles.formContent}>
                <h2>Confirm Email OTP</h2>
                <div className={styles.sentTo}>
                  <label>Sent to {userData?.questions?.Email_ID}</label>
                </div>
                <div className={styles.otpInputs}>
                  {[0, 1, 2, 3].map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      ref={(el) => (inputRefs.current[index] = el)}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  ))}
                </div>
                <div className={styles.otpInfo}>
                  <label>
                    Your OTP is <strong>1234</strong>
                  </label>
                </div>
                <button
                  type="button"
                  className={styles.submitButton}
                  onClick={handleContinue}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaConfirmEmailOtpSection;
