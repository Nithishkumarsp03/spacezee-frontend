import React from "react";
import { FaCheckCircle, FaCircle } from "react-icons/fa";
import styles from "./TaskItem.module.css";

const TaskItem = ({ task }) => {
  return (
    <li className={styles.taskListItem}>
      <button
        className={`${styles.tasksLink} ${
          task.completed ? styles.completed : ""
        }`}
      >
        <span className={styles.taskListLinkIcon}>
          {task.completed ? <FaCheckCircle /> : <FaCircle />}
        </span>
        <div className="d-flex justify-content-between align-items-center">
          <span>{task.title}</span>
        </div>
      </button>
    </li>
  );
};

export default TaskItem;
