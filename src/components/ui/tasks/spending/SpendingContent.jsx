import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import styles from "./SpendingMainContent.module.css";
import { useSelector } from "react-redux";
import { selectTask } from "../../../../redux/features/user/userTaskSlice";
import { useCompleteTaskWithBroadcast } from "../../../../hooks/useCompleteTaskWithBroadcast";

const modeOptions = ["Cash", "Bank", "Credit"];
const categoryOptions = [
  "Advertisements",
  "Cash Deposit To Bank",
  "Cash Withdrawal from Bank",
  "Donation and Charity",
  "Electricity, Telephone and Other Utilities",
  "Food, Water and Recreation Expense",
  "Insurance and Medical Expense",
  "Loan Repayment",
  "Other Expense",
  "Other Income",
  "Payment to creditors",
  "Purchase",
  "Purchase of Asset",
  "Raising of Loan",
  "Receipt from Debtors",
  "Rent",
  "Repairs and Maintenance",
  "Revenue from Services",
  "Salaries and Wages",
  "Sale of Goods",
  "Short Term Investments Made",
  "Tax Expense",
  "Transportation Charges",
];

const SpendingContent = () => {
  const task = useSelector(selectTask);

  const completeTask = useCompleteTaskWithBroadcast();
  const data = task?.questions || [];

  console.log(data);
  const [rows, setRows] = useState([
    {
      voucherNo: "",
      date: "",
      particulars: "",
      mode: "",
      category: "",
      amount: "",
    },
  ]);

  const handleInputChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        voucherNo: "",
        date: "",
        particulars: "",
        mode: "",
        category: "",
        amount: "",
      },
    ]);
  };

  const handleDeleteRow = (index) => {
    if (rows.length > 1) {
      const newRows = [...rows];
      newRows.splice(index, 1);
      setRows(newRows);
    }
  };

  const validateData = () => {
    console.log(rows);
    if (rows.length !== data.length) {
      Swal.fire(
        "Invalid Input",
        "Number of inputs does not match the data.",
        "error"
      );
      return;
    }

    const isValid = rows.every((row, index) => {
      const correspondingData = data[index];
      return (
        row.voucherNo === correspondingData.voucherNo &&
        row.date === correspondingData.date &&
        row.mode.toLowerCase() === correspondingData.mode.toLowerCase() &&
        row.category.toLowerCase() ===
          correspondingData.category.toLowerCase() &&
        parseFloat(row.amount) === parseFloat(correspondingData.amount)
      );
    });

    if (isValid) {
      completeTask();
      Swal.fire("Task Complete", "All inputs are valid.", "success");
    } else {
      Swal.fire("Invalid Input", "Some inputs do not match the data.", "error");
    }
  };

  return (
    <>
      <div className={`${styles.content} mb-4`}>
        <div className={styles.container}>
          <div className={`${styles.tableSection} m-4`}>
            <div className={`${styles.tableHeaders} row`}>
              <div className="table-th col-1 col-lg-1 mt-0 w-10">Vch No.</div>
              <div className="table-th col-3 col-lg-2 mt-0">Date</div>
              <div className="table-th col mt-0">Particulars</div>
              <div className="table-th col-3 mt-0 col-lg-2">Mode</div>
              <div className="table-th col-3 mt-0 col-lg-2">Category</div>
              <div className="table-th col-3 mt-0 col-lg-2">Amount</div>
            </div>
            <div className={`${styles.tableRows} m-4`}>
              {rows.map((row, index) => (
                <div key={index} className={`${styles.tableRow} row`}>
                  <div className="col-1 col-lg-1 mt-0 w-10">
                    <input
                      type="text"
                      value={row.voucherNo}
                      onChange={(e) =>
                        handleInputChange(index, "voucherNo", e.target.value)
                      }
                      className="form-control text-center"
                    />
                  </div>
                  <div className="col-3 col-lg-2 mt-0">
                    <input
                      type="date"
                      value={row.date}
                      onChange={(e) =>
                        handleInputChange(index, "date", e.target.value)
                      }
                      className="form-control"
                    />
                  </div>
                  <div className="col mt-0">
                    <input
                      type="text"
                      value={row.particulars}
                      onChange={(e) =>
                        handleInputChange(index, "particulars", e.target.value)
                      }
                      className="form-control"
                    />
                  </div>
                  <div className="col-3 col-lg-2 mt-0">
                    <input
                      type="text"
                      placeholder="Select"
                      value={row.mode}
                      onFocus={(e) => (e.target.type = "select")}
                      onChange={(e) =>
                        handleInputChange(index, "mode", e.target.value)
                      }
                      list={`modeOptions${index}`}
                      className="form-control"
                    />
                    <datalist id={`modeOptions${index}`}>
                      {modeOptions.map((option, idx) => (
                        <option key={idx} value={option} />
                      ))}
                    </datalist>
                  </div>
                  <div className="col-3 col-lg-2 mt-0">
                    <input
                      type="text"
                      placeholder="Select"
                      value={row.category}
                      onFocus={(e) => (e.target.type = "select")}
                      onChange={(e) =>
                        handleInputChange(index, "category", e.target.value)
                      }
                      list={`categoryOptions${index}`}
                      className="form-control"
                    />
                    <datalist id={`categoryOptions${index}`}>
                      {categoryOptions.map((option, idx) => (
                        <option key={idx} value={option} />
                      ))}
                    </datalist>
                  </div>
                  <div className="col-3 col-lg-2 mt-0">
                    <input
                      type="text"
                      value={row.amount}
                      onChange={(e) =>
                        handleInputChange(index, "amount", e.target.value)
                      }
                      className="form-control text-end"
                    />
                  </div>
                  <div
                    className={`col-auto d-flex align-items-center ${styles.deleteButton}`}
                    onClick={() => handleDeleteRow(index)}
                  >
                    <FaTrashAlt />
                  </div>
                </div>
              ))}
            </div>
            <div className="table-row-actions px-3 mb-5">
              <button
                className="btn btn-outline-dark me-2"
                onClick={handleAddRow}
              >
                Add row
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className={`${styles.footer} mt-4`}>
        <div className={styles.container2}>
          <button className={styles.validateButton} onClick={validateData}>
            Validate
          </button>
        </div>
      </footer>
    </>
  );
};

export default SpendingContent;
