import React from "react";
import { Card } from "react-bootstrap";

const AdminProfile = () => {
  return (
    <div className="container mt-4">
      <Card>
        <Card.Header>Profile Information</Card.Header>
        <Card.Body>
          <Card.Title>Admin Name</Card.Title>
          <Card.Text>
            <strong>Email:</strong> admin@example.com
          </Card.Text>
          <Card.Text>
            <strong>Role:</strong> Admin
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdminProfile;
