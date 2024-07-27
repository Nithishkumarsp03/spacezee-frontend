import { Container } from "react-bootstrap";
import ProtectedRoute from "./ProtectedRoute";

import UserNavbar from "../ui/user/UserNavbar";
import UserFooter from "../ui/user/UserFooter";
import UserMainContent from "../ui/user/UserMainContent";

function UserLayout() {
  return (
    <ProtectedRoute role="user">
      <Container fluid className="vh-100">
        <UserNavbar />
        <UserMainContent />
        <UserFooter />
      </Container>
    </ProtectedRoute>
  );
}

export default UserLayout;
