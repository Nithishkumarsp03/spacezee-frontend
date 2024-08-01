import UserLayout from "../components/layout/UserLayout";
import CourseDetails from "../components/ui/user/course/CourseDetails";
import CourseUI from "../components/ui/user/course/CourseUI";
import UserEMIApp from "../components/ui/user/EMI/UserEMIApp";
import TaskManager from "../components/ui/user/tasks/TaskManager";
import UserCertificate from "../components/ui/user/UserCertificate";
import UserProfileView from "../components/ui/user/UserProfileView";
import UserProgramCard from "../components/ui/user/UserProgramCard";

export const userRoutes = {
  path: "home",
  element: <UserLayout />,
  children: [
    {
      index: true,
      element: <UserProgramCard />,
    },
    {
      path: "profile",
      element: <UserProfileView />,
    },
    {
      path: "certificate",
      element: <UserCertificate />,
    },
    { path: "courses/regular", element: <CourseUI /> },
    { path: "courses/regular/:id", element: <CourseDetails /> },
    { path: "courses/course/:id", element: <TaskManager /> },
  ],
};
