import { Outlet } from "react-router-dom";
import AdminFooter from "../ui/admin/AdminFooter";
import AdminSidebar from "../ui/admin/AdminSidebar";
import AdminHeader from "../ui/admin/AdminHeader";

import "../../styles/Admin.css";

function AdminLayout() {
  return (
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
  );
}

export default AdminLayout;
