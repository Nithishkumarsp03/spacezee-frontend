import React, { useState } from "react";
import styles from "./DaDocumentUpload.module.css";
import useNavigateToDirectory from "../../../../../../hooks/useNavigateToDirectory";

const DaDocumentUpload = () => {
  const [incomeProofFile, setIncomeProofFile] = useState(null);
  const [incomeProofType, setIncomeProofType] = useState("");
  const [signatureFile, setSignatureFile] = useState(null);
  const [panFile, setPanFile] = useState(null);
  const navigate = useNavigateToDirectory();
  const handleFileChange = (event, setFile) => {
    setFile(event.target.files[0]);
  };

  const handleSelectChange = (event) => {
    setIncomeProofType(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("add-nominees");
  };

  return (
    <div className={styles.container}>
      <div className={styles.stepSection}>
        <span className={styles.step}>Step 6 of 7</span>
      </div>
      <div className={styles.scrollContainer}>
        <div className={styles.formWrapper}>
          <h2 className={styles.title}>Upload Documents</h2>
          <div className={styles.instruction}>
            <label className={styles.instructionLabel}>
              <span>
                For scans, a photo taken on your mobile phone is sufficient.
              </span>
            </label>
          </div>
          <form className={styles.form}>
            <div className={styles.uploadSection}>
              <h3 className={styles.uploadTitle}>Income Proof (Optional)</h3>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Upload</label>
                <label className={styles.fileInput}>
                  <span>Choose file</span>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, setIncomeProofFile)}
                    style={{ display: "none" }}
                  />
                </label>
                <div className={styles.error}></div>
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Select Proof Type</label>
                <select
                  className={styles.select}
                  aria-label="Select"
                  value={incomeProofType}
                  onChange={handleSelectChange}
                >
                  <option value="">Select</option>
                  <option value="Pay Stubs or Salary Slips">
                    Pay Stubs or Salary Slips
                  </option>
                  <option value="Tax Returns">Tax Returns</option>
                  <option value="W-2 Forms">W-2 Forms</option>
                  <option value="Bank Statements">Bank Statements</option>
                  <option value="Employment Verification Letter">
                    Employment Verification Letter
                  </option>
                  <option value="Profit and Loss Statements">
                    Profit and Loss Statements
                  </option>
                  <option value="Rental Income Documents">
                    Rental Income Documents
                  </option>
                  <option value="Social Security Benefit Statements">
                    Social Security Benefit Statements
                  </option>
                  <option value="Investment Income Statements">
                    Investment Income Statements
                  </option>
                  <option value="Pension Statements">Pension Statements</option>
                </select>
              </div>
              <p className={styles.infoText}>
                Income proof is required if you want F&amp;O. It is not required
                if you just want to buy and sell equity stocks.
              </p>
            </div>

            <div className={styles.uploadSection}>
              <h3 className={styles.uploadTitle}>Signature</h3>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Upload</label>
                <label className={styles.fileInput}>
                  <span>Choose file</span>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, setSignatureFile)}
                    style={{ display: "none" }}
                  />
                </label>
                <div className={styles.error}></div>
              </div>
              <p className={styles.infoText}>
                Please sign on a blank paper with a pen and upload a photo of
                the same. Signatures using pencils, sketch pens, etc. are not
                accepted.
              </p>
            </div>

            <div className={styles.uploadSection}>
              <h3 className={styles.uploadTitle}>Copy of PAN</h3>
              <div className={styles.inputWrapper}>
                <label className={styles.inputLabel}>Upload</label>
                <label className={styles.fileInput}>
                  <span>Choose file</span>
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, setPanFile)}
                    style={{ display: "none" }}
                  />
                </label>
                <div className={styles.error}></div>
              </div>
              <p className={styles.infoText}>
                Upload a signed copy of your PAN card.
              </p>
            </div>

            <div className={styles.buttonGroup}>
              <button type="button" className={styles.backBtn}>
                Back
              </button>
              <button
                type="button"
                className={styles.submitBtn}
                onClick={handleSubmit}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DaDocumentUpload;
