import { Col } from "react-bootstrap";
import TaskDetails from "./TaskDetails";
import TaskFooter from "./TaskFooter";
import styles from "./TaskContent.module.css";

const TaskContent = ({
  task,
  onPrevTask,
  onNextTask,
  isPrevDisabled,
  isNextDisabled,
}) => {
  return (
    <Col md={9} className={styles.contentWrapper}>
      <div className={`${styles.content} overflow-auto`}>
        <TaskDetails task={task} />
      </div>
      <TaskFooter
        onPrevTask={onPrevTask}
        onNextTask={onNextTask}
        isPrevDisabled={isPrevDisabled}
        isNextDisabled={isNextDisabled}
      />
    </Col>
  );
};
export default TaskContent;
