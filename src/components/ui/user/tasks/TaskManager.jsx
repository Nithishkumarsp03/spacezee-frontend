import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TaskSidebar from "./TaskSidebar";
import TaskContent from "./TaskContent";
import BreadcrumbProgress from "./BreadcrumbProgress";
import styles from "./TaskManager.module.css";
import { useParams } from "react-router-dom";
import SpinnerComponent from "../../../SpinnerComponent";
import { useGetCourseMaterialByIdQuery } from "../../../../redux/features/user/userCourseApi";

const TaskManager = () => {
  const { id } = useParams();
  const { data, error, isLoading, refetch } = useGetCourseMaterialByIdQuery(id);

  const course = data?.data;
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(0);

  const hasInitialized = useRef(false);

  useEffect(() => {
    const broadcast = new BroadcastChannel("task-updates");

    // Run this code block only once on component load
    if (!hasInitialized.current && course?.courseContents?.length > 0) {
      setSelectedTaskIndex(0);
      hasInitialized.current = true;
    }

    broadcast.onmessage = (event) => {
      console.log("Received message on course page:", event.data);
      if (event.data.type === "TASK_COMPLETED" && event.data.courseId === id) {
        console.log("Refetching course material...");

        refetch();
      }
    };

    return () => {
      broadcast.close();
    };
  }, [course, refetch, id]);

  if (isLoading) {
    return <SpinnerComponent />;
  }

  const handleTaskSelect = (index) => {
    setSelectedTaskIndex(index);
  };

  const handlePrevTask = () => {
    setSelectedTaskIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextTask = () => {
    setSelectedTaskIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <div className={`${styles.singleContentBlock} pt-4`}>
            <BreadcrumbProgress
              name={course?.name}
              courseImage={course?.courseImage}
              completedTaskPercentage={course?.completedTaskPercentage}
            />

            <div className={`${styles.tasksWrapper} row`}>
              <div className={`col-md-3`}>
                <TaskSidebar
                  course={course?.courseContents}
                  selectedTaskIndex={selectedTaskIndex}
                  onTaskSelect={handleTaskSelect}
                />
              </div>

              <div className={`col-md-9`}>
                <TaskContent
                  courseId={course?._id}
                  task={course?.courseContents[selectedTaskIndex]}
                  onPrevTask={handlePrevTask}
                  onNextTask={handleNextTask}
                  isPrevDisabled={selectedTaskIndex === 0}
                  isNextDisabled={
                    selectedTaskIndex === course?.courseContents?.length - 1
                  }
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskManager;
