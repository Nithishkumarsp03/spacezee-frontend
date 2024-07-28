import { useState } from "react";
import { Nav, Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaUserEdit,
  FaKey,
  FaTrashAlt,
  FaUserPlus,
} from "react-icons/fa";

const AdminSidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="bg-primary text-white py-2 d-md-none admin-menu-button w-100">
        <Button variant="primary" className="ms-2" onClick={handleShow}>
          <FaBars />
        </Button>
      </div>
      <Offcanvas show={show} onHide={handleClose} className="admin-offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column admin-sidebar">
            <Nav.Item>
              <Nav.Link as={Link} to="status-change">
                <FaUserEdit className="me-2" />
                Change Status
              </Nav.Link>
              <hr />
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="password-change">
                <FaKey className="me-2" />
                Change Password
              </Nav.Link>
              <hr />
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="delete">
                <FaTrashAlt className="me-2" />
                Delete User
              </Nav.Link>
              <hr />
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="create-user">
                <FaUserPlus className="me-2" />
                Create User
              </Nav.Link>
              <hr />
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      <Nav className="col-md-3 d-none d-md-block admin-sidebar flex-column">
        <Nav.Item>
          <Nav.Link as={Link} to="status-change">
            <FaUserEdit className="me-2" />
            Change Status
          </Nav.Link>
          <hr />
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="password-change">
            <FaKey className="me-2" />
            Change Password
          </Nav.Link>
          <hr />
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="delete">
            <FaTrashAlt className="me-2" />
            Delete User
          </Nav.Link>
          <hr />
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="create-user">
            <FaUserPlus className="me-2" />
            Create User
          </Nav.Link>
          <hr />
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default AdminSidebar;
