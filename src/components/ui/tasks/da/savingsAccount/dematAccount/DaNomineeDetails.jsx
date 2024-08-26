import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import styles from "./DaNomineeDetails.module.css";
import { selectTask } from "../../../../../../redux/features/user/userTaskSlice";
import { useNavigate } from "react-router-dom";
import useNavigateToDirectory from "../../../../../../hooks/useNavigateToDirectory";

const DaNomineeDetails = () => {
  const userData = useSelector(selectTask);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigateToDirectory();

  const normalizeText = (text) => {
    return text.trim().toLowerCase().replace(/\s+/g, "");
  };

  const formatDob = (day, month, year) => {
    return `${day}-${month}-${year}`;
  };

  const normalizeAddress = (address) => {
    return address.replace(/\s+/g, "").toLowerCase();
  };

  const onSubmit = (data) => {
    const formAddress = `${data.address},${data.city},${data.district},${data.state},${data.pincode}`;
    const normalizedFormAddress = normalizeAddress(formAddress);
    const normalizedDbAddress = normalizeAddress(
      userData?.questions?.Nominee_Address
    );
    const isValid =
      normalizeText(data.nominee_Name) ===
        normalizeText(userData?.questions?.Nominee_Name) &&
      normalizeText(data.relationship) ===
        normalizeText(userData?.questions?.Nominee_Relationship) &&
      normalizeText(formatDob(data.day, data.month, data.year)) ===
        normalizeText(
          formatDob(
            new Date(userData?.questions?.Nominee_Date_of_Birth).getDate(),
            new Date(userData?.questions?.Nominee_Date_of_Birth).getMonth() + 1,
            new Date(userData?.questions?.Nominee_Date_of_Birth).getFullYear()
          )
        ) &&
      normalizedFormAddress === normalizedDbAddress;

    if (isValid) {
      navigate("last-step");
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
      <div className={styles.wrapper}>
        <span className={styles.step}>Step 7 of 7</span>
        <div className={styles.scrollContainer}>
          <div className={styles.formWrapper}>
            <h2 className={styles.title}>Add Nominee Details</h2>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Nominee Name<em className={styles.required}>*</em>
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    name="nominee_Name"
                    type="text"
                    maxLength="30"
                    placeholder="Enter Name"
                    autoComplete="off"
                    {...register("nominee_Name", { required: true })}
                    className={styles.input}
                  />
                  {errors.nominee_Name && (
                    <div className={styles.error}>Nominee name is required</div>
                  )}
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Relationship with the Applicant
                  <em className={styles.required}>*</em>
                </label>
                <div className={styles.inputWrapper}>
                  <select
                    aria-label="Select"
                    {...register("relationship", { required: true })}
                    className={styles.select}
                  >
                    <option value="">Select</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Daughter">Daughter</option>
                    <option value="Son">Son</option>
                    <option value="Husband">Husband</option>
                    <option value="Wife">Wife</option>
                    <option value="Brother">Brother</option>
                    <option value="Sister">Sister</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.relationship && (
                    <div className={styles.error}>Relationship is required</div>
                  )}
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Date of Birth <em className={styles.required}>*</em>
                </label>
                <div className={styles.dobGroup}>
                  <div className={styles.dobWrapper}>
                    <input
                      name="day"
                      type="number"
                      maxLength="2"
                      placeholder="DD"
                      autoComplete="off"
                      {...register("day", { required: true })}
                      className={styles.dobInput}
                    />
                    {errors.day && (
                      <div className={styles.error}>Day is required</div>
                    )}
                  </div>
                  <div className={styles.dobWrapper}>
                    <input
                      name="month"
                      type="number"
                      maxLength="2"
                      placeholder="MM"
                      autoComplete="off"
                      {...register("month", { required: true })}
                      className={styles.dobInput}
                    />
                    {errors.month && (
                      <div className={styles.error}>Month is required</div>
                    )}
                  </div>
                  <div className={styles.dobWrapper}>
                    <input
                      name="year"
                      type="text"
                      maxLength="4"
                      placeholder="YYYY"
                      autoComplete="off"
                      {...register("year", { required: true })}
                      className={styles.dobInput}
                    />
                    {errors.year && (
                      <div className={styles.error}>Year is required</div>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Address <em className={styles.required}>*</em>
                </label>
                <textarea
                  name="address"
                  placeholder="Enter Address"
                  rows="3"
                  {...register("address", { required: true })}
                  className={styles.textarea}
                ></textarea>
                {errors.address && (
                  <div className={styles.error}>Address is required</div>
                )}
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  City/Village <em className={styles.required}>*</em>
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    name="city"
                    type="text"
                    maxLength="35"
                    placeholder="Enter City/Village Name"
                    autoComplete="off"
                    {...register("city", { required: true })}
                    className={styles.input}
                  />
                  {errors.city && (
                    <div className={styles.error}>City/Village is required</div>
                  )}
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  District <em className={styles.required}>*</em>
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    name="district"
                    type="text"
                    maxLength="35"
                    placeholder="Enter District Name"
                    autoComplete="off"
                    {...register("district", { required: true })}
                    className={styles.input}
                  />
                  {errors.district && (
                    <div className={styles.error}>District is required</div>
                  )}
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  State <em className={styles.required}>*</em>
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    name="state"
                    type="text"
                    maxLength="35"
                    placeholder="Enter State Name"
                    autoComplete="off"
                    {...register("state", { required: true })}
                    className={styles.input}
                  />
                  {errors.state && (
                    <div className={styles.error}>State is required</div>
                  )}
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  PIN Code <em className={styles.required}>*</em>
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    name="pincode"
                    type="text"
                    maxLength="6"
                    placeholder="Enter PIN Code"
                    autoComplete="off"
                    {...register("pincode", { required: true })}
                    className={styles.input}
                  />
                  {errors.pincode && (
                    <div className={styles.error}>PIN Code is required</div>
                  )}
                </div>
              </div>
              <button type="submit" className={styles.submitBtn}>
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaNomineeDetails;
