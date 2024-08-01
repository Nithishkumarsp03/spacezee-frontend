import { Col } from "react-bootstrap";
import TaskDetails from "./TaskDetails";
import TaskFooter from "./TaskFooter";
import styles from "./TaskContent.module.css";

const TaskContent = () => {
  return (
    <Col md={9} className={styles.contentWrapper}>
      <div className={styles.content}>
        <TaskDetails />
      </div>
      <TaskFooter />
    </Col>
  );
};

export default TaskContent;
