import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import styles from "./DaBankAccountLink.module.css";
import { selectTask } from "../../../../../../redux/features/user/userTaskSlice";
import useNavigateToDirectory from "../../../../../../hooks/useNavigateToDirectory";

const DaBankAccountLink = () => {
  const userData = useSelector(selectTask);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigateToDirectory();

  const [checkboxes, setCheckboxes] = useState({
    checkbox1: true,
    checkbox2: true,
    checkbox3: true,
  });

  const normalizeText = (text) => {
    return text.trim().toLowerCase();
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const onSubmit = (data) => {
    const isValid =
      normalizeText(data.branch_Ifsc) ===
        normalizeText(userData?.questions?.IFSC_Code) &&
      normalizeText(data.branch_Micr) ===
        normalizeText(userData?.questions?.Branch_MICR_Code) &&
      normalizeText(data.account_Number) ===
        normalizeText(userData?.questions?.Account_Number) &&
      normalizeText(data.confirm_Account_Number) ===
        normalizeText(data.account_Number);

    if (isValid && Object.values(checkboxes).every(Boolean)) {
      navigate("documents"); // Replace with the appropriate next step in your flow
    } else {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please check your inputs and try again.",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.stepSection}>
        <span className={styles.step}>Step 3 of 7</span>
      </div>
      <div className={styles.scrollContainer}>
        <div className={styles.formWrapper}>
          <h2 className={styles.title}>Link Bank Account Using IFSC</h2>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Branch's IFSC</label>
              <div className={styles.inputWrapper}>
                <input
                  name="branch_Ifsc"
                  type="text"
                  maxLength="11"
                  className={styles.input}
                  placeholder="IFSC"
                  autoComplete="off"
                  {...register("branch_Ifsc", { required: true })}
                />
                {errors.branch_Ifsc && (
                  <div className={styles.error}>Branch IFSC is required</div>
                )}
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Branch MICR Code</label>
              <div className={styles.inputWrapper}>
                <input
                  name="branch_Micr"
                  type="text"
                  maxLength="9"
                  className={styles.input}
                  placeholder="MICR"
                  autoComplete="off"
                  {...register("branch_Micr", { required: true })}
                />
                {errors.branch_Micr && (
                  <div className={styles.error}>Branch MICR is required</div>
                )}
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Bank Account Number</label>
              <div className={styles.inputWrapper}>
                <input
                  name="account_Number"
                  type="text"
                  maxLength="35"
                  className={styles.input}
                  placeholder="e.g. 4224 5553 2223 55"
                  autoComplete="off"
                  {...register("account_Number", { required: true })}
                />
                {errors.account_Number && (
                  <div className={styles.error}>
                    Bank account number is required
                  </div>
                )}
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Confirm Bank Account Number
              </label>
              <div className={styles.inputWrapper}>
                <input
                  name="confirm_Account_Number"
                  type="text"
                  maxLength="35"
                  className={styles.input}
                  placeholder="e.g. 4224 5553 2223 55"
                  autoComplete="off"
                  {...register("confirm_Account_Number", { required: true })}
                />
                {errors.confirm_Account_Number && (
                  <div className={styles.error}>
                    Confirm bank account number is required
                  </div>
                )}
              </div>
            </div>
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={!Object.values(checkboxes).every(Boolean)}
            >
              Continue
            </button>
            <div className={styles.checkboxSection}>
              <div className={styles.checkboxWrapper}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  name="checkbox1"
                  checked={checkboxes.checkbox1}
                  onChange={handleCheckboxChange}
                />
                <label className={styles.checkboxLabel}>
                  My sole country of tax residency is India. I/We have
                  understood the information requirements of this form (read
                  along with the FATCA & CRS Instructions) and hereby confirm
                  that the information provided by me/us on this form is true,
                  correct, and complete. I/We also confirm that I/We have read
                  and understood the FATCA & CRS Terms and Conditions below and
                  hereby accept the same.
                </label>
              </div>
              <div className={styles.checkboxWrapper}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  name="checkbox2"
                  checked={checkboxes.checkbox2}
                  onChange={handleCheckboxChange}
                />
                <label className={styles.checkboxLabel}>
                  I authorize Nergy Limited to operate the movement of
                  securities from my demat account for any obligation created at
                  the exchange through my order(s)/trade(s) as per the Terms &
                  Conditions of the Online Delivery Instruction.
                </label>
              </div>
              <div className={styles.checkboxWrapper}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  name="checkbox3"
                  checked={checkboxes.checkbox3}
                  onChange={handleCheckboxChange}
                />
                <label className={styles.checkboxLabel}>
                  I confirm and understand that my name as per the IT Department
                  will be taken as my default Nergy account name, in case there
                  is any mismatch of my name as per the IT department and my
                  name as per the KRA database/Aadhaar/Bank account. I further
                  confirm that the linked bank accounts, Aadhaar, and PAN belong
                  to me.
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DaBankAccountLink;
