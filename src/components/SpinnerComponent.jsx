import { Spinner } from "react-bootstrap";
import React from "react";
const SpinnerComponent = () => {
  return (
    <div style={styles.spinnerContainer}>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

const styles = {
  spinnerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};

export default SpinnerComponent;
