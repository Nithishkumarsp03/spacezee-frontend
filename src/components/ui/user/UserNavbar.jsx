import { useSelector } from "react-redux";
import logo from "../../../assets/images/logo.png";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";

const UserNavbar = () => {
  const user = useSelector(selectCurrentUser);
  const getInitials = (name) => {
    return name ? name.charAt(0).toUpperCase() : "";
  };

  return (
    <Navbar bg="light" expand="lg" className="border-bottom">
      <Container className="container-lg">
        <Navbar.Brand href="/home">
          <img src={logo} alt="SpaceZee logo" height="40" />
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
                <Dropdown.Item href="#">Profile</Dropdown.Item>
                <Dropdown.Item href="#">Certificate</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default UserNavbar;
