import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { Outlet } from "react-router-dom";

const UserMainContent = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <main className="py-4">
      <Container className="container-lg">
        <Row>
          <Col lg={8} md={12}>
            <h1 className="mb-4 mt-3" style={{ color: "#00438B" }}>
              {`Welcome back, ${user.name}!`}
            </h1>
          </Col>
        </Row>
        <Row className="mt-5 pt-5 mb-5">
          <Col lg={6} md={12} className="mx-auto">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default UserMainContent;
