import React, { useState } from "react";
import styles from "./UserEMIInvestmentCalculator.module.css";

function UserEMIInvestmentCalculator() {
  const [calculationType, setCalculationType] = useState("duration");
  const [sip, setSip] = useState("");
  const [rate, setRate] = useState("");
  const [finalValue, setFinalValue] = useState("");
  const [duration, setDuration] = useState("");
  const [result, setResult] = useState({ returnInValue: 0, answer: 0 });

  const calculateDuration = (sip, rate, finalValue) => {
    const monthlyRate = rate / 12 / 100;
    const numerator = Math.log((finalValue * monthlyRate) / sip + 1);
    const denominator = Math.log(1 + monthlyRate);
    return numerator / denominator;
  };

  const calculateSIP = (finalValue, rate, duration) => {
    const monthlyRate = rate / 12 / 100;
    return (
      finalValue /
      ((Math.pow(1 + monthlyRate, duration) - 1) / monthlyRate) /
      (1 + monthlyRate)
    );
  };

  const calculateRate = (sip, finalValue, duration) => {
    const rate = ((finalValue / sip) ** (1 / duration) - 1) * 100 * 12;
    return rate;
  };

  const calculateFinalValue = (sip, rate, duration) => {
    const monthlyRate = rate / 12 / 100;
    return sip * ((Math.pow(1 + monthlyRate, duration) - 1) / monthlyRate);
  };

  const handleCalculate = () => {
    let returnInValue = 0;
    let answer = 0;

    if (calculationType === "duration") {
      if (sip && rate && finalValue) {
        const durationValue = calculateDuration(sip, rate, finalValue);
        returnInValue = finalValue - sip * durationValue;
        setDuration(Math.round(durationValue));
        answer = Math.round(durationValue);
      }
    } else if (calculationType === "sip") {
      if (finalValue && rate && duration) {
        const sipValue = calculateSIP(finalValue, rate, duration);
        returnInValue = finalValue - sipValue * duration;
        setSip(sipValue.toFixed(2));
        answer = sipValue.toFixed(2);
      }
    } else if (calculationType === "rate") {
      if (sip && finalValue && duration) {
        const rateValue = calculateRate(sip, finalValue, duration);
        setRate(rateValue.toFixed(2));
        answer = rateValue.toFixed(2);
      }
    } else if (calculationType === "finalValue") {
      if (sip && rate && duration) {
        const finalValueCalc = calculateFinalValue(sip, rate, duration);
        returnInValue = finalValueCalc - sip * duration;
        setFinalValue(finalValueCalc.toFixed(2));
        answer = finalValueCalc.toFixed(2);
      }
    }

    setResult({
      returnInValue: returnInValue.toFixed(2),
      answer,
    });
  };

  const getCalculationLabel = () => {
    switch (calculationType) {
      case "duration":
        return "Duration";
      case "sip":
        return "SIP Installment";
      case "rate":
        return "Rate of Return";
      case "finalValue":
        return "Final SIP Value";
      default:
        return "";
    }
  };

  return (
    <div className={styles.investmentCalculator}>
      <div className={styles.formGroup}>
        <label>Find What:</label>
        <select
          value={calculationType}
          onChange={(e) => setCalculationType(e.target.value)}
          className="form-select"
        >
          <option value="duration">Duration (months)</option>
          <option value="sip">SIP Installment</option>
          <option value="rate">Rate of Return</option>
          <option value="finalValue">Final SIP Value</option>
        </select>
      </div>
      {calculationType !== "sip" && (
        <div className={styles.formGroup}>
          <label>SIP Installment:</label>
          <input
            type="number"
            value={sip}
            onChange={(e) => setSip(e.target.value)}
            className="form-control"
            placeholder="Enter SIP"
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
      {calculationType !== "finalValue" && (
        <div className={styles.formGroup}>
          <label>Final SIP Value:</label>
          <input
            type="number"
            value={finalValue}
            onChange={(e) => setFinalValue(e.target.value)}
            className="form-control"
            placeholder="Enter Final Value"
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
      <div className={styles.resultDisplay}>
        <strong>Result:</strong>
        <div>
          {getCalculationLabel()}: {result.answer || 0}
        </div>
        <div>Return in Value: ₹{result.returnInValue || 0}</div>
      </div>
      <button onClick={handleCalculate} className="btn btn-primary mt-3">
        Calculate
      </button>
    </div>
  );
}

export default UserEMIInvestmentCalculator;
