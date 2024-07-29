import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";

const AdminProfile = () => {
  const user = useSelector(selectCurrentUser);
  return (
    <div className="container mt-4">
      <Card>
        <Card.Header>Profile Information</Card.Header>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
            <strong>Email:</strong> {user.email}
          </Card.Text>
          <Card.Text>
            <strong>Role:</strong> {user.role}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdminProfile;
