import { useEffect, useState } from "react";
import {
  Card,
  Button,
  Dropdown,
  Container,
  Row,
  Col,
  Alert,
} from "react-bootstrap";
import {
  FaBook,
  FaTools,
  FaClipboardList,
  FaCertificate,
  FaQuestionCircle,
} from "react-icons/fa";
import "./UserProgramCard.css";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { useGetAllProgramsQuery } from "../../../redux/features/common/commonProgramApi";
import SpinnerComponent from "../../SpinnerComponent";

const UserProgramCard = () => {
  const user = useSelector(selectCurrentUser);
  const [program, setProgram] = useState(null);

  const { data, error, isLoading } = useGetAllProgramsQuery();

  useEffect(() => {
    if (data && data.data) {
      const filteredPrograms = data.data.filter(
        (program) => !program.isDeleted
      );
      const defaultProgram = filteredPrograms.find(
        (program) => program.defaultSelected
      );
      if (defaultProgram) {
        setProgram(defaultProgram);
      } else if (filteredPrograms.length > 0) {
        setProgram(filteredPrograms[0]);
      }
    }
  }, [data]);

  if (isLoading) {
    return <SpinnerComponent />;
  }

  if (error) {
    return <Alert variant="danger">Failed to load programs</Alert>;
  }

  const handleSelectProgram = (program) => {
    setProgram(program);
  };

  const sortedPrograms =
    data && data.data
      ? [...data.data.filter((program) => !program.isDeleted)].sort((a, b) => {
          if (a.defaultSelected) return -1;
          if (b.defaultSelected) return 1;
          return 0;
        })
      : [];

  return (
    program && (
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
            <Card className="mb-5 user-program-card">
              <Card.Header className="text-center user-program-card-header">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">{program.name}</h5>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="secondary"
                      id="dropdown-basic"
                      className="user-dropdown-toggle"
                    >
                      Change Program
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {sortedPrograms.map((program) => (
                        <Dropdown.Item
                          key={program._id}
                          onClick={() => handleSelectProgram(program)}
                        >
                          {program.name}
                        </Dropdown.Item>
                      ))}
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
                  <UserProgramTile
                    icon={<FaTools size={30} />}
                    label="Practicals"
                  />
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
          </Col>
        </Row>
      </Container>
    )
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
