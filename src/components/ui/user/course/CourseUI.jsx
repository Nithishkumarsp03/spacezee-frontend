import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import CourseTile from "./CourseTile";
import "./course.css";
import { useSelector } from "react-redux";
import { selectCommonSelectedProgram } from "../../../../redux/features/common/commonProgramSlice";
import { selectSelectedCourse } from "../../../../redux/features/user/userCourseSlice";
import { useNavigate } from "react-router-dom";

const CourseUI = () => {
  const selectedProgram = useSelector(selectCommonSelectedProgram);
  const selectedCourse = useSelector(selectSelectedCourse);
  const navigate = useNavigate();

  const handleBreadcrumbClick = () => {
    navigate("/home", { replace: true });
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12} className="mb-2">
          <Breadcrumb>
            <Breadcrumb.Item onClick={handleBreadcrumbClick}>
              {selectedProgram?.name}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{selectedCourse?.name}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col xs={12} className="mb-4">
          <h4 className="text-dark" style={{ textTransform: "capitalize" }}>
            {selectedCourse.name}
          </h4>
        </Col>
      </Row>
      <section className="section">
        <Row className="mb-5">
          {selectedCourse.data.map((item) => (
            <Col key={item._id}>
              <CourseTile
                title={item.name}
                image={item.courseImage}
                id={item._id}
                name={selectedCourse.name}
              />
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default CourseUI;
