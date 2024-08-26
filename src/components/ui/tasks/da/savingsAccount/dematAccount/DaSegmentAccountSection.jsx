import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import styles from "./DaSegmentAccountSection.module.css";
import image from "../assets/segment-account-graphics.svg";
import { selectTask } from "../../../../../../redux/features/user/userTaskSlice";
import useNavigateToDirectory from "../../../../../../hooks/useNavigateToDirectory";

const DaSegmentAccountSection = () => {
  const userData = useSelector(selectTask);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigateToDirectory();

  const onSubmit = (data) => {
    const selectedAccounts = new Set(
      Object.keys(data).filter((key) => data[key])
    );

    const dbAccounts = new Set(
      userData?.questions?.Type_of_Account?.split(", ").map((item) =>
        item.trim()
      )
    );

    if (
      selectedAccounts.size === dbAccounts.size &&
      [...selectedAccounts].every((value) => dbAccounts.has(value))
    ) {
      navigate("digilocker");
    } else {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please select the correct account types.",
      });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.imageColumn}>
            <figure>
              <img src={image} alt="Segment Account Graphics" />
            </figure>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.stepInfo}>
              <span>Step 2 of 7</span>
            </div>
            <div className={styles.formContainer}>
              <div className={styles.formContent}>
                <h2>Segment Account Opening</h2>
                <label className={styles.subtitle}>
                  Buy and sell shares, mutual funds, and derivatives on the NSE
                  and BSE.
                </label>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.checkboxGroup}>
                    <div className={styles.checkbox}>
                      <input type="checkbox" {...register("Equity")} />
                      <label>Equity</label>
                    </div>
                    <div className={styles.checkbox}>
                      <input type="checkbox" {...register("Debt")} />
                      <label>Debt</label>
                    </div>
                    <div className={styles.checkbox}>
                      <input type="checkbox" {...register("FO")} />
                      <label>F&amp;O</label>
                    </div>
                    <div className={styles.checkbox}>
                      <input type="checkbox" {...register("Currency")} />
                      <label>Currency</label>
                    </div>
                    <div className={styles.checkbox}>
                      <input type="checkbox" {...register("Commodity")} />
                      <label>Commodity</label>
                    </div>
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

export default DaSegmentAccountSection;
