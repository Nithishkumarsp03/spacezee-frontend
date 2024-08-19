import { useCallback } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { selectTask } from "../redux/features/user/userTaskSlice";
import { useCompleteTaskMutation } from "../redux/features/user/userTaskApi";

export const useCompleteTaskWithBroadcast = () => {
  const task = useSelector(selectTask);
  const [completeTask] = useCompleteTaskMutation();

  const completeCurrentTask = useCallback(() => {
    if (task) {
      const broadcast = new BroadcastChannel("task-updates");

      completeTask(task.taskId, task.id)
        .unwrap()
        .then(() => {
          broadcast.postMessage({ type: "TASK_COMPLETED", courseId: task.id });
          Swal.fire({
            icon: "success",
            title: "Task Completed",
            text: "Your task has been successfully completed!",
          });
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Task Completion Failed",
            text: "There was an error completing your task. Please try again.",
          });
        })
        .finally(() => {
          broadcast.close();
        });
    }
  }, [task, completeTask]);

  return completeCurrentTask;
};
