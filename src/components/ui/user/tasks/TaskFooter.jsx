import { useSelector } from "react-redux";
import { taskJwt } from "../../../../utils/taskJwt";
import styles from "./TaskFooter.module.css";
import { selectCurrentUser } from "../../../../redux/features/auth/authSlice";
import axios from "axios";
import { useGetTaskJwtMutation } from "../../../../redux/features/user/userTaskApi";

const TaskFooter = ({
  onPrevTask,
  onNextTask,
  isPrevDisabled,
  isNextDisabled,
  task,
  courseId,
}) => {
  const user = useSelector(selectCurrentUser);
  const [jwtAPI] = useGetTaskJwtMutation();

  const { _id, completed, endPoint } = task;
  const url = import.meta.env.VITE_URL;

  if (!url) {
    console.error("VITE_SITE_URL is undefined.");
  }
  const handleOpenTask = async () => {
    console.log("course id", courseId);
    console.log("course email", user.email);
    const email = user.email;
    const secret = import.meta.env.VITE_JWT_SECRET_KEY;

    const payload = { courseId, email, secret };
    const token = await jwtAPI(payload).unwrap();
    console.log(token);
    const newWindow = window.open(
      `${url}/task/${endPoint}?task=${_id}&token=${token.data}`,
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
