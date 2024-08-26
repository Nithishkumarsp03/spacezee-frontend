import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import styles from "./DaAccountEmailSection.module.css";
import image from "../assets/step-two-graphics.svg";
import { selectTask } from "../../../../../../redux/features/user/userTaskSlice";
import useNavigateToDirectory from "../../../../../../hooks/useNavigateToDirectory";

const DaAccountEmailSection = () => {
  const userData = useSelector(selectTask);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigateToDirectory();

  const onSubmit = (data) => {
    const normalizedDataEmail = data.Email_ID.trim().toLowerCase();
    const isValid =
      normalizedDataEmail ===
      userData?.questions?.Email_ID.trim().toLowerCase();

    if (isValid) {
      navigate("confirm-email-otp"); // Replace with the appropriate next step in your flow
    } else {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please enter a valid email address and try again.",
      });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.imageColumn}>
            <figure>
              <img src={image} alt="Step Two Graphics" />
            </figure>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.formContainer}>
              <div className={styles.formContent}>
                <h2>What’s your email?</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.formGroup}>
                    <label>Email</label>
                    <input
                      name="Email_ID"
                      type="email"
                      maxLength="35"
                      placeholder="Enter Email"
                      autoComplete="off"
                      {...register("Email_ID", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      })}
                      className={errors.Email_ID ? styles.inputError : ""}
                    />
                    {errors.Email_ID && (
                      <div className={styles.errorText}>
                        <img
                          src="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e"
                          alt="Error"
                          height="16"
                          width="16"
                        />
                        Enter a valid email address
                      </div>
                    )}
                  </div>
                  <div className={styles.infoText}>
                    <label>
                      <span>You will receive an OTP on your email.</span>
                    </label>
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

export default DaAccountEmailSection;
