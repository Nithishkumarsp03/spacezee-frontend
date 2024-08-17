import React from "react";
import AdminLayout from "../components/layout/AdminLayout";
import AdminCreateUser from "../components/ui/admin/AdminCreateUser";
import AdminDelete from "../components/ui/admin/AdminDelete";
import AdminPasswordChange from "../components/ui/admin/AdminPasswordChange";
import AdminProfile from "../components/ui/admin/AdminProfile";
import AdminStatusChange from "../components/ui/admin/AdminStatusChange";
import AdminUserInfo from "../components/ui/admin/AdminUserInfo";

export const adminRoutes = {
  path: "admin",
  element: <AdminLayout />,
  children: [
    {
      index: true,
      element: <AdminProfile />,
    },
    {
      path: "status-change",
      element: <AdminStatusChange />,
    },
    {
      path: "password-change",
      element: <AdminPasswordChange />,
    },
    {
      path: "delete",
      element: <AdminDelete />,
    },
    {
      path: "profile",
      element: <AdminProfile />,
    },
    {
      path: "create-user",
      element: <AdminCreateUser />,
    },
    {
      path: "user-info",
      element: <AdminUserInfo />,
    },
  ],
};
