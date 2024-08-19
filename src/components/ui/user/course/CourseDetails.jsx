import { useState } from "react";
import { Container, Row, Col, Breadcrumb, Card, Modal } from "react-bootstrap";
import PdfLink from "./PdfLink";
import VideoLink from "./VideoLink";
import styles from "./CourseDetails.module.css";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectCommonSelectedProgram } from "../../../../redux/features/common/commonProgramSlice";
import { selectSelectedCourse } from "../../../../redux/features/user/userCourseSlice";
import { useGetLearningMaterialByIdQuery } from "../../../../redux/features/user/userCourseApi";

const CourseDetails = () => {
  const [show, setShow] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const selectedProgram = useSelector(selectCommonSelectedProgram);
  const selectedCourse = useSelector(selectSelectedCourse);
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, error, isLoading } = useGetLearningMaterialByIdQuery(id, {
    skip: !id,
  });
  console.log(selectedCourse);
  const handleClose = () => setShow(false);
  const handleShow = (url) => {
    setVideoUrl(url);
    setShow(true);
  };

  // Render loading or error state if necessary
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  // Filter and sort course contents
  const courseContents = data?.data.courseContents
    .filter((module) => !module.isDeleted)
    .map((module) => ({
      ...module,
      contentDetails: module.contentDetails
        .filter((content) => !content.isDeleted)
        .sort((a, b) => a.sortOrder - b.sortOrder),
    }));

  console.log(data);
  return (
    <>
      <section className={`${styles.singlePageHeader} pt-4 pb-5 mt-4 rounded`}>
        <Container>
          <Row>
            <Col xs={12} className="mb-2">
              <Breadcrumb className={styles.customBreadcrumb}>
                <Breadcrumb.Item
                  onClick={() => navigate("/home", { replace: true })}
                >
                  {`${selectedProgram.name}`}
                </Breadcrumb.Item>
                <Breadcrumb.Item
                  onClick={() => navigate(-1, { replace: true })}
                >
                  {selectedCourse.name}
                </Breadcrumb.Item>
                <Breadcrumb.Item active>{data?.data.name}</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
            <Row className="d-flex justify-content-between align-items-center flex-column-reverse flex-md-row">
              <Col md={8}>
                <div className="me-3">
                  <h1 className={`${styles.textLight} text-light`}>
                    {data?.data.name}
                  </h1>
                  <div className={styles.textLight}>
                    <p>{data?.data.description}</p>
                  </div>
                </div>
              </Col>
              <Col
                md={4}
                className="d-flex justify-content-md-end mb-3 mb-md-0"
              >
                <img
                  src={data?.data.courseImage}
                  alt={data?.data.name}
                  className={styles.courseImage}
                />
              </Col>
            </Row>
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row>
            <Col xs={12} className="pt-4">
              {courseContents?.map((module, index) => (
                <Card className="mb-4" key={index}>
                  <Card.Header className="bg-white">
                    <h5 className="mb-0 text-dark">{module.title}</h5>
                  </Card.Header>
                  <Card.Body>
                    <p>{module.description}</p>
                    <div className="d-flex justify-content-start flex-wrap">
                      {module.contentDetails.map((content, idx) =>
                        content.contentTypeStr === "PDF" ? (
                          <PdfLink
                            key={idx}
                            title={content.title}
                            url={content.fileURL}
                          />
                        ) : (
                          <VideoLink
                            key={idx}
                            title={content.title}
                            onClick={() => handleShow(content.fileURL)}
                          />
                        )
                      )}
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Training Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="400"
            src={videoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Training Video"
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CourseDetails;
