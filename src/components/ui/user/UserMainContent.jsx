import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const UserMainContent = () => {
  return (
    <Container className="container-lg">
      <Outlet></Outlet>
    </Container>
  );
};

export default UserMainContent;
