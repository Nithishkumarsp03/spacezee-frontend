import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRole } from "../../utils/constants";
import ProtectedRoute from "./ProtectedRoute";
import { useInputJwtMutation } from "../../redux/features/user/userCourseApi";
import { Spinner, Alert } from "react-bootstrap";
import { useGetTaskContentQuery } from "../../redux/features/user/userTaskApi";
import { setSelectedTask } from "../../redux/features/user/userTaskSlice";
import { jwtDecode } from "jwt-decode"; // Fix import

function TaskLayout({ children }) {
  const [inputJwt, { isLoading: isJwtLoading, isError: isJwtError }] =
    useInputJwtMutation();
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [courseId, setCourseId] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const task = queryParams.get("task");
  const token = queryParams.get("token");
  const [jwtDecodeError, setJwtDecodeError] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!hasSubmitted) {
      try {
        const decodedToken = jwtDecode(token);
        setCourseId(decodedToken.courseId);

        inputJwt(token)
          .unwrap()
          .then(() => {
            setHasSubmitted(true);
          })
          .catch((error) => {
            console.error("Failed to send JWT", error);
          });
      } catch (error) {
        console.error("Failed to decode JWT", error);
        setJwtDecodeError(true);
      }
    }
  }, [inputJwt, token, task, hasSubmitted, navigate]);

  const {
    data: taskContent,
    isLoading: isTaskLoading,
    isError: isTaskError,
  } = useGetTaskContentQuery(
    { courseId, contentId: task },
    {
      skip: !courseId || !task, // Skip query execution if courseId or task is missing
    }
  );

  useEffect(() => {
    if (taskContent) {
      dispatch(setSelectedTask(taskContent?.data));
    }
  }, [taskContent, dispatch]);

  if ((isJwtLoading || isTaskLoading) && !isJwtError && !isTaskError) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (isJwtError || isTaskError || jwtDecodeError) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Alert variant="danger" className="text-center">
          <h4>Error</h4>
          <p>There was an error processing your request. Please try again.</p>
        </Alert>
      </div>
    );
  }

  return <ProtectedRoute role={[userRole.user]}>{children}</ProtectedRoute>;
}

export default TaskLayout;
