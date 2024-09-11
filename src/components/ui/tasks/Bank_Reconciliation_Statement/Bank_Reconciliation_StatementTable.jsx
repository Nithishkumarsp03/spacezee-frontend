import React from "react";
import styles from "./Bank_Reconciliation_Statement.module.css";
import { useSelector } from "react-redux";
import { selectTask } from "../../../../redux/features/user/userTaskSlice";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useCompleteTaskWithBroadcast } from "../../../../hooks/useCompleteTaskWithBroadcast";

const Bank_Reconciliation_StatementTable = () => {
  const data = useSelector(selectTask);
  const completeTask = useCompleteTaskWithBroadcast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle validation logic
  const handleValidate = (formData) => {
    let allValid = true;

    data.questions.forEach((question, index) => {
      const userAnswer = formData[`question_${index}`];
      if (userAnswer !== question.answer) {
        allValid = false;
      }
    });

    if (allValid) {
      Swal.fire("Task Complete!", "All answers are correct.", "success");
      completeTask();
    } else {
      Swal.fire(
        "Invalid Input",
        "Please check your answers and try again.",
        "error"
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleValidate)}>
        <section className={styles.mainContainer}>
          <div className="container">
            <table className={`table brs-table ${styles.brsTable}`}>
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>Particulars/Transaction</th>
                  <th>Amount</th>
                  <th className={styles.colSpacer}></th>
                  <th>Add/Less</th>
                </tr>
              </thead>
              <tbody>
                {data?.questions.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item?.question}</td>
                    <td>{item?.amount}</td>
                    <td className={styles.colSpacer}></td>
                    <td>
                      <select
                        className="form-select brs-dropdown"
                        {...register(`question_${index}`, {
                          required: "This field is required",
                        })}
                      >
                        <option value="">~select~</option>
                        <option value="Add">Add</option>
                        <option value="Less">Less</option>
                      </select>
                      {errors[`question_${index}`] && (
                        <p className={styles.errorMsg}>
                          {errors[`question_${index}`]?.message}
                        </p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <footer className={styles.footer}>
          <div className="container">
            <div className="footer-nav d-flex justify-content-between">
              <button className="next" type="submit">
                Validate
              </button>
            </div>
          </div>
        </footer>
      </form>
    </>
  );
};

export default Bank_Reconciliation_StatementTable;
