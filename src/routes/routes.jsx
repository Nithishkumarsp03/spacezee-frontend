import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import LoginForm from "../components/form/auth/LoginForm";
import GeneratePasswordForm from "../components/form/auth/GeneratePasswordForm";
import ForgetPasswordForm from "../components/form/auth/ForgetPasswordForm";
import ResetPasswordForm from "../components/form/auth/ResetPasswordForm";
import { userRoutes } from "./userRoutes";
import { adminRoutes } from "./adminRoutes";
import UserEMIApp from "../components/ui/user/EMI/UserEMIApp";

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
  userRoutes,
  adminRoutes,
  { path: "emi", element: <UserEMIApp /> },
]);

export default router;
