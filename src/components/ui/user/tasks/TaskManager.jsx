import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TaskSidebar from "./TaskSidebar";
import TaskContent from "./TaskContent";
import BreadcrumbProgress from "./BreadcrumbProgress";
import styles from "./TaskManager.module.css";
import { useParams } from "react-router-dom";
import SpinnerComponent from "../../../SpinnerComponent";
import { useGetCourseMaterialByIdQuery } from "../../../../redux/features/user/userCourseApi";
import { selectCommonSelectedProgram } from "../../../../redux/features/common/commonProgramSlice";
import {
  selectSelectedCourse,
  setSelectedCourse,
} from "../../../../redux/features/user/userCourseSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllProgramsQuery } from "../../../../redux/features/common/commonProgramApi";

const TaskManager = () => {
  const { id } = useParams();
  const { data, error, isLoading, refetch } = useGetCourseMaterialByIdQuery(id);
  const dispatch = useDispatch();
  const program = useSelector(selectCommonSelectedProgram);
  const courseData = useSelector(selectSelectedCourse);
  const {
    data: updatedProgram,
    isLoading: updatedProgramLoading,
    refetch: updateProgram,
  } = useGetAllProgramsQuery("info");

  const course = data?.data;
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(0);

  const hasInitialized = useRef(false);

  useEffect(() => {
    const broadcast = new BroadcastChannel("task-updates");

    if (!hasInitialized.current && course?.courseContents?.length > 0) {
      setSelectedTaskIndex(0);
      hasInitialized.current = true;
    }

    broadcast.onmessage = async (event) => {
      // console.log("Received message on course page:", event.data);
      if (event.data.type === "TASK_COMPLETED" && event.data.courseId === id) {
        // console.log("Refetching course material...");
        const updatedProgramResponse = await updateProgram().unwrap();
        // console.log("Updated Program Response:", updatedProgramResponse);

        if (updatedProgramResponse) {
          const filteredProgramData = updatedProgramResponse.data.filter(
            (item) => item.name === program.name
          );
          // console.log("Filtered Program Data:", filteredProgramData);

          if (courseData.name === "Practicals") {
            // console.log("Dispatching Practicals");
            dispatch(
              setSelectedCourse({
                name: "Practicals",
                data: filteredProgramData[0]?.practicals || [],
              })
            );
          } else {
            // console.log("Dispatching Assignment");
            dispatch(
              setSelectedCourse({
                name: "Assignment",
                data: filteredProgramData[0]?.learningMaterials || [],
              })
            );
          }

          refetch();
        }
      }
    };

    return () => {
      broadcast.close();
    };
  }, [
    course,
    refetch,
    id,
    updatedProgramLoading,
    program?.name,
    dispatch,
    courseData?.name,
    updateProgram,
  ]);

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
