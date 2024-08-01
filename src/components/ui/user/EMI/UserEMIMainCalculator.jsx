import React, { useState } from "react";
import UserEMIBorrowingCalculator from "./UserEMIBorrowingCalculator";
import UserEMIInvestmentCalculator from "./UserEMIInvestmentCalculator";
import UserEMIAnnuityCalculator from "./UserEMIAnnuityCalculator";
import UserEMIIncomeTaxCalculator from "./UserEMIIncomeTaxCalculator";
import styles from "./UserEMIMainCalculator.module.css";

function UserEMIMainCalculator() {
  const [selectedCalculator, setSelectedCalculator] = useState(null);

  const calculators = {
    borrowing: <UserEMIBorrowingCalculator />,
    investment: <UserEMIInvestmentCalculator />,
    annuity: <UserEMIAnnuityCalculator />,
    incomeTax: <UserEMIIncomeTaxCalculator />,
  };

  return (
    <div className={styles.mainCalculator}>
      {selectedCalculator ? (
        <div>
          <div className={styles.calculatorHeader}>
            <button
              className={styles.backButton}
              onClick={() => setSelectedCalculator(null)}
            >
              &lt; Back
            </button>
            <h3 className={styles.calculatorTitle}>
              {selectedCalculator.charAt(0).toUpperCase() +
                selectedCalculator.slice(1)}{" "}
              Calculator
            </h3>
          </div>
          {calculators[selectedCalculator]}
        </div>
      ) : (
        <div className={styles.calculatorOptions}>
          <button
            className={`${styles.optionButton} ${styles.borrowingButton}`}
            onClick={() => setSelectedCalculator("borrowing")}
          >
            Borrowing Calculator
          </button>
          <button
            className={`${styles.optionButton} ${styles.investmentButton}`}
            onClick={() => setSelectedCalculator("investment")}
          >
            Investment Calculator
          </button>
          <button
            className={`${styles.optionButton} ${styles.annuityButton}`}
            onClick={() => setSelectedCalculator("annuity")}
          >
            Annuity Calculator
          </button>
          <button
            className={`${styles.optionButton} ${styles.incomeTaxButton}`}
            onClick={() => setSelectedCalculator("incomeTax")}
          >
            Income Tax Calculator
          </button>
        </div>
      )}
    </div>
  );
}

export default UserEMIMainCalculator;
