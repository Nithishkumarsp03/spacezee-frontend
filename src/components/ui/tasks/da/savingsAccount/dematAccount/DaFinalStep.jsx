import React, { useState } from "react";
import { FaPencilAlt, FaTrash, FaUserCircle } from "react-icons/fa";
import styles from "./DaFinalStep.module.css";
import { selectTask } from "../../../../../../redux/features/user/userTaskSlice";
import { useSelector } from "react-redux";
import useNavigateToDirectory from "../../../../../../hooks/useNavigateToDirectory";

const DaFinalStep = () => {
  const [isCheckbox1Checked, setIsCheckbox1Checked] = useState(false);
  const [isCheckbox2Checked, setIsCheckbox2Checked] = useState(false);
  const [isCheckbox3Checked, setIsCheckbox3Checked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userData = useSelector(selectTask);
  const navigate = useNavigateToDirectory();

  const allChecked =
    isCheckbox1Checked && isCheckbox2Checked && isCheckbox3Checked;

  const handleFinishClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleNext = () => {
    navigate("otp");
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.step}>Step 7 of 7</span>
        <div className={styles.scrollContainer}>
          <div className={styles.formWrapper}>
            <h2 className={styles.title}>Last Step!</h2>
            <div className={styles.instructionWrapper}>
              <label className={styles.instructionLabel}>
                <span className={styles.instructionText}>
                  The last step is to digitally sign your application form(s).
                  We will email you your login credentials once your forms are
                  verified.
                </span>
              </label>
            </div>
            <form className={styles.form}>
              <div className={styles.formSection}>
                <h3 className={styles.sectionTitle}>
                  {userData?.questions?.Type_of_Account}
                </h3>
                <div className={styles.userWrapper}>
                  <div className={styles.userInfo}>
                    <FaUserCircle className={styles.userIcon} />
                    <span className={styles.userName}>
                      {userData?.questions?.Name}
                    </span>
                  </div>
                  <button type="button" className={styles.iconButton}>
                    <FaPencilAlt />
                  </button>
                  <button type="button" className={styles.iconButton}>
                    <FaTrash />
                  </button>
                </div>
                <p className={styles.sectionDescription}>
                  This will be your account to buy and sell shares, mutual
                  funds, and derivatives on the NSE and BSE.
                </p>
                <p className={styles.note}>
                  Don't have Aadhaar and mobile linked to eSign? Download the{" "}
                  <a href="#" className={styles.link}>
                    Equity form
                  </a>{" "}
                  and courier it to us.{" "}
                  <a href="#" className={styles.link}>
                    Learn more
                  </a>
                </p>
              </div>
              <div className={styles.buttonGroup}>
                <button type="button" className={styles.skipButton}>
                  Skip
                </button>
                <button
                  type="button"
                  className={styles.finishButton}
                  onClick={handleFinishClick}
                >
                  Finish
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="modal show"
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Terms and conditions</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox1"
                    checked={isCheckbox1Checked}
                    onChange={() => setIsCheckbox1Checked(!isCheckbox1Checked)}
                  />
                  <label className="form-check-label" htmlFor="checkbox1">
                    I confirm that{" "}
                    <a href="#" className={styles.link}>
                      {userData?.questions?.Email_ID}
                    </a>{" "}
                    belongs to me and verified it with Nergy.
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox2"
                    checked={isCheckbox2Checked}
                    onChange={() => setIsCheckbox2Checked(!isCheckbox2Checked)}
                  />
                  <label className="form-check-label" htmlFor="checkbox2">
                    I agree to the{" "}
                    <a href="#" className={styles.link}>
                      Terms of Service
                    </a>{" "}
                    and Privacy Policy Nergy
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkbox3"
                    checked={isCheckbox3Checked}
                    onChange={() => setIsCheckbox3Checked(!isCheckbox3Checked)}
                  />
                  <label className="form-check-label" htmlFor="checkbox3">
                    I agree to do eKYC to{" "}
                    <a href="#" className={styles.link}>
                      eSign Nergy permissions
                    </a>{" "}
                    document to get started.
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={!allChecked}
                  onClick={handleNext}
                >
                  Sign Now
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DaFinalStep;
