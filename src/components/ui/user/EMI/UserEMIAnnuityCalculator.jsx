import React, { useState } from "react";
import styles from "./UserEMIAnnuityCalculator.module.css";

function UserEMIAnnuityCalculator() {
  const [calculationType, setCalculationType] = useState("totalValue");
  const [investment, setInvestment] = useState("");
  const [rate, setRate] = useState("");
  const [duration, setDuration] = useState("");
  const [totalValue, setTotalValue] = useState("");
  const [result, setResult] = useState({ totalReturn: 0, answer: 0 });

  const calculateTotalValue = (investment, rate, duration) => {
    const monthlyRate = rate / 12 / 100;
    return (
      investment * ((Math.pow(1 + monthlyRate, duration) - 1) / monthlyRate)
    );
  };

  const calculateInvestmentRequired = (totalValue, rate, duration) => {
    const monthlyRate = rate / 12 / 100;
    return (
      totalValue / ((Math.pow(1 + monthlyRate, duration) - 1) / monthlyRate)
    );
  };

  const calculateRequiredRateOfReturn = (totalValue, investment, duration) => {
    return ((totalValue / investment) ** (1 / duration) - 1) * 100 * 12;
  };

  const calculateMinimumDuration = (totalValue, investment, rate) => {
    const monthlyRate = rate / 12 / 100;
    return (
      Math.log((totalValue / investment) * monthlyRate + 1) /
      Math.log(1 + monthlyRate)
    );
  };

  const handleCalculate = () => {
    let totalReturn = 0;
    let answer = 0;

    if (calculationType === "totalValue") {
      if (investment && rate && duration) {
        const totalValueCalc = calculateTotalValue(investment, rate, duration);
        totalReturn = totalValueCalc - investment * duration;
        setTotalValue(totalValueCalc.toFixed(2));
        answer = totalValueCalc.toFixed(2);
      }
    } else if (calculationType === "investment") {
      if (totalValue && rate && duration) {
        const investmentRequired = calculateInvestmentRequired(
          totalValue,
          rate,
          duration
        );
        totalReturn = totalValue - investmentRequired * duration;
        setInvestment(investmentRequired.toFixed(2));
        answer = investmentRequired.toFixed(2);
      }
    } else if (calculationType === "rate") {
      if (totalValue && investment && duration) {
        const rateValue = calculateRequiredRateOfReturn(
          totalValue,
          investment,
          duration
        );
        setRate(rateValue.toFixed(2));
        answer = rateValue.toFixed(2);
      }
    } else if (calculationType === "duration") {
      if (totalValue && investment && rate) {
        const durationValue = calculateMinimumDuration(
          totalValue,
          investment,
          rate
        );
        totalReturn = totalValue - investment * durationValue;
        setDuration(Math.round(durationValue));
        answer = Math.round(durationValue);
      }
    }

    setResult({
      totalReturn: totalReturn.toFixed(2),
      answer,
    });
  };

  const getCalculationLabel = () => {
    switch (calculationType) {
      case "totalValue":
        return "Total Value";
      case "investment":
        return "Investment Required";
      case "rate":
        return "Required Rate of Return";
      case "duration":
        return "Minimum Duration";
      default:
        return "";
    }
  };

  return (
    <div className={styles.annuityCalculator}>
      <div className={styles.formGroup}>
        <label>Find What:</label>
        <select
          value={calculationType}
          onChange={(e) => setCalculationType(e.target.value)}
          className="form-select"
        >
          <option value="totalValue">Total Value after the Period</option>
          <option value="investment">Investment Required</option>
          <option value="rate">Required Rate of Return</option>
          <option value="duration">Minimum Duration of the Plan</option>
        </select>
      </div>
      {calculationType !== "investment" && (
        <div className={styles.formGroup}>
          <label>Investment Amount:</label>
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
            className="form-control"
            placeholder="Enter Investment"
          />
        </div>
      )}
      {calculationType !== "rate" && (
        <div className={styles.formGroup}>
          <label>Rate of Return (% per annum):</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="form-control"
            placeholder="Enter Rate"
          />
        </div>
      )}
      {calculationType !== "duration" && (
        <div className={styles.formGroup}>
          <label>Duration of the Plan (months):</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="form-control"
            placeholder="Enter Duration"
          />
        </div>
      )}
      {calculationType !== "totalValue" && (
        <div className={styles.formGroup}>
          <label>Total Value after the Period:</label>
          <input
            type="number"
            value={totalValue}
            onChange={(e) => setTotalValue(e.target.value)}
            className="form-control"
            placeholder="Enter Total Value"
          />
        </div>
      )}
      <div className={styles.resultDisplay}>
        <strong>Result:</strong>
        <div>
          {getCalculationLabel()}: {result.answer || 0}
        </div>
        <div>Total Return: ₹{result.totalReturn || 0}</div>
      </div>
      <button onClick={handleCalculate} className="btn btn-primary mt-3">
        Calculate
      </button>
    </div>
  );
}

export default UserEMIAnnuityCalculator;
