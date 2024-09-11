import styles from "./Bank_Reconciliation_Statement.module.css";

const Bank_Reconciliation_StatementFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="footer-nav d-flex justify-content-between">
          <button className="next">Validate</button>
        </div>
      </div>
    </footer>
  );
};

export default Bank_Reconciliation_StatementFooter;
