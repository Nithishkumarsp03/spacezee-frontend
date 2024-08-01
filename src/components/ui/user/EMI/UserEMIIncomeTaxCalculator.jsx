import React, { useState } from "react";
import styles from "./UserEMIIncomeTaxCalculator.module.css";

function UserEMIIncomeTaxCalculator() {
  const [assessmentYear, setAssessmentYear] = useState("");
  const [age, setAge] = useState("0");
  const [income, setIncome] = useState(0);
  const [deductions, setDeductions] = useState(0);
  const [result, setResult] = useState({ oldRegime: 0, newRegime: 0 });

  const handleCalculate = async () => {
    const grossIncome = income - deductions;
    const taxOldRegime = await calculateTaxOldRegime(grossIncome, age);
    const taxNewRegime = await calculateTaxNewRegime(grossIncome, age);

    setResult({
      oldRegime: taxOldRegime,
      newRegime: taxNewRegime,
    });
  };

  const calculateTaxOldRegime = async (income, ageCategory) => {
    // Use an API to get the tax rate if available, or use hardcoded values
    const taxRates = {
      below60: { slab1: 0.05, slab2: 0.2, slab3: 0.3 },
      above60: { slab1: 0.03, slab2: 0.2, slab3: 0.3 },
      above80: { slab1: 0.03, slab2: 0.2, slab3: 0.3 },
    };

    let tax = 0;

    // Simplified tax calculation
    if (ageCategory === "0") {
      tax = income * taxRates.below60.slab3; // Simplified for demonstration
    } else if (ageCategory === "1") {
      tax = income * taxRates.above60.slab3;
    } else if (ageCategory === "2") {
      tax = income * taxRates.above80.slab3;
    }

    return tax.toFixed(2);
  };

  const calculateTaxNewRegime = async (income, ageCategory) => {
    // Use an API to get the tax rate if available, or use hardcoded values
    const taxRates = {
      below60: { slab1: 0.05, slab2: 0.2, slab3: 0.3 },
      above60: { slab1: 0.03, slab2: 0.2, slab3: 0.3 },
      above80: { slab1: 0.03, slab2: 0.2, slab3: 0.3 },
    };

    let tax = 0;

    // Simplified tax calculation
    if (ageCategory === "0") {
      tax = income * taxRates.below60.slab3; // Simplified for demonstration
    } else if (ageCategory === "1") {
      tax = income * taxRates.above60.slab3;
    } else if (ageCategory === "2") {
      tax = income * taxRates.above80.slab3;
    }

    return tax.toFixed(2);
  };

  return (
    <div className={styles.incomeTaxCalculator}>
      <div className={styles.formGroup}>
        <label>Assessment Year:</label>
        <select
          value={assessmentYear}
          onChange={(e) => setAssessmentYear(e.target.value)}
          className="form-select"
        >
          <option value="2023-24">2023-24</option>
          <option value="2022-23">2022-23</option>
          <option value="2021-22">2021-22</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label>Age:</label>
        <select
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="form-select"
        >
          <option value="0">Age below 60</option>
          <option value="1">Age 60 or above but below 80</option>
          <option value="2">Age 80 or above</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label>Gross Total Income:</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(parseFloat(e.target.value))}
          className="form-control"
          placeholder="Enter Gross Total Income"
        />
      </div>
      <div className={styles.formGroup}>
        <label>Deductions:</label>
        <input
          type="number"
          value={deductions}
          onChange={(e) => setDeductions(parseFloat(e.target.value))}
          className="form-control"
          placeholder="Enter Deductions"
        />
      </div>
      <div className={styles.resultDisplay}>
        <div>
          <strong>Income Tax under Old Tax Regime: </strong>₹{result.oldRegime}
        </div>
        <div>
          <strong>Income Tax under New Tax Regime: </strong>₹{result.newRegime}
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={handleCalculate} className="btn btn-primary">
          Calculate
        </button>
        <button
          onClick={() => {
            setIncome(0);
            setDeductions(0);
            setResult({ oldRegime: 0, newRegime: 0 });
          }}
          className="btn btn-secondary"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default UserEMIIncomeTaxCalculator;
