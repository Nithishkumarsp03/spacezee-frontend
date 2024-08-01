import styles from "./TaskFooter.module.css";

const TaskFooter = () => {
  return (
    <div
      className={`${styles.footer} pt-2 d-flex justify-content-between align-items-center mt-4 mb-4`}
    >
      <div className={styles.statusBlock}>
        <div className={styles.contentAction}>
          <button className={styles.actionBtn}>Continue</button>
        </div>
      </div>
      <div className={`${styles.navBtns} d-flex align-items-center`}>
        <button
          className={`${styles.navigateBtn} d-flex align-items-center ${styles.prevBtn}`}
          disabled
        >
          <i className="bi-chevron-left"></i>
          <span>Previous</span>
        </button>
        <button
          className={`${styles.navigateBtn} d-flex align-items-center ${styles.nextBtn} ms-2`}
        >
          <span>Next</span>
          <i className="bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default TaskFooter;
