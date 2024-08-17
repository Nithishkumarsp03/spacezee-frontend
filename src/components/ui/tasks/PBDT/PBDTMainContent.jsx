import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FormControl, Dropdown } from "react-bootstrap";
import styles from "./PBDTMainContent.module.css";

const PBDTContent = () => {
  const incomeOptions = [
    "Acquisition of Other Intangible Assets",
    "Administration Expenses",
    "Agriculture Expense",
    "Agriculture Income",
    "Bank Charges",
    "Carriage Inwards",
    "Carriage Outwards",
    "Commission Expenses",
    "Commission Income",
    "Consultancy Expense",
    "Consultancy Income",
    "Deposits",
    "Deposits Accepted",
    "Directors/ Remuneration",
    "Discount Allowed",
    "Discount Received",
    "Dividend Received",
    "Donation",
    "Electricity Charges",
    "Food and Refreshments",
    "Freight",
    "Fuel Expenses",
    "General Expenses",
    "Grants and Subsidies",
    "Income from Repairs",
    "Insurance Premium Expenses",
    "Interest Expenses",
    "Interest Income",
    "Internet and Telephone Charges",
    "Legal Charges",
    "Licences, Fees, and Permits",
    "Loading and Unloading",
    "Loans from Partners/Relatives",
    "Miscellaneous Expenses",
    "Other Income",
    "Patent",
    "Postage and Courier",
    "Preliminary Expenses",
    "Printing and Stationery",
    "Professional Fees",
    "Purchase of Computers and Peripherals",
    "Purchase of Investments",
    "Purchase of Land and Building",
    "Purchase of Motor Vehicle",
    "Purchase of Office Furniture",
    "Purchase of Other Fixed Assets",
    "Purchase of Plant and Machinery",
    "Purchases",
    "Raising of Long-Term Loans",
    "Refund of Taxes",
    "Rent Expense",
    "Rental Income",
    "Repairs and Maintenance",
    "Repayment of Long-Term Loans from Banks/Financial Institutions",
    "Royalty",
    "Royalty Income",
    "Salary Expense",
    "Sale of Investment",
    "Sale of Land and Building",
    "Sale of Motor Vehicle",
    "Sale of Office Furniture",
    "Sale of Other Fixed Assets",
    "Sale of Other Intangible Assets",
    "Sale of Patents",
    "Sale of Periodicals",
    "Sale of Plant and Machinery",
    "Sale of Scrap",
    "Sales",
    "Sales Promotion Expense",
    "Selling and Distribution Expenses",
    "Software Expense",
    "Subscription Charges",
    "Tax Expenses",
    "Trademarks",
    "Transportation Charges",
    "Travelling Expense",
    "Vehicle Running Expenses",
    "Wages",
    "Water Expense",
    "Withdrawal of Deposits",
  ];

  const expenditureOptions = [
    "Acquisition of Other Intangible Assets",
    "Administration Expenses",
    "Agriculture Expense",
    "Bank Charges",
    "Carriage Inwards",
    "Carriage Outwards",
    "Commission Expenses",
    "Consultancy Expense",
    "Deposits",
    "Directors/ Remuneration",
    "Discount Allowed",
    "Donation",
    "Electricity Charges",
    "Food and Refreshments",
    "Freight",
    "Fuel Expenses",
    "General Expenses",
    "Grants and Subsidies",
    "Insurance Premium Expenses",
    "Interest Expenses",
    "Internet and Telephone Charges",
    "Legal Charges",
    "Licences, Fees, and Permits",
    "Loading and Unloading",
    "Loans from Partners/Relatives",
    "Miscellaneous Expenses",
    "Patent",
    "Postage and Courier",
    "Preliminary Expenses",
    "Printing and Stationery",
    "Professional Fees",
    "Purchase of Computers and Peripherals",
    "Purchase of Investments",
    "Purchase of Land and Building",
    "Purchase of Motor Vehicle",
    "Purchase of Office Furniture",
    "Purchase of Other Fixed Assets",
    "Purchase of Plant and Machinery",
    "Purchases",
    "Raising of Long-Term Loans",
    "Refund of Taxes",
    "Rent Expense",
    "Repairs and Maintenance",
    "Repayment of Long-Term Loans from Banks/Financial Institutions",
    "Royalty",
    "Salary Expense",
    "Sales Promotion Expense",
    "Selling and Distribution Expenses",
    "Software Expense",
    "Subscription Charges",
    "Tax Expenses",
    "Trademarks",
    "Transportation Charges",
    "Travelling Expense",
    "Vehicle Running Expenses",
    "Wages",
    "Water Expense",
    "Withdrawal of Deposits",
  ];

  const [incomeRows, setIncomeRows] = useState([{ option: "", amount: "" }]);
  const [expenditureRows, setExpenditureRows] = useState([
    { option: "", amount: "" },
  ]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenditure, setTotalExpenditure] = useState(0);

  const handleAddRow = (section) => {
    if (section === "income") {
      setIncomeRows([...incomeRows, { option: "", amount: "" }]);
    } else if (section === "expenditure") {
      setExpenditureRows([...expenditureRows, { option: "", amount: "" }]);
    }
  };

  const handleDeleteRow = (index, section) => {
    if (section === "income") {
      if (incomeRows.length > 1) {
        const newRows = [...incomeRows];
        newRows.splice(index, 1);
        setIncomeRows(newRows);
        calculateTotal("income", newRows);
      }
    } else if (section === "expenditure") {
      if (expenditureRows.length > 1) {
        const newRows = [...expenditureRows];
        newRows.splice(index, 1);
        setExpenditureRows(newRows);
        calculateTotal("expenditure", newRows);
      }
    }
  };

  const handleSelectChange = (value, index, section) => {
    if (section === "income") {
      const newRows = [...incomeRows];
      newRows[index].option = value;
      setIncomeRows(newRows);
      if (index === incomeRows.length - 1 && value !== "") {
        handleAddRow(section);
      }
    } else if (section === "expenditure") {
      const newRows = [...expenditureRows];
      newRows[index].option = value;
      setExpenditureRows(newRows);
      if (index === expenditureRows.length - 1 && value !== "") {
        handleAddRow(section);
      }
    }
  };

  const handleAmountChange = (e, index, section) => {
    const value = e.target.value.replace(/,/g, "");
    if (section === "income") {
      const newRows = [...incomeRows];
      newRows[index].amount = value;
      setIncomeRows(newRows);
      calculateTotal("income", newRows);
    } else if (section === "expenditure") {
      const newRows = [...expenditureRows];
      newRows[index].amount = value;
      setExpenditureRows(newRows);
      calculateTotal("expenditure", newRows);
    }
  };

  const calculateTotal = (section, rows) => {
    const total = rows.reduce((acc, row) => {
      const amount = parseFloat(row.amount.replace(/,/g, "")) || 0;
      return acc + amount;
    }, 0);

    if (section === "income") {
      setTotalIncome(total);
    } else if (section === "expenditure") {
      setTotalExpenditure(total);
    }
  };

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>Expected Income/Receipts</div>
            <div className={styles.cardAmount}>Amount (₹)</div>
          </div>
          <div className="m-4">
            {incomeRows.map((row, index) => (
              <div className="row mb-3" key={index}>
                <div className="col-8">
                  <Dropdown
                    onSelect={(value) =>
                      handleSelectChange(value, index, "income")
                    }
                  >
                    <Dropdown.Toggle
                      as={FormControl}
                      className={styles.inputField}
                      placeholder="~select~"
                      value={row.option}
                      onChange={(e) =>
                        handleSelectChange(e.target.value, index, "income")
                      }
                    />
                    <Dropdown.Menu>
                      {incomeOptions
                        .filter(
                          (option) =>
                            option
                              .toLowerCase()
                              .includes(row.option.toLowerCase()) ||
                            row.option === ""
                        )
                        .map((option, idx) => (
                          <Dropdown.Item key={idx} eventKey={option}>
                            {option}
                          </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="col-3">
                  <input
                    type="text"
                    placeholder="Amount"
                    inputMode="numeric"
                    className={styles.inputField}
                    value={formatNumberWithCommas(row.amount)}
                    onChange={(e) => handleAmountChange(e, index, "income")}
                  />
                </div>
                <div className="col-1 d-flex align-items-center">
                  <div
                    className={styles.deleteButton}
                    onClick={() => handleDeleteRow(index, "income")}
                  >
                    <FaTrashAlt />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.totalSection}>
            <h4>Total of Income/Receipt</h4>
            <h4>₹{formatNumberWithCommas(totalIncome)}</h4>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>
              Expected Expenditure/Payments
            </div>
            <div className={styles.cardAmount}>Amount (₹)</div>
          </div>
          <div className="m-4">
            {expenditureRows.map((row, index) => (
              <div className="row mb-3" key={index}>
                <div className="col-8">
                  <Dropdown
                    onSelect={(value) =>
                      handleSelectChange(value, index, "expenditure")
                    }
                  >
                    <Dropdown.Toggle
                      as={FormControl}
                      className={styles.inputField}
                      placeholder="~select~"
                      value={row.option}
                      onChange={(e) =>
                        handleSelectChange(e.target.value, index, "expenditure")
                      }
                    />
                    <Dropdown.Menu>
                      {expenditureOptions
                        .filter(
                          (option) =>
                            option
                              .toLowerCase()
                              .includes(row.option.toLowerCase()) ||
                            row.option === ""
                        )
                        .map((option, idx) => (
                          <Dropdown.Item key={idx} eventKey={option}>
                            {option}
                          </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="col-3">
                  <input
                    type="text"
                    placeholder="Amount"
                    inputMode="numeric"
                    className={styles.inputField}
                    value={formatNumberWithCommas(row.amount)}
                    onChange={(e) =>
                      handleAmountChange(e, index, "expenditure")
                    }
                  />
                </div>
                <div className="col-1 d-flex align-items-center">
                  <div
                    className={styles.deleteButton}
                    onClick={() => handleDeleteRow(index, "expenditure")}
                  >
                    <FaTrashAlt />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.totalSection}>
            <h4>Total of Expenditure/Payments</h4>
            <h4>₹{formatNumberWithCommas(totalExpenditure)}</h4>
          </div>
          <div className={styles.surplusSection}>
            <h4>Budget Surplus / (Deficit)</h4>
            <h2>₹{formatNumberWithCommas(totalIncome - totalExpenditure)}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PBDTContent;
