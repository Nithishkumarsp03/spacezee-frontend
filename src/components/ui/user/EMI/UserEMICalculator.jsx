import React, { useState } from "react";
import { evaluate } from "mathjs";
import styles from "./UserEMICalculator.module.css";

function UserEMICalculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(null);

  const handleInput = (value) => {
    setExpression((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      const evalResult = evaluate(expression);
      setResult(evalResult);
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setExpression("");
    setResult(null);
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>
        <input
          type="text"
          className="form-control"
          value={expression}
          readOnly
        />
        <div className={styles.result}>
          Result: {result !== null ? result : ""}
        </div>
      </div>
      <div className={styles.keypad}>
        <div className={styles.row}>
          <button onClick={() => handleInput("7")}>7</button>
          <button onClick={() => handleInput("8")}>8</button>
          <button onClick={() => handleInput("9")}>9</button>
          <button onClick={() => handleInput("+")}>+</button>
        </div>
        <div className={styles.row}>
          <button onClick={() => handleInput("4")}>4</button>
          <button onClick={() => handleInput("5")}>5</button>
          <button onClick={() => handleInput("6")}>6</button>
          <button onClick={() => handleInput("-")}>-</button>
        </div>
        <div className={styles.row}>
          <button onClick={() => handleInput("1")}>1</button>
          <button onClick={() => handleInput("2")}>2</button>
          <button onClick={() => handleInput("3")}>3</button>
          <button onClick={() => handleInput("*")}>*</button>
        </div>
        <div className={styles.row}>
          <button onClick={() => handleInput("0")}>0</button>
          <button onClick={() => handleInput(".")}>.</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={() => handleInput("/")}>/</button>
        </div>
        <div className={styles.row}>
          <button onClick={clearInput} className={styles.clearButton}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserEMICalculator;
