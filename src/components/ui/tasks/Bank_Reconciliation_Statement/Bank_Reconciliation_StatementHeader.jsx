import { useSelector } from "react-redux";
import styles from "./Bank_Reconciliation_Statement.module.css";
import { selectTask } from "../../../../redux/features/user/userTaskSlice";

const Bank_Reconciliation_StatementHeader = () => {
  const data = useSelector(selectTask);
  // console.log(data);
  return (
    <header className={`header ${styles.header} mb-4`}>
      <div className="container py-3">
        <div className="head-wrap d-flex justify-content-between align-items-center">
          <div className="branding-block d-flex align-items-center gap-3">
            <button className="entry-btn">{data?.name}</button>
          </div>
          <div className="qstnCount">Question No: {data?.taskName}</div>
        </div>
      </div>
    </header>
  );
};

export default Bank_Reconciliation_StatementHeader;
