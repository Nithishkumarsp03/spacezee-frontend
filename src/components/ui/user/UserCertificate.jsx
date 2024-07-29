import { Container, Row, Col, Breadcrumb, Button, Card } from "react-bootstrap";
import { FaCertificate } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./UserCertificate.css"; // Assuming you create this CSS file for custom styles

const UserCertificate = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Container className="mt-4">
      <Row className="mb-2">
        <Col xs={12}>
          <Breadcrumb className="text-capitalize">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/home" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Certificate</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col xs={12}>
          <h4 className="text-dark text-capitalize">Certificate</h4>
        </Col>
      </Row>
      <section className="section">
        <div className="main-content-block">
          <Row className="mb-5 g-3">
            <Col xs={12}>
              <Card className="text-center py-5">
                <Card.Body>
                  <div
                    className="empty-msg-icon rounded-circle d-flex justify-content-center align-items-center mx-auto mb-4 bg-light"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <FaCertificate size={50} className="text-muted" />
                  </div>
                  <h3 className="mb-3 empty-msg-title">
                    No Certificates found
                  </h3>
                  <p className="mx-auto empty-msg-description">
                    <span>
                      There are no certificates found at this moment.
                      <br />
                      Please check back later.
                    </span>
                  </p>
                  <Button
                    className="task-action-btn empty-msg-action mt-3"
                    onClick={handleGoBack}
                  >
                    Go back
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </Container>
  );
};

export default UserCertificate;
