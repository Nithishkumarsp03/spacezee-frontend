import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { selectTask } from "../../../../../redux/features/user/userTaskSlice";
import styles from "./DaAccountPersonalDetails.module.css";
import image from "./assets/step-three-graphics.svg";
import useNavigateToDirectory from "../../../../../hooks/useNavigateToDirectory";

// Function to convert month number to month name
const getMonthName = (monthNumber) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[monthNumber - 1];
};

const DaAccountPersonalDetails = () => {
  const { questions } = useSelector(selectTask);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigateToDirectory();

  const onSubmit = (data) => {
    // Convert month number to full month name
    const monthName = getMonthName(Number(data.Month));

    // Combine day, month name, and year into a single date string
    const enteredDateOfBirth = `${monthName} ${data.Day}, ${data.Year}`;
    // Validate all inputs against the `questions` object
    const isValid =
      data.Name === questions.Name &&
      enteredDateOfBirth === questions.Date_of_Birth &&
      data.Gender === questions.Gender &&
      data.Marital_Status === questions.Marital_Status &&
      data.Name_of_Spouse === questions.Name_of_Spouse &&
      data.Name_of_Father === questions.Name_of_Father &&
      data.Name_of_Mother === questions.Name_of_Mother;

    if (isValid) {
      navigate("address-details");
      // console.log("running");
    } else {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please check your inputs and try again.",
      });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.imageColumn}>
            <figure>
              <img src={image} alt="Step Three Graphics" />
            </figure>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.formContainer}>
              <div className={styles.formContent}>
                <h2>Tell us about you!</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.formGroup}>
                    <label>
                      Name <em>*</em>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      maxLength="20"
                      {...register("Name", { required: true })}
                    />
                    {errors.Name && (
                      <span className="text-danger">Name is required</span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      Date of Birth <em>*</em>
                    </label>
                    <div className={styles.dateRow}>
                      <input
                        type="text"
                        placeholder="DD"
                        maxLength="2"
                        {...register("Day", { required: true })}
                      />
                      <input
                        type="number"
                        placeholder="MM" // Month as number (e.g., 03)
                        maxLength="2"
                        {...register("Month", { required: true })}
                      />
                      <input
                        type="text"
                        placeholder="YYYY"
                        maxLength="4"
                        {...register("Year", { required: true })}
                      />
                      {errors.Day || errors.Month || errors.Year ? (
                        <span className="text-danger">
                          Date of Birth is required
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      Gender <em>*</em>
                    </label>
                    <select
                      aria-label="Select"
                      {...register("Gender", { required: true })}
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.Gender && (
                      <span className="text-danger">Gender is required</span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label>Student</label>
                    <div className={styles.radioGroup}>
                      <label>
                        <input
                          type="radio"
                          name="student"
                          value="Yes"
                          {...register("Student")}
                        />
                        Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="student"
                          value="No"
                          {...register("Student")}
                        />
                        No
                      </label>
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Marital Status</label>
                    <select
                      aria-label="Select"
                      {...register("Marital_Status", { required: true })}
                    >
                      <option value="">Select</option>
                      <option value="Unmarried">Unmarried</option>
                      <option value="Married">Married</option>
                    </select>
                    {errors.Marital_Status && (
                      <span className="text-danger">
                        Marital Status is required
                      </span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label>Name of Spouse</label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      maxLength="35"
                      {...register("Name_of_Spouse")}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Father’s Name</label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      maxLength="35"
                      {...register("Name_of_Father")}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Mother’s Name</label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      maxLength="35"
                      {...register("Name_of_Mother")}
                    />
                  </div>
                  <button type="submit">Continue</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaAccountPersonalDetails;
