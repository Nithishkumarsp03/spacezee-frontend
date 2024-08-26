import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import styles from "./DaPanDetailsSection.module.css";
import image from "../assets/man-carrying-papers-graphics.svg";
import { selectTask } from "../../../../../../redux/features/user/userTaskSlice";
import useNavigateToDirectory from "../../../../../../hooks/useNavigateToDirectory";

const DaPanDetailsSection = () => {
  const userData = useSelector(selectTask);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigateToDirectory();

  const formatDateOfBirth = (dobString) => {
    const [month, day, year] = dobString.split(" ");
    const monthMap = {
      January: "01",
      February: "02",
      March: "03",
      April: "04",
      May: "05",
      June: "06",
      July: "07",
      August: "08",
      September: "09",
      October: "10",
      November: "11",
      December: "12",
    };
    // Return formatted date and ensure no extra characters
    return `${day.replace(",", "").padStart(2, "0")}-${
      monthMap[month]
    }-${year}`;
  };

  const onSubmit = (data) => {
    const normalizedPan = data.PAN.trim().toUpperCase();
    const inputDob = `${data.DOB_Day.padStart(
      2,
      "0"
    )}-${data.DOB_Month.padStart(2, "0")}-${data.DOB_Year}`;

    const dbDob = formatDateOfBirth(userData?.questions?.Date_of_Birth);

    const isValidPan = normalizedPan === userData?.questions?.PAN;
    const isValidDob = inputDob === dbDob;

    if (isValidPan && isValidDob) {
      navigate("segments"); // Replace with the appropriate next step in your flow
    } else {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please enter valid PAN and Date of Birth.",
      });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.imageColumn}>
            <figure>
              <img src={image} alt="Man Carrying Papers" />
            </figure>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.stepInfo}>
              <span>Step 1 of 7</span>
            </div>
            <div className={styles.formContainer}>
              <div className={styles.formContent}>
                <h2>Let’s start with your PAN</h2>
                <label className={styles.subtitle}>
                  or track your existing application.
                </label>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.inputGroup}>
                    <label>
                      PAN <em>*</em>
                    </label>
                    <input
                      type="text"
                      maxLength="10"
                      placeholder="Enter PAN"
                      {...register("PAN", {
                        required: true,
                        pattern: /^[A-Z]{5}[0-9]{4}[A-Z]$/,
                      })}
                      className={errors.PAN ? styles.inputError : ""}
                    />
                    {errors.PAN && (
                      <div className={styles.errorText}>Enter a valid PAN</div>
                    )}
                  </div>
                  <div className={styles.inputGroup}>
                    <label>
                      Date of Birth <em>*</em>
                    </label>
                    <div className={styles.dobInputs}>
                      <input
                        type="number"
                        maxLength="2"
                        placeholder="DD"
                        {...register("DOB_Day", {
                          required: true,
                          min: 1,
                          max: 31,
                        })}
                        className={errors.DOB_Day ? styles.inputError : ""}
                      />
                      <input
                        type="number"
                        maxLength="2"
                        placeholder="MM"
                        {...register("DOB_Month", {
                          required: true,
                          min: 1,
                          max: 12,
                        })}
                        className={errors.DOB_Month ? styles.inputError : ""}
                      />
                      <input
                        type="text"
                        maxLength="4"
                        placeholder="YYYY"
                        {...register("DOB_Year", {
                          required: true,
                          minLength: 4,
                          maxLength: 4,
                        })}
                        className={errors.DOB_Year ? styles.inputError : ""}
                      />
                    </div>
                    {errors.DOB_Day || errors.DOB_Month || errors.DOB_Year ? (
                      <div className={styles.errorText}>
                        Enter a valid Date of Birth
                      </div>
                    ) : null}
                  </div>
                  <button type="submit" className={styles.submitButton}>
                    Continue
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaPanDetailsSection;
