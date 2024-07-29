import { Outlet } from "react-router-dom";
import AdminFooter from "../ui/admin/AdminFooter";
import AdminSidebar from "../ui/admin/AdminSidebar";
import AdminHeader from "../ui/admin/AdminHeader";

import "../../styles/Admin.css";
import ProtectedRoute from "./ProtectedRoute";
import { userRole } from "../../utils/constants";

function AdminLayout() {
  return (
    <ProtectedRoute role={[userRole.admin, userRole.superAdmin]}>
      <div className="admin-app">
        <AdminHeader />
        <div className="d-flex flex-grow-1">
          <AdminSidebar />
          <main className="admin-main-content p-4">
            <Outlet />
          </main>
        </div>
        <AdminFooter />
      </div>
    </ProtectedRoute>
  );
}

export default AdminLayout;
