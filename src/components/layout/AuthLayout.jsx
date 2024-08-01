import { Col, Container, Row } from "react-bootstrap";
import { Navigate, Outlet } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "../../styles/Auth.css";
import { useSelector } from "react-redux";
import { useCurrentToken } from "../../redux/features/auth/authSlice";
import { useEffect, useState } from "react";
import { verifyToken } from "../../utils/verifyToken";
import { userRole } from "../../utils/constants";

function AuthLayout() {
  const token = useSelector(useCurrentToken);
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    if (token) {
      const user = verifyToken(token);
      if (user && user.role === "user") {
        setRedirect(<Navigate to="/home" replace />);
      }
      if (
        user &&
        (user.role === userRole.admin || user.role === userRole.superAdmin)
      ) {
        setRedirect(<Navigate to="/admin" replace />);
      }
    }
  }, [token]);

  if (redirect) {
    return redirect;
  }

  return (
    <Container
      fluid
      className="vh-100 d-flex align-items-center justify-content-center p-0"
    >
      <Row className="w-100">
        <Col
          lg={6}
          className="d-none d-lg-flex align-items-center justify-content-center auth-left-content-box position-relative"
        >
          <div className="text-center">
            <div className="auth-logo">
              <img src={logo} alt="Nergyvidya Logo" className="mb-4" />
            </div>
            <h1>Welcome to Nergyvidya</h1>
          </div>
          <div className="auth-left-footer">
            <ul className="list-unstyled d-flex gap-2">
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy policy</a>
              </li>
              <li>
                <a href="/terms">Terms and Conditions</a>
              </li>
            </ul>
          </div>
        </Col>
        <Col
          lg={6}
          xs={12}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="auth-right-card w-75">
            <Outlet />
            <footer className="text-center mt-4">
              <p>
                <small>© SL & IL Tech platform Nergyvidya</small>
              </p>
            </footer>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AuthLayout;
