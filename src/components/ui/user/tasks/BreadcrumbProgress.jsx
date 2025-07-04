import { Breadcrumb, Col } from "react-bootstrap";
import styles from "./BreadcrumbProgress.module.css";
import { selectSelectedCourse } from "../../../../redux/features/user/userCourseSlice";
import { useSelector } from "react-redux";
import { selectCommonSelectedProgram } from "../../../../redux/features/common/commonProgramSlice";
import { useNavigate } from "react-router-dom";
const BreadcrumbProgress = ({ name, courseImage, completedTaskPercentage }) => {
  const selectedCourse = useSelector(selectSelectedCourse);
  const selectedProgram = useSelector(selectCommonSelectedProgram);
  const navigate = useNavigate();

  return (
    <div className="row mb-5">
      <Col xs={12} className="mb-2">
        <nav aria-label="breadcrumb">
          <Breadcrumb className={styles.breadcrumb}>
            <Breadcrumb.Item onClick={() => navigate("/home")}>
              {selectedProgram.name}
            </Breadcrumb.Item>
            <Breadcrumb.Item onClick={() => navigate(-1)}>
              {selectedCourse.name}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{name}</Breadcrumb.Item>
          </Breadcrumb>
        </nav>
      </Col>
      <div className="row d-flex justify-content-between align-items-center flex-column-reverse flex-md-row">
        <Col md={8}>
          <h1>{name}</h1>
          <div className={styles.detailPageProgressBar}>
            <div className={styles.progressBarBlock}>
              <div className={styles.progressItem}>
                <div className="progress" style={{ height: "10px" }}>
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: `${completedTaskPercentage}%` }}
                    role="progressbar"
                    aria-valuenow={completedTaskPercentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className={styles.progressCount}>
                {completedTaskPercentage}%
              </div>
            </div>
          </div>
        </Col>
        <Col md={4} className="d-flex justify-content-md-end mb-3 mb-md-0">
          <img
            src={courseImage}
            alt="course image"
            style={{ height: "100px" }}
          />
        </Col>
      </div>
    </div>
  );
};

export default BreadcrumbProgress;
