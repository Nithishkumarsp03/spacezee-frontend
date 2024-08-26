import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import styles from "./DaDigiLockerSection.module.css";
import digilockerLogo from "../assets/digilocker-logo.png";
import captchaImg from "../assets/captcha-demo.png";
import { selectTask } from "../../../../../../redux/features/user/userTaskSlice";
import useNavigateToDirectory from "../../../../../../hooks/useNavigateToDirectory";

const DaDigiLockerSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [otp, setOtp] = useState("");
  const [pin, setPin] = useState("");
  const navigate = useNavigateToDirectory();

  const userData = useSelector(selectTask);
  const fixedCaptcha = "PCGFH7";
  const fixedOtp = "2345";
  const fixedPin = "123456";

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentStep(1);
    setAadhaarNumber("");
    setCaptcha("");
    setOtp("");
    setPin("");
  };

  const handleAadhaarChange = (e) => {
    const sanitizedValue = e.target.value.replace(/\D/g, "");
    if (sanitizedValue.length <= 12) {
      setAadhaarNumber(sanitizedValue);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();

    const pastedData = e.clipboardData.getData("Text");

    const sanitizedValue = pastedData.replace(/\D/g, "");
    if (sanitizedValue.length <= 12) {
      setAadhaarNumber(sanitizedValue);
    } else {
      setAadhaarNumber(sanitizedValue.substring(0, 12));
    }
  };

  const validateAadhaar = () => {
    const dbAadhaar = userData?.questions?.Aadhaar_No.replace(/\s/g, "");
    const normalizedAadhaar = aadhaarNumber.replace(/\s/g, "");

    if (normalizedAadhaar.length !== 12 || isNaN(normalizedAadhaar)) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please enter a valid 12-digit Aadhaar number.",
      });
      return false;
    }
    if (normalizedAadhaar !== dbAadhaar) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Aadhaar number does not match our records.",
      });
      return false;
    }
    if (captcha !== fixedCaptcha) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Incorrect CAPTCHA. Please try again.",
      });
      return false;
    }
    return true;
  };

  const validateOtp = () => {
    if (otp !== fixedOtp) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Incorrect OTP. Please try again.",
      });
      return false;
    }
    return true;
  };

  const validatePin = () => {
    if (pin !== fixedPin) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Incorrect PIN. Please try again.",
      });
      return false;
    }
    return true;
  };

  const nextStep = () => {
    let isValid = false;
    if (currentStep === 1) isValid = validateAadhaar();
    else if (currentStep === 2) isValid = validateOtp();
    else if (currentStep === 3) isValid = validatePin();

    if (isValid) setCurrentStep(currentStep + 1);
  };

  const goToNext = () => {
    navigate("profile");
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.imageColumn}>
            <figure>
              <img
                src={digilockerLogo}
                alt="DigiLocker Logo"
                className={styles.digilockerLogo}
              />
            </figure>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.stepInfo}>
              <span>Step 2 of 7</span>
            </div>
            <div className={styles.formContainer}>
              <div className={styles.formContent}>
                <h3>Aadhaar KYC (DigiLocker)</h3>
                <div>
                  <p className={styles.description}>
                    Share your address-related information from your DigiLocker
                    account for KYC. Your Aadhaar number/copy will not be
                    stored. The Aadhaar and the PAN should belong to you, the
                    applicant.
                    <a href="#" className={styles.startOverLink}>
                      {" "}
                      If it does not, start over.
                    </a>
                  </p>
                  <button
                    type="button"
                    className={styles.continueButton}
                    onClick={openModal}
                  >
                    Continue to DigiLocker
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h5 className={styles.modalTitle}>DigiLocker Authentication</h5>
              <div
                type="button"
                className={styles.btnClose}
                onClick={closeModal}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className={styles.modalBody}>
              {currentStep === 1 && (
                <div className={styles.step}>
                  <img
                    src={digilockerLogo}
                    alt="DigiLocker"
                    className={styles.logo}
                  />
                  <p>
                    You are about to link your DigiLocker account with the Nergy
                    application. You will be signed up for a DigiLocker account
                    if it does not exist.
                  </p>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="aadhaarNumber" className="form-label">
                        Enter the Aadhaar Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="aadhaarNumber"
                        placeholder="Enter 12 digit Aadhaar number"
                        maxLength="12"
                        value={aadhaarNumber}
                        onChange={handleAadhaarChange}
                        onPaste={handlePaste}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="captcha" className="form-label">
                        Please enter the following text in the box below:
                      </label>
                      <div className="d-flex align-items-center">
                        <img
                          src={captchaImg}
                          alt="Captcha"
                          className={styles.captchaImage}
                        />
                        <input
                          type="text"
                          className="form-control ms-2"
                          id="captcha"
                          maxLength="6"
                          value={captcha}
                          onChange={(e) => setCaptcha(e.target.value)}
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary w-100"
                      onClick={nextStep}
                    >
                      Next
                    </button>
                  </form>
                </div>
              )}
              {currentStep === 2 && (
                <div className={styles.step}>
                  <img
                    src={digilockerLogo}
                    alt="DigiLocker"
                    className={styles.logo}
                  />
                  <p>UIDAI has sent a temporary OTP to your mobile number.</p>
                  <div className="mb-3">
                    <div className="d-flex gap-3 justify-content-center">
                      <input
                        type="text"
                        maxLength="1"
                        className={styles.otpInput}
                        value={otp[0] || ""}
                        onChange={(e) =>
                          setOtp(
                            otp.slice(0, 0) + e.target.value + otp.slice(1)
                          )
                        }
                      />
                      <input
                        type="text"
                        maxLength="1"
                        className={styles.otpInput}
                        value={otp[1] || ""}
                        onChange={(e) =>
                          setOtp(
                            otp.slice(0, 1) + e.target.value + otp.slice(2)
                          )
                        }
                      />
                      <input
                        type="text"
                        maxLength="1"
                        className={styles.otpInput}
                        value={otp[2] || ""}
                        onChange={(e) =>
                          setOtp(
                            otp.slice(0, 2) + e.target.value + otp.slice(3)
                          )
                        }
                      />
                      <input
                        type="text"
                        maxLength="1"
                        className={styles.otpInput}
                        value={otp[3] || ""}
                        onChange={(e) =>
                          setOtp(otp.slice(0, 3) + e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <p className={styles.otpInfo}>
                    Your OTP is <strong>{fixedOtp}</strong>
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary w-100"
                    onClick={nextStep}
                  >
                    Continue
                  </button>
                </div>
              )}
              {currentStep === 3 && (
                <div className={styles.step}>
                  <img
                    src={digilockerLogo}
                    alt="DigiLocker"
                    className={styles.logo}
                  />
                  <p>
                    A 6-digit PIN provides extra security to your account with
                    two-factor authentication. Don't disclose your security PIN
                    to anyone.
                  </p>
                  <div className="mb-3">
                    <label htmlFor="pin" className="form-label">
                      PIN
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="pin"
                      placeholder="6 Digit Security PIN*"
                      maxLength="6"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                    />
                  </div>
                  <p className={styles.pinInfo}>
                    Your Digital PIN is <strong>{fixedPin}</strong>
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary w-100"
                    onClick={nextStep}
                  >
                    Next
                  </button>
                </div>
              )}
              {currentStep === 4 && (
                <div className={styles.step}>
                  <img
                    src={digilockerLogo}
                    alt="DigiLocker"
                    className={styles.logo}
                  />
                  <div className={styles.congratulationsBox}>
                    <div className={styles.congratulationsText}>
                      <p>
                        Congratulations,{" "}
                        <strong>{userData?.questions?.Name}</strong>
                      </p>
                      <p>
                        Your DigiLocker account has been created and your
                        Aadhaar card has been downloaded to your DigiLocker
                        account.
                      </p>
                    </div>
                    <div className={styles.consentBox}>
                      <p>
                        You are providing your consent to share your Aadhaar
                        card from your DigiLocker account with Nergy.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary w-100"
                    onClick={goToNext}
                  >
                    Allow
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary w-100 mt-2"
                    onClick={closeModal}
                  >
                    Deny
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DaDigiLockerSection;
