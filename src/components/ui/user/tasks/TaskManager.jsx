import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TaskSidebar from "./TaskSidebar";
import TaskContent from "./TaskContent";
import BreadcrumbProgress from "./BreadcrumbProgress";
import styles from "./TaskManager.module.css";

const TaskManager = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <div className={`${styles.singleContentBlock} pt-4`}>
            <BreadcrumbProgress />
            <button className={styles.toggleButton} onClick={toggleSidebar}>
              {sidebarOpen ? "Hide Tasks" : "Show Tasks"}
            </button>
            <div className={`${styles.tasksWrapper}`}>
              {sidebarOpen && (
                <div className={styles.sidebarCol}>
                  <TaskSidebar />
                </div>
              )}
              <div className={styles.contentCol}>
                <TaskContent />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskManager;
