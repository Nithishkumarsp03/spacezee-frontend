import React, { useState } from "react";
import styles from "./UserEMIBorrowingCalculator.module.css";

function UserEMIBorrowingCalculator() {
  const [calculationType, setCalculationType] = useState("emi");
  const [interestType, setInterestType] = useState("diminishing");
  const [principal, setPrincipal] = useState("");
  const [tenure, setTenure] = useState("");
  const [rate, setRate] = useState("");
  const [emi, setEmi] = useState("");
  const [result, setResult] = useState({
    totalInterest: 0,
    totalRepayment: 0,
    answer: 0,
  });
  console.log(interestType);
  const calculateEMI = (principal, rate, tenure) => {
    const monthlyRate = rate / 12 / 100;
    const numerator =
      principal * monthlyRate * Math.pow(1 + monthlyRate, tenure);
    const denominator = Math.pow(1 + monthlyRate, tenure) - 1;
    return numerator / denominator;
  };

  const calculatePrincipal = (emi, rate, tenure) => {
    const monthlyRate = rate / 12 / 100;
    const numerator = emi * (Math.pow(1 + monthlyRate, tenure) - 1);
    const denominator = monthlyRate * Math.pow(1 + monthlyRate, tenure);
    return numerator / denominator;
  };

  const calculateTenure = (emi, rate, principal) => {
    const monthlyRate = rate / 12 / 100;
    const numerator = Math.log(emi / (emi - principal * monthlyRate));
    const denominator = Math.log(1 + monthlyRate);
    return numerator / denominator;
  };

  const calculateRate = (emi, principal, tenure) => {
    const rate = ((emi / principal) * 12 * 100).toFixed(2);
    return rate;
  };

  const handleCalculate = () => {
    let totalInterest = 0;
    let totalRepayment = 0;
    let answer = 0;

    if (calculationType === "emi") {
      if (principal && rate && tenure) {
        const emiValue = calculateEMI(principal, rate, tenure);
        totalRepayment = emiValue * tenure;
        totalInterest = totalRepayment - principal;
        setEmi(emiValue.toFixed(2));
        answer = emiValue.toFixed(2);
      }
    } else if (calculationType === "principal") {
      if (emi && rate && tenure) {
        const principalValue = calculatePrincipal(emi, rate, tenure);
        totalRepayment = emi * tenure;
        totalInterest = totalRepayment - principalValue;
        setPrincipal(principalValue.toFixed(2));
        answer = principalValue.toFixed(2);
      }
    } else if (calculationType === "tenure") {
      if (emi && rate && principal) {
        const tenureValue = calculateTenure(emi, rate, principal);
        totalRepayment = emi * tenureValue;
        totalInterest = totalRepayment - principal;
        setTenure(Math.round(tenureValue));
        answer = Math.round(tenureValue);
      }
    } else if (calculationType === "rate") {
      if (emi && principal) {
        const rateValue = calculateRate(emi, principal);
        setRate(rateValue);
        answer = rateValue;
      }
    }

    setResult({
      totalInterest: totalInterest.toFixed(2),
      totalRepayment: totalRepayment.toFixed(2),
      answer,
    });
  };

  const getCalculationLabel = () => {
    switch (calculationType) {
      case "emi":
        return "EMI";
      case "principal":
        return "Principal Amount";
      case "tenure":
        return "Tenure";
      case "rate":
        return "Interest Rate";
      default:
        return "";
    }
  };

  return (
    <div className={styles.borrowingCalculator}>
      <div className={styles.formGroup}>
        <label>Interest Type:</label>
        <select
          value={interestType}
          onChange={(e) => setInterestType(e.target.value)}
          className="form-select"
        >
          <option value="diminishing">Diminishing Rate</option>
          <option value="slm">SLM</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label>Find What:</label>
        <select
          value={calculationType}
          onChange={(e) => setCalculationType(e.target.value)}
          className="form-select"
        >
          <option value="emi">EMI</option>
          <option value="principal">Principal Amount</option>
          <option value="tenure">Tenure</option>
          <option value="rate">Interest Rate</option>
        </select>
      </div>
      {calculationType !== "emi" && (
        <div className={styles.formGroup}>
          <label>EMI:</label>
          <input
            type="number"
            value={emi}
            onChange={(e) => setEmi(e.target.value)}
            className="form-control"
            placeholder="Enter EMI"
          />
        </div>
      )}
      {calculationType !== "principal" && (
        <div className={styles.formGroup}>
          <label>Principal Amount:</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="form-control"
            placeholder="Enter Principal"
          />
        </div>
      )}
      {calculationType !== "tenure" && (
        <div className={styles.formGroup}>
          <label>Tenure (months):</label>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            className="form-control"
            placeholder="Enter Tenure"
          />
        </div>
      )}
      {calculationType !== "rate" && (
        <div className={styles.formGroup}>
          <label>Interest Rate (% per annum):</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="form-control"
            placeholder="Enter Rate"
          />
        </div>
      )}
      <div className={styles.resultDisplay}>
        <strong>Result:</strong>
        <div>
          {getCalculationLabel()}: ₹{result.answer || 0}
        </div>
        <div>Total Interest: ₹{result.totalInterest || 0}</div>
        <div>Total Repayment: ₹{result.totalRepayment || 0}</div>
      </div>
      <button onClick={handleCalculate} className="btn btn-primary mt-3">
        Calculate
      </button>
    </div>
  );
}

export default UserEMIBorrowingCalculator;
