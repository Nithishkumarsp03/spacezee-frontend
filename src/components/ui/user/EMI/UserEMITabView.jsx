import React from "react";
import styles from "./UserEMITabView.module.css";

function UserEMITabView({ activeTab, setActiveTab }) {
  const questionContent = (
    <div className={styles.tabContent}>
      <p>
        <span>
          Michael acquired a loan amounting to ₹3,50,000 to purchase plant and
          machinery for his business. Currently, he is repaying a monthly EMI of
          ₹4,250 with a straight-line interest rate of 6% (Option 1). He
          requires clarity on the details of his current interest plan and also
          wishes to explore the option of a diminishing interest rate of 9%
          (Option 2).
        </span>
      </p>
      <p>You are required to compute the following:</p>
      <ol>
        <li>
          Duration of the EMI tenure (month) if the interest rate follows the
          straight line method.
        </li>
        <li>
          Duration of the EMI tenure (month) if the interest rate follows the
          diminishing method.
        </li>
        <li>The total interest amount using the straight line method.</li>
        <li>The total interest amount using the diminishing method.</li>
        <li>
          Determine which method is more advantageous: diminishing method or
          straight line method?
        </li>
      </ol>
    </div>
  );

  const answerContent = (
    <div className={styles.tabContent}>
      <section>
        <div className="row mb-3">
          <div className="col text-primary">
            <strong>Particulars</strong>
          </div>
          <div className="col-auto text-primary">
            <strong>Values</strong>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            (a) Duration of the EMI tenure (month) if the interest rate follows
            the straight line method.
          </div>
          <div className="col-auto">
            <input
              type="text"
              placeholder="0"
              className="form-control form-control-sm"
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            (b) Duration of the EMI tenure (month) if the interest rate follows
            the diminishing method.
          </div>
          <div className="col-auto">
            <input
              type="text"
              placeholder="0"
              className="form-control form-control-sm"
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            (c) The total interest amount using the straight line method.
          </div>
          <div className="col-auto">
            <input
              type="text"
              placeholder="0"
              className="form-control form-control-sm"
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            (d) The total interest amount using the diminishing method.
          </div>
          <div className="col-auto">
            <input
              type="text"
              placeholder="0"
              className="form-control form-control-sm"
            />
          </div>
        </div>
        <div className="row mb-2 pt-2 border-top">
          <div className="col">
            <strong>
              (e) Determine which method is more advantageous: diminishing
              method or straight line method?
            </strong>
          </div>
          <div className="col-auto">
            <select className="form-select form-select-sm">
              <option>Choose</option>
              <option>Diminishing Method</option>
              <option>Straight Line Method</option>
            </select>
          </div>
        </div>
        <div className="row pt-2 border-top">
          <div className="col text-end">
            <button className="btn btn-primary btn-sm">Validate</button>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className={styles.tabViewWrapper}>
      <div className={`card ${styles.card}`}>
        <div className="card-header border-0">
          <div className={styles.tabHeader}>
            <div className={styles.tabs}>
              <div
                className={`${styles.tab} ${
                  activeTab === "question" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("question")}
              >
                Question
              </div>
              <div
                className={`${styles.tab} ${
                  activeTab === "answer" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("answer")}
              >
                Answer
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          {activeTab === "question" ? questionContent : answerContent}
        </div>
      </div>
    </div>
  );
}

export default UserEMITabView;
