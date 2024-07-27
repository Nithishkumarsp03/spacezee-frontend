import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AuthLayout from "../components/layout/AuthLayout";
import LoginForm from "../components/form/auth/LoginForm";
import GeneratePasswordForm from "../components/form/auth/GeneratePasswordForm";
import ForgetPasswordForm from "../components/form/auth/ForgetPasswordForm";
import ResetPasswordForm from "../components/form/auth/ResetPasswordForm";
import UserLayout from "../components/layout/UserLayout";
import UserProgramCard from "../components/ui/user/UserProgramCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginForm />,
      },
      {
        path: "generatePassword",
        element: <GeneratePasswordForm />,
      },
      {
        path: "forgotPassword",
        element: <ForgetPasswordForm />,
      },
      {
        path: "resetPassword",
        element: <ResetPasswordForm />,
      },
    ],
  },
  {
    path: "home",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <UserProgramCard />,
      },
    ],
  },
]);

export default router;
