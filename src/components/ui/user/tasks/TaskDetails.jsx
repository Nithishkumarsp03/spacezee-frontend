import React from "react";
import styles from "./TaskDetails.module.css";

const TaskDetails = ({ task }) => {
  return (
    <div>
      <h2>{task.title}</h2>
      <div className={styles.details}>
        <div dangerouslySetInnerHTML={{ __html: task.description }} />
      </div>
    </div>
  );
};

export default TaskDetails;
