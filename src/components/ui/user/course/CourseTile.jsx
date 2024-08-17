import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Card } from "react-bootstrap";

const CourseTile = ({ title, image, id, name }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (name === "Learning Materials") {
      navigate(`${id}`);
    } else {
      navigate(`/home/courses/course/${id}`);
    }
  };

  return (
    <Col lg={3} xs={6} className="mb-4">
      <Card
        className="pt-5 pb-5 px-4 text-center course-tile-card"
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      >
        <Card.Img
          variant="top"
          src={image}
          className="mb-3"
          style={{ height: "80px", width: "80px", margin: "0 auto" }}
        />
        <Card.Body>
          <Card.Text className="mb-0 text-dark tile-title">{title}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CourseTile;
