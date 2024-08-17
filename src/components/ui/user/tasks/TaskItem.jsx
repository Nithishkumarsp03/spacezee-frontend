import React from "react";
import { FaCheckCircle, FaCircle } from "react-icons/fa";
import styles from "./TaskItem.module.css";

const TaskItem = ({ task, isSelected, onClick }) => {
  return (
    <li className={styles.taskListItem} onClick={onClick}>
      <div
        className={`${styles.tasksLink} ${isSelected ? styles.selected : ""} ${
          task.completed ? styles.completed : ""
        } d-flex`}
      >
        <div>
          <span className={styles.taskListLinkIcon}>
            {task.completed ? <FaCheckCircle /> : <FaCircle />}
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <span>{task.title}</span>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
