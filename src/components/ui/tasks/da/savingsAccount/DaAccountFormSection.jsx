import { useSelector } from "react-redux";
import styles from "./DaAccountFormSection.module.css";
import image from "./assets/step-one-graphics.svg";
import { selectTask } from "../../../../../redux/features/user/userTaskSlice";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const DaAccountFormSection = () => {
  const task = useSelector(selectTask);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const isValid =
      data.Mobile_No === task?.questions?.Mobile_No &&
      data.Email_ID === task?.questions?.Email_ID &&
      data.PAN === task?.questions?.PAN &&
      data.Aadhaar_No === task?.questions?.Aadhaar_No.replace(/\s+/g, "");

    if (isValid) {
      navigate("otp");
    } else {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please check your inputs and try again.",
      });
    }
  };

  const handleAadhaarPaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("Text").replace(/\s+/g, "");
    setValue("Aadhaar_No", pastedData);
  };

  const handleAadhaarChange = (e) => {
    const trimmedValue = e.target.value.replace(/\s+/g, "");
    setValue("Aadhaar_No", trimmedValue);
  };

  return (
    <section className={`${styles.section} h-100`}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.imageColumn}>
            <figure>
              <img src={image} alt="Step One Graphics" />
            </figure>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.formContainer}>
              <div className={styles.formContent}>
                <h2>Take the first step!</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.formGroup}>
                    <label>
                      Mobile Number <em>*</em>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Phone Number"
                      maxLength="10"
                      {...register("Mobile_No", { required: true })}
                    />
                    {errors.Mobile_No && (
                      <span className="text-danger">
                        Mobile Number is required
                      </span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      Email <em>*</em>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      maxLength="35"
                      {...register("Email_ID", { required: true })}
                    />
                    {errors.Email_ID && (
                      <span className="text-danger">Email is required</span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      PAN <em>*</em>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter PAN"
                      maxLength="10"
                      {...register("PAN", { required: true })}
                    />
                    {errors.PAN && (
                      <span className="text-danger">PAN is required</span>
                    )}
                  </div>
                  <div className={styles.formGroup}>
                    <label>
                      Enter Aadhaar Number <em>*</em>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter 12 digit Aadhaar number"
                      maxLength="12"
                      {...register("Aadhaar_No", { required: true })}
                      onChange={handleAadhaarChange} // Handle input change to remove whitespace
                      onPaste={handleAadhaarPaste} // Handle paste event to remove whitespace
                    />
                    {errors.Aadhaar_No && (
                      <span className="text-danger">
                        Aadhaar Number is required
                      </span>
                    )}
                  </div>
                  <button type="submit">Get OTP to verify Aadhaar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaAccountFormSection;
