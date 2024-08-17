import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./DaDigiLockerSection.module.css";
import digilockerLogo from "../assets/digilocker-logo.png";
import captchaImg from "../assets/captcha-demo.png";

const DaDigiLockerSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentStep(1); // Reset to first step on close
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
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
                      />
                      <input
                        type="text"
                        maxLength="1"
                        className={styles.otpInput}
                      />
                      <input
                        type="text"
                        maxLength="1"
                        className={styles.otpInput}
                      />
                      <input
                        type="text"
                        maxLength="1"
                        className={styles.otpInput}
                      />
                    </div>
                  </div>
                  <p className={styles.otpInfo}>
                    Your OTP is <strong>2345</strong>
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
                    />
                  </div>
                  <p className={styles.pinInfo}>
                    Your Digital PIN is <strong>123456</strong>
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
                        Congratulations, <strong>Nitin Radhakrishnan!</strong>
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
                  <button type="button" className="btn btn-primary w-100">
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
