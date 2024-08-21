import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { selectTask } from "../../../../../redux/features/user/userTaskSlice";
import useNavigateToDirectory from "../../../../../hooks/useNavigateToDirectory";
import styles from "./DANomineeDetails.module.css";
import image from "./assets/step-five-graphics.svg";

// Function to process and normalize the full address for comparison
const normalizeAddress = (address) => {
  return address.replace(/\s+/g, "").toLowerCase();
};

const DANomineeDetails = () => {
  const { questions } = useSelector(selectTask);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigateToDirectory();

  const onSubmit = (data) => {
    // Combine all address fields from the form
    const formAddress = `${data.Address},${data.City_Village},${data.District},${data.State},${data.PIN_Code}`;

    // Normalize both the form address and the database address
    const normalizedFormAddress = normalizeAddress(formAddress);
    const normalizedDbAddress = normalizeAddress(questions.Nominee_Address);

    // Validate all inputs
    const isValid =
      data.nominee_Name === questions.Nominee_Name &&
      data.nominee_Relationship === questions.Nominee_Relationship &&
      normalizedFormAddress === normalizedDbAddress;

    if (isValid) {
      navigate("professional-details");
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
              <img src={image} alt="Step Five Graphics" />
            </figure>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.formContainer}>
              <div className={styles.formContent}>
                <h2>Add Nominee Details</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.formGroup}>
                    <label>
                      Nominee's Name <em>*</em>
                    </label>
                    <input
                      name="nominee_Name"
                      type="text"
                      placeholder="Enter Name"
                      maxLength="20"
                      autoComplete="off"
                      {...register("nominee_Name", { required: true })}
                    />
                    {errors.nominee_Name && (
                      <span className="text-danger">
                        Nominee's Name is required
                      </span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      Relationship with the applicant <em>*</em>
                    </label>
                    <select
                      aria-label="Select"
                      {...register("nominee_Relationship", { required: true })}
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
                    {errors.nominee_Relationship && (
                      <span className="text-danger">
                        Relationship is required
                      </span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      Date of Birth <em>*</em>
                    </label>
                    <div className={styles.dateRow}>
                      <input
                        type="number"
                        placeholder="DD"
                        maxLength="2"
                        {...register("Day", { required: true })}
                      />
                      <input
                        type="number"
                        placeholder="MM"
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
                      Address <em>*</em>
                    </label>
                    <textarea
                      name="Address"
                      placeholder="Enter Address"
                      rows="3"
                      {...register("Address", { required: true })}
                    ></textarea>
                    {errors.Address && (
                      <span className="text-danger">Address is required</span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      City/Village <em>*</em>
                    </label>
                    <input
                      name="City_Village"
                      type="text"
                      placeholder="Enter City/Village Name"
                      maxLength="35"
                      autoComplete="off"
                      {...register("City_Village", { required: true })}
                    />
                    {errors.City_Village && (
                      <span className="text-danger">
                        City/Village is required
                      </span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      District <em>*</em>
                    </label>
                    <input
                      name="District"
                      type="text"
                      placeholder="Enter District Name"
                      maxLength="35"
                      autoComplete="off"
                      {...register("District", { required: true })}
                    />
                    {errors.District && (
                      <span className="text-danger">District is required</span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      State <em>*</em>
                    </label>
                    <input
                      name="State"
                      type="text"
                      placeholder="Enter State Name"
                      maxLength="35"
                      autoComplete="off"
                      {...register("State", { required: true })}
                    />
                    {errors.State && (
                      <span className="text-danger">State is required</span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      PIN Code <em>*</em>
                    </label>
                    <input
                      name="PIN_Code"
                      type="text"
                      placeholder="Enter PIN Code"
                      maxLength="6"
                      autoComplete="off"
                      {...register("PIN_Code", { required: true })}
                    />
                    {errors.PIN_Code && (
                      <span className="text-danger">PIN Code is required</span>
                    )}
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

export default DANomineeDetails;
