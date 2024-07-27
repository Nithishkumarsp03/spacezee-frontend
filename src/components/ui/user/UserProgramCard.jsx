import React, { useState } from "react";
import { Card, Button, Dropdown, Container } from "react-bootstrap";
import {
  FaBook,
  FaTools,
  FaClipboardList,
  FaCertificate,
  FaQuestionCircle,
} from "react-icons/fa";
import "./UserProgramCard.css";

const UserProgramCard = () => {
  const [programName, setProgramName] = useState("Demo Statutory Executive");

  const handleSelectProgram = (name) => {
    setProgramName(name);
  };

  return (
    <Container className="container-lg d-flex justify-content-center align-items-center">
      <Card className="mb-5 user-program-card">
        <Card.Header className="text-center user-program-card-header">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">{programName}</h5>
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className="user-dropdown-toggle"
              >
                Change Program
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => handleSelectProgram("Demo Personal Finance")}
                >
                  Demo Personal Finance
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleSelectProgram("Demo GST Executive")}
                >
                  Demo GST Executive
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleSelectProgram("Demo Finance Executive")}
                >
                  Demo Finance Executive
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() =>
                    handleSelectProgram("Demo Statutory Executive")
                  }
                >
                  Demo Statutory Executive
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="row justify-content-center">
            <UserProgramTile
              icon={<FaBook size={30} />}
              label="Learning Materials"
            />
            <UserProgramTile icon={<FaTools size={30} />} label="Practicals" />
            <UserProgramTile
              icon={<FaClipboardList size={30} />}
              label="Assignment"
            />
            <UserProgramTile
              icon={<FaCertificate size={30} />}
              label="My Certifications"
            />
            <UserProgramTile
              icon={<FaQuestionCircle size={30} />}
              label="Help"
            />
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

const UserProgramTile = ({ icon, label }) => (
  <div className="col-6 col-md-4 mb-4">
    <Button
      variant="outline-primary"
      className="w-100 text-center rounded-1 p-3 user-program-tile"
    >
      <div className="icon-container">{icon}</div>
      <p className="mt-2 mb-0">{label}</p>
    </Button>
  </div>
);

export default UserProgramCard;
