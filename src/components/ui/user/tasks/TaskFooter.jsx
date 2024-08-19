import { useSelector } from "react-redux";
import { taskJwt } from "../../../../utils/taskJwt";
import styles from "./TaskFooter.module.css";
import { selectCurrentUser } from "../../../../redux/features/auth/authSlice";

const TaskFooter = ({
  onPrevTask,
  onNextTask,
  isPrevDisabled,
  isNextDisabled,
  task,
  courseId,
}) => {
  const user = useSelector(selectCurrentUser);

  const { _id, completed, endPoint } = task;
  const url = import.meta.env.VITE_URL;

  if (!url) {
    console.error("VITE_SITE_URL is undefined.");
  }
  const handleOpenTask = async () => {
    const token = await taskJwt(courseId, user.email);
    const newWindow = window.open(
      `${url}/task/${endPoint}?task=${_id}&token=${token}`,
      "_blank",
      "noopener,noreferrer"
    );

    console.log(token);
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div
      className={`${styles.footer} pt-2 d-flex justify-content-between align-items-center mt-4 mb-4`}
    >
      <div className={styles.statusBlock}>
        <div className={styles.contentAction}>
          <button className={styles.actionBtn} onClick={handleOpenTask}>
            {completed ? "Re-do" : "Continue"}
          </button>
        </div>
      </div>
      <div className={`${styles.navBtns} d-flex align-items-center`}>
        <button
          className={`${styles.navigateBtn} d-flex align-items-center ${styles.prevBtn}`}
          onClick={onPrevTask}
          disabled={isPrevDisabled}
        >
          <i className="bi-chevron-left"></i>
          <span>Previous</span>
        </button>
        <button
          className={`${styles.navigateBtn} d-flex align-items-center ${styles.nextBtn} ms-2`}
          onClick={onNextTask}
          disabled={isNextDisabled}
        >
          <span>Next</span>
          <i className="bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default TaskFooter;
