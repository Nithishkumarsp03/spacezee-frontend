import React from "react";
import { Col } from "react-bootstrap";
import TaskItem from "./TaskItem";
import styles from "./TaskSidebar.module.css";

const TaskSidebar = ({ course, selectedTaskIndex, onTaskSelect }) => {
  return (
    <Col md={3} className={`p-0 ${styles.sidebar}`}>
      <div className={`${styles.header} py-3 px-3`}>
        <h3>Tasks</h3>
      </div>
      <ul className={styles.tasksListMenu}>
        {course.map((task, index) => (
          <TaskItem
            key={task._id}
            task={task}
            isSelected={index === selectedTaskIndex}
            onClick={() => onTaskSelect(index)}
          />
        ))}
      </ul>
    </Col>
  );
};

export default TaskSidebar;
