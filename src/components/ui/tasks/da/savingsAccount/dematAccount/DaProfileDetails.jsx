import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import styles from "./DaProfileDetails.module.css";
import { selectTask } from "../../../../../../redux/features/user/userTaskSlice";
import { useNavigate } from "react-router-dom";

const DaProfileDetails = () => {
  const userData = useSelector(selectTask);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const normalizeText = (text) => {
    if (!text) return ""; // Handle undefined or null text
    return text.trim().toLowerCase();
  };

  const onSubmit = (data) => {
    const fatherNameMatch =
      normalizeText(data.father_Name_AccountHolder) ===
      normalizeText(userData?.questions?.Name_of_Father);
    const motherNameMatch =
      normalizeText(data.mothers_Name_AccountHolder) ===
      normalizeText(userData?.questions?.Name_of_Mother);
    const maritalStatusMatch =
      normalizeText(data.maritalStatus) ===
      normalizeText(userData?.questions?.maritalStatus);
    const annualIncomeMatch =
      data.annual_Income ===
      normalizeText(getIncomeRange(userData?.questions?.Gross_Annual_Income));
    const tradingExperienceMatch =
      normalizeText(data.trading_Experience) ===
      normalizeText(userData?.questions?.Trading_Experience);
    const fundSecurityPreferenceMatch =
      normalizeText(data.fund_Security_Preference) ===
      normalizeText(userData?.questions?.Fund_Security_Preference);
    const occupationMatch =
      normalizeText(data.occupation) ===
      normalizeText(userData?.questions?.Occupation);

    // console.log("Father Name Match:", fatherNameMatch);
    // console.log("Mother Name Match:", motherNameMatch);
    // console.log("Marital Status Match:", maritalStatusMatch);
    // console.log("Annual Income Match:", annualIncomeMatch);
    // console.log("Trading Experience Match:", tradingExperienceMatch);
    // console.log("Fund Security Preference Match:", fundSecurityPreferenceMatch);
    // console.log("Occupation Match:", occupationMatch);

    const isValid =
      fatherNameMatch &&
      motherNameMatch &&
      maritalStatusMatch &&
      annualIncomeMatch &&
      tradingExperienceMatch &&
      fundSecurityPreferenceMatch &&
      occupationMatch;

    if (isValid) {
      navigate("link-bank-account");
    } else {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please check your inputs and try again.",
      });
    }
  };

  const getIncomeRange = (income) => {
    const numericValue = parseInt(income.replace(/[^0-9]/g, ""), 10);
    if (numericValue <= 100000) {
      return "0 to ₹1,00,000";
    } else if (numericValue > 100000 && numericValue <= 500000) {
      return "More than ₹1,00,000 up to ₹5,00,000";
    } else if (numericValue > 500000) {
      return "₹5,00,000 and above";
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.step}>Step 3 of 7</span>
      <div className={styles.scrollContainer}>
        <div className={styles.formWrapper}>
          <h2 className={styles.title}>Your Profile</h2>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Father's Name</label>
              <div className={styles.inputWrapper}>
                <input
                  name="father_Name_AccountHolder"
                  type="text"
                  maxLength="20"
                  className={styles.input}
                  placeholder="Enter Name"
                  autoComplete="off"
                  {...register("father_Name_AccountHolder", { required: true })}
                />
                {errors.father_Name_AccountHolder && (
                  <div className={styles.error}>Father's name is required</div>
                )}
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Mother's Name</label>
              <div className={styles.inputWrapper}>
                <input
                  name="mothers_Name_AccountHolder"
                  type="text"
                  maxLength="20"
                  className={styles.input}
                  placeholder="Enter Name"
                  autoComplete="off"
                  {...register("mothers_Name_AccountHolder", {
                    required: true,
                  })}
                />
                {errors.mothers_Name_AccountHolder && (
                  <div className={styles.error}>Mother's name is required</div>
                )}
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Marital Status</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input
                    className={styles.radioInput}
                    type="radio"
                    name="maritalStatus"
                    value="Single"
                    {...register("maritalStatus", { required: true })}
                  />
                  Single
                </label>
                <label className={styles.radioLabel}>
                  <input
                    className={styles.radioInput}
                    type="radio"
                    name="maritalStatus"
                    value="Married"
                    {...register("maritalStatus", { required: true })}
                  />
                  Married
                </label>
                {errors.maritalStatus && (
                  <div className={styles.error}>Marital status is required</div>
                )}
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Annual Income</label>
              <div className={styles.inputWrapper}>
                <select
                  className={styles.select}
                  aria-label="Select"
                  {...register("annual_Income", { required: true })}
                >
                  <option value="">Select</option>
                  <option value="0 to ₹1,00,000">0 to ₹1,00,000</option>
                  <option value="More than ₹1,00,000 up to ₹5,00,000">
                    More than ₹1,00,000 up to ₹5,00,000
                  </option>
                  <option value="₹5,00,000 and above">
                    ₹5,00,000 and above
                  </option>
                </select>
                {errors.annual_Income && (
                  <div className={styles.error}>Annual income is required</div>
                )}
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Trading Experience</label>
              <div className={styles.inputWrapper}>
                <select
                  className={styles.select}
                  aria-label="Select"
                  {...register("trading_Experience", { required: true })}
                >
                  <option value="">Select</option>
                  <option value="0 to 1 year">0 to 1 year</option>
                  <option value="More than 1 year up to 5 years">
                    More than 1 year up to 5 years
                  </option>
                  <option value="More than 5 years">More than 5 years</option>
                </select>
                {errors.trading_Experience && (
                  <div className={styles.error}>
                    Trading experience is required
                  </div>
                )}
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>
                Funds and Securities Preference
              </label>
              <div className={styles.inputWrapper}>
                <select
                  className={styles.select}
                  aria-label="Select"
                  {...register("fund_Security_Preference", { required: true })}
                >
                  <option value="">Select</option>
                  <option value="Once every calendar quarter">
                    Once every calendar quarter
                  </option>
                  <option value="Once every calendar month">
                    Once every calendar month
                  </option>
                </select>
                {errors.fund_Security_Preference && (
                  <div className={styles.error}>
                    Funds and securities preference is required
                  </div>
                )}
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Occupation</label>
              <div className={styles.inputWrapper}>
                <select
                  className={styles.select}
                  aria-label="Select"
                  {...register("occupation", { required: true })}
                >
                  <option value="">Select</option>
                  <option value="Salaried">Salaried</option>
                  <option value="Student">Student</option>
                  <option value="Retired">Retired</option>
                  <option value="Sole Proprietorship">
                    Sole Proprietorship
                  </option>
                  <option value="Partnership/Company">
                    Partnership/Company
                  </option>
                  <option value="Self Employed Professional">
                    Self Employed Professional
                  </option>
                  <option value="Home Maker">Home Maker</option>
                </select>
                {errors.occupation && (
                  <div className={styles.error}>Occupation is required</div>
                )}
              </div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.switchGroup}>
                <label className={styles.switchLabel}>
                  Are you a politically exposed person?
                </label>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    className={styles.switchInput}
                    {...register("politically_Exposed_Person")}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>
            <button type="submit" className={styles.submitBtn}>
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DaProfileDetails;
