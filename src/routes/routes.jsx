import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import LoginForm from "../components/form/auth/LoginForm";
import GeneratePasswordForm from "../components/form/auth/GeneratePasswordForm";
import ForgetPasswordForm from "../components/form/auth/ForgetPasswordForm";
import ResetPasswordForm from "../components/form/auth/ResetPasswordForm";
import { userRoutes } from "./userRoutes";
import { adminRoutes } from "./adminRoutes";
import UserEMIApp from "../components/ui/user/EMI/UserEMIApp";
import DAApp from "../components/ui/tasks/da/DAApp";
import DaAccountCreation from "../components/ui/tasks/da/savingsAccount/DaAccountCreation";
import DaAccountFormSection from "../components/ui/tasks/da/savingsAccount/DaAccountFormSection";
import DaAccountOtpSection from "../components/ui/tasks/da/savingsAccount/DaAccountOtpSection";
import DaAccountPersonalDetails from "../components/ui/tasks/da/savingsAccount/DaAccountPersonalDetails";
import DaAccountAddressDetails from "../components/ui/tasks/da/savingsAccount/DaAccountAddressDetails";
import DANomineeDetails from "../components/ui/tasks/da/savingsAccount/DANomineeDetails";
import DAProfessionalDetails from "../components/ui/tasks/da/savingsAccount/DAProfessionalDetails";
import DATermsAndConditions from "../components/ui/tasks/da/savingsAccount/DATermsAndConditions";
import DaDematAccount from "../components/ui/tasks/da/savingsAccount/dematAccount/DaDematAccount";
import DaAccountEmailSection from "../components/ui/tasks/da/savingsAccount/dematAccount/DaAccountEmailSection";
import DaConfirmEmailOtpSection from "../components/ui/tasks/da/savingsAccount/dematAccount/DaConfirmEmailOtpSection";
import DaPanDetailsSection from "../components/ui/tasks/da/savingsAccount/dematAccount/DaPanDetailsSection";
import DaSegmentAccountSection from "../components/ui/tasks/da/savingsAccount/dematAccount/DaSegmentAccountSection";
import DigiLockerSection from "../components/ui/tasks/da/savingsAccount/dematAccount/DaDigiLockerSection";
import DaProfileSection from "../components/ui/tasks/da/savingsAccount/dematAccount/DaProfileSection";
import DaProfileDetails from "../components/ui/tasks/da/savingsAccount/dematAccount/DaProfileDetails";
import DaBankAccountLink from "../components/ui/tasks/da/savingsAccount/dematAccount/DaProfileDetails";
import DaDocumentUpload from "../components/ui/tasks/da/savingsAccount/dematAccount/DaDocumentUpload";
import DaNomineeDetails from "../components/ui/tasks/da/savingsAccount/dematAccount/DaNomineeDetails";
import DaFinalStep from "../components/ui/tasks/da/savingsAccount/dematAccount/DaFinalStep";
import DaOtpVerification from "../components/ui/tasks/da/savingsAccount/dematAccount/DaOtpVerification";
import DaCongratulations from "../components/ui/tasks/da/savingsAccount/dematAccount/DaCongratulations";
import PBDTApp from "../components/ui/tasks/PBDT/PBDTApp";
import SpendingApp from "../components/ui/tasks/spending/SpendingApp";
import SpendingContent from "../components/ui/tasks/spending/SpendingContent";
import PANApp from "../components/ui/tasks/PAN/PANApp";
import PANContent from "../components/ui/tasks/PAN/PANContent";
import EPANRoute from "../components/ui/tasks/PAN/EPANRoute";
import EPANAdhar from "../components/ui/tasks/PAN/EPANAdhar";
import EPANOTPAccept from "../components/ui/tasks/PAN/EPANOTPAccept";
import EPANOtp from "../components/ui/tasks/PAN/EPANOtp";
import EPANFinal from "../components/ui/tasks/PAN/EPANFinal";
import EPANKYC from "../components/ui/tasks/PAN/EPANKYC";
import TaskLayout from "../components/layout/TaskLayout";

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
  {
    path: "task/emi",
    element: (
      <TaskLayout>
        <UserEMIApp />
      </TaskLayout>
    ),
  },
  {
    path: "task/savings",
    element: (
      <TaskLayout>
        <DAApp />
      </TaskLayout>
    ),
  },
  {
    path: "task/savings/savings-account",
    element: (
      <TaskLayout>
        <DaAccountCreation />
      </TaskLayout>
    ),
    children: [
      {
        index: true,
        element: <DaAccountFormSection />,
      },
      {
        path: "otp",
        element: <DaAccountOtpSection />,
      },

      {
        path: "personal-details",
        element: <DaAccountPersonalDetails />,
      },
      {
        path: "address-details",
        element: <DaAccountAddressDetails />,
      },
      {
        path: "nominee-details",
        element: <DANomineeDetails />,
      },
      {
        path: "professional-details",
        element: <DAProfessionalDetails />,
      },
      {
        path: "terms-and-conditions",
        element: <DATermsAndConditions />,
      },
    ],
  },
  {
    path: "account/demat-account",
    element: <DaAccountCreation />,
    children: [
      {
        index: true,
        element: <DaDematAccount />,
      },
      {
        path: "confirm-otp",
        element: <DaAccountOtpSection />,
      },
      {
        path: "email",
        element: <DaAccountEmailSection />,
      },
      {
        path: "confirm-email-otp",
        element: <DaConfirmEmailOtpSection />,
      },

      {
        path: "pan-details",
        element: <DaPanDetailsSection />,
      },
      {
        path: "segments",
        element: <DaSegmentAccountSection />,
      },
      {
        path: "digilocker",
        element: <DigiLockerSection />,
      },
      {
        path: "profile",
        element: <DaProfileSection />,
        children: [
          {
            index: "true",
            element: <DaProfileDetails />,
          },
          {
            path: "link-bank-account",
            element: <DaBankAccountLink />,
          },
          {
            path: "documents",
            element: <DaDocumentUpload />,
          },
          {
            path: "add-nominees",
            element: <DaNomineeDetails />,
          },
          {
            path: "last-step",
            element: <DaFinalStep />,
          },
          {
            path: "otp",
            element: <DaOtpVerification />,
          },
          {
            path: "success",
            element: <DaCongratulations />,
          },
        ],
      },
    ],
  },
  { path: "budgeting", element: <PBDTApp /> },
  {
    path: "spending",
    element: <SpendingApp />,
    children: [{ index: true, element: <SpendingContent /> }],
  },
  {
    path: "task/pan",
    element: (
      <TaskLayout>
        <PANApp />
      </TaskLayout>
    ),
    children: [
      { index: true, element: <PANContent /> },
      { path: "epan-route", element: <EPANRoute /> },
      { path: "epan-adhar", element: <EPANAdhar /> },
      { path: "epan-otp-acept", element: <EPANOTPAccept /> },
      { path: "epan-otp", element: <EPANOtp /> },
      { path: "kyc", element: <EPANKYC /> },
      { path: "final", element: <EPANFinal /> },
    ],
  },
]);

export default router;
