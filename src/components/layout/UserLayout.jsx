import { Container } from "react-bootstrap";
import ProtectedRoute from "./ProtectedRoute";
import UserNavbar from "../ui/user/UserNavbar";
import UserFooter from "../ui/user/UserFooter";
import UserMainContent from "../ui/user/UserMainContent";

function UserLayout() {
  return (
    <ProtectedRoute role={["user"]}>
      <Container fluid className="d-flex flex-column vh-100">
        <UserNavbar />
        <div className="flex-grow-1">
          <UserMainContent />
        </div>
        <UserFooter />
      </Container>
    </ProtectedRoute>
  );
}

export default UserLayout;
