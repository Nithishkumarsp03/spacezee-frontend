import React from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../assets/images/fx.jpg";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import "./UserNavbar.css";
import {
  logout,
  selectCurrentUser,
} from "../../../redux/features/auth/authSlice";
import { Link, useLocation } from "react-router-dom";
import { FaUser, FaCertificate, FaSignOutAlt } from "react-icons/fa";

const UserNavbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const getInitials = (name) => {
    return name ? name.charAt(0).toUpperCase() : "";
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Navbar bg="light" expand="lg" className="border-bottom">
      <Container className="container-lg">
        <Navbar.Brand href="/home">
          <img style={{ height: "60px" }} src={logo} alt=" logo" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Dropdown align="end">
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <div
                  className="user-avatar rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
                  style={{ width: "34px", height: "34px" }}
                >
                  {getInitials(user.name)}
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Link to="profile" className="dropdown-link">
                  <Dropdown.Item
                    as="div"
                    className={
                      location.pathname === "/home/profile" ? "active" : ""
                    }
                  >
                    <FaUser className="me-2" />
                    Profile
                  </Dropdown.Item>
                </Link>
                <Link to="certificate" className="dropdown-link">
                  <Dropdown.Item
                    as="div"
                    className={
                      location.pathname === "/home/certificate" ? "active" : ""
                    }
                  >
                    <FaCertificate className="me-2" />
                    Certificate
                  </Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item as="button" onClick={handleLogout}>
                  <FaSignOutAlt className="me-2" />
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default UserNavbar;
