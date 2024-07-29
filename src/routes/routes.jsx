import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import LoginForm from "../components/form/auth/LoginForm";
import GeneratePasswordForm from "../components/form/auth/GeneratePasswordForm";
import ForgetPasswordForm from "../components/form/auth/ForgetPasswordForm";
import ResetPasswordForm from "../components/form/auth/ResetPasswordForm";
import { userRoutes } from "./userRoutes";
import { adminRoutes } from "./adminRoutes";

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
]);

export default router;
