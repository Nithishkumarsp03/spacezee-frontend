import React from "react";
import { Col } from "react-bootstrap";
import TaskItem from "./TaskItem";
import styles from "./TaskSidebar.module.css";

const tasks = [
  { id: 1, title: "EMI_003AC", completed: true },
  { id: 2, title: "EMI_004AD", completed: false },
  { id: 3, title: "EMI_001AA", completed: false },
  { id: 4, title: "EMI_002AB", completed: false },
  { id: 5, title: "EMI_005AE", completed: false },
  { id: 6, title: "Borrowing", completed: false },
  { id: 7, title: "Borrowing Decision (Training Video )", completed: false },
  { id: 8, title: "EMI_006AF", completed: false },
  { id: 9, title: "EMI_007AG", completed: false },
  { id: 10, title: "EMI_008AH", completed: false },
  { id: 11, title: "EMI_009AI", completed: false },
  { id: 12, title: "EMI_010AJ", completed: false },
];

const TaskSidebar = () => {
  return (
    <Col md={3} className={`w-100 p-0 me-md-4 me-sm-0 ${styles.sidebar}`}>
      <div className={`${styles.header} py-3 px-3`}>
        <h3>Tasks</h3>
      </div>
      <ul className={styles.tasksListMenu}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </Col>
  );
};

export default TaskSidebar;
