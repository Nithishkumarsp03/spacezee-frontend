import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import styles from "./UserEMITabView.module.css";
import { useSelector } from "react-redux";
import { selectTask } from "../../../../redux/features/user/userTaskSlice";
import { useCompleteTaskWithBroadcast } from "../../../../hooks/useCompleteTaskWithBroadcast";

function UserEMITabView() {
  const [activeTab, setActiveTab] = useState("question");
  const [taskCompleted, setTaskCompleted] = useState(false);
  const task = useSelector(selectTask);
  const completeTask = useCompleteTaskWithBroadcast();
  const currentData = task || {};

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const normalizedUserAnswers = {};
    Object.keys(data).forEach((key) => {
      const apiValue = currentData.answers[key];
      const userValue = data[key];

      // Check if the field involves the word "advantageous"
      if (currentData.questions[key]?.toLowerCase().includes("advantageous")) {
        // Keep as string comparison for advantageous fields
        normalizedUserAnswers[key] = userValue;
      } else {
        // Convert to number for numerical comparison
        normalizedUserAnswers[key] = isNaN(Number(userValue))
          ? userValue
          : Number(userValue);
      }
    });

    if (
      JSON.stringify(normalizedUserAnswers) ===
      JSON.stringify(currentData.answers)
    ) {
      setTaskCompleted(true);

      completeTask();
      console.log("submit");
    } else {
      Swal.fire({
        icon: "error",
        title: "Incorrect Answers",
        text: "Please check your answers and try again.",
        confirmButtonText: "Retry",
      });
    }
  };

  const questionContent = (
    <div className={styles.tabContent}>
      <div dangerouslySetInnerHTML={{ __html: currentData?.details || "" }} />
    </div>
  );

  const answerContent = (
    <div className={styles.tabContent}>
      <form>
        {Object.keys(currentData.questions || {}).map((key) => (
          <div className="row mb-2" key={key}>
            <div className="col">
              {`(${key}) ${currentData.questions[key]}`}
            </div>
            <div className="col-auto">
              {currentData.questions[key]
                ?.toLowerCase()
                .includes("advantageous") ? (
                <select
                  className="form-select form-select-sm"
                  {...register(key, { required: true })}
                >
                  <option value="">Choose</option>
                  <option value="Diminishing method">Diminishing Method</option>
                  <option value="Straight line method">
                    Straight Line Method
                  </option>
                </select>
              ) : (
                <input
                  type="text"
                  placeholder="0"
                  className="form-control form-control-sm"
                  {...register(key, { required: true })}
                />
              )}
              {errors[key] && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>
        ))}
        <div className="row pt-2 border-top">
          <div className="col text-end">
            <button
              className="btn btn-primary btn-sm"
              type="button"
              onClick={handleSubmit(onSubmit)} // Manually call handleSubmit on button click
              disabled={taskCompleted} // Disable button if task is completed
            >
              Validate
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  return (
    <div className={styles.tabViewWrapper}>
      <div className={`card ${styles.card}`}>
        <div className="card-header border-0">
          <div className={styles.tabHeader}>
            <div className={styles.tabs}>
              <div
                className={`${styles.tab} ${
                  activeTab === "question" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("question")}
              >
                Question
              </div>
              <div
                className={`${styles.tab} ${
                  activeTab === "answer" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("answer")}
              >
                Answer
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          {activeTab === "question" ? questionContent : answerContent}
        </div>
      </div>
    </div>
  );
}

export default UserEMITabView;
