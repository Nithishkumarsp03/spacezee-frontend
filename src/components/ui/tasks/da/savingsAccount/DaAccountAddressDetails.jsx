import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { selectTask } from "../../../../../redux/features/user/userTaskSlice";
import useNavigateToDirectory from "../../../../../hooks/useNavigateToDirectory";
import styles from "./DaAccountAddressDetails.module.css";
import image from "./assets/step-three-graphics.svg";

const DaAccountAddressDetails = () => {
  const { questions } = useSelector(selectTask);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigateToDirectory();

  const onSubmit = (data) => {
    // Validate all inputs against the `questions` object
    const normalizedDataAddress = data.Address.trim().toLowerCase();
    const normalizedQuestionAddress = questions.Address.trim().toLowerCase();
    const isValid =
      normalizedDataAddress === normalizedQuestionAddress &&
      data.City_Village === questions.City_Village &&
      data.District === questions.District &&
      data.State === questions.State &&
      Number(data.PIN_Code) === Number(questions.PIN_Code) &&
      data.Branch === questions.Branch;

    if (isValid) {
      navigate("nominee-details");
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
                <h2>Address details!</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.formGroup}>
                    <label>
                      Address Type <em>*</em>
                    </label>
                    <select
                      aria-label="Select"
                      {...register("Address_Type", { required: true })}
                    >
                      <option value="">Select</option>
                      <option value="Home">Home</option>
                      <option value="Office">Office</option>
                    </select>
                    {errors.Address_Type && (
                      <span className="text-danger">
                        Address Type is required
                      </span>
                    )}
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
                      placeholder="Enter City/Village"
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
                  <div className={styles.formGroup}>
                    <label>
                      Country Name <em>*</em>
                    </label>
                    <select aria-label="Select" disabled>
                      <option value="">Select</option>
                      <option value="India" selected>
                        India
                      </option>
                      {/* Add other countries as needed */}
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      Nearest Branch <em>*</em>
                    </label>
                    <input
                      name="Branch"
                      type="text"
                      placeholder="Enter Branch Name"
                      maxLength="35"
                      autoComplete="off"
                      {...register("Branch", { required: true })}
                    />
                    {errors.Branch && (
                      <span className="text-danger">Branch is required</span>
                    )}
                  </div>
                  <button type="submit">Continue</button>
                  <div className={styles.checkboxGroup}>
                    <input type="checkbox" checked />
                    <span>
                      My communication address is the same as my Aadhaar
                      address.
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaAccountAddressDetails;
