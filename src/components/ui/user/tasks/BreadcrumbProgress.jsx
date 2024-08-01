import { Breadcrumb, Col } from "react-bootstrap";
import styles from "./BreadcrumbProgress.module.css";

const BreadcrumbProgress = () => {
  return (
    <div className="row mb-4">
      <Col xs={12} className="mb-2">
        <nav aria-label="breadcrumb">
          <Breadcrumb className={styles.breadcrumb}>
            <Breadcrumb.Item href="/home">
              Demo Personal Finance
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/home/courses/practicals">
              Practicals
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Borrowings</Breadcrumb.Item>
          </Breadcrumb>
        </nav>
      </Col>
      <div className="row d-flex justify-content-between align-items-center flex-column-reverse flex-md-row">
        <Col md={8}>
          <h1 className="text-light">Borrowings</h1>
          <div className={styles.detailPageProgressBar}>
            <div className={styles.progressBarBlock}>
              <div className={styles.progressItem}>
                <div className="progress" style={{ height: "10px" }}>
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "0%" }}
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className={styles.progressCount}>0%</div>
            </div>
          </div>
        </Col>
        <Col md={4} className="d-flex justify-content-md-end mb-3 mb-md-0">
          <img
            src="https://nergy360.blob.core.windows.net/storage/course/begdzjtn.jpg"
            alt="sap"
            style={{ height: "100px" }}
          />
        </Col>
      </div>
    </div>
  );
};

export default BreadcrumbProgress;
