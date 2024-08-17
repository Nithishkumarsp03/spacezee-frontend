import React from "react";
import styles from "./styles/DAFeatures.module.css";
import accountIcon from "./assets/account-icon.svg";
import depositeIcon from "./assets/deposite-icon.svg";
import loanIcon from "./assets/loan-icon.svg";
import insuranceIcon from "./assets/insurance-icon.svg";
import cardIcon from "./assets/card-icon.svg";
import investIcon from "./assets/invest-icon.svg";

const DAFeatures = () => {
  return (
    <section className="container section">
      <div className={styles.features}>
        <div className="row">
          <div className="col-4 col-sm-4 col-xl-2 text-center">
            <figure>
              <img src={accountIcon} alt="Accounts" />
              <figcaption>Accounts</figcaption>
            </figure>
          </div>
          <div className="col-4 col-sm-4 col-xl-2 text-center">
            <figure>
              <img src={depositeIcon} alt="Deposit" />
              <figcaption>Deposit</figcaption>
            </figure>
          </div>
          <div className="col-4 col-sm-4 col-xl-2 text-center">
            <figure>
              <img src={loanIcon} alt="Loans" />
              <figcaption>Loans</figcaption>
            </figure>
          </div>
          <div className="col-4 col-sm-4 col-xl-2 text-center">
            <figure>
              <img src={insuranceIcon} alt="Insurance" />
              <figcaption>Insurance</figcaption>
            </figure>
          </div>
          <div className="col-4 col-sm-4 col-xl-2 text-center">
            <figure>
              <img src={cardIcon} alt="Credit Cards" />
              <figcaption>Credit Cards</figcaption>
            </figure>
          </div>
          <div className="col-4 col-sm-4 col-xl-2 text-center">
            <figure>
              <img src={investIcon} alt="Investment" />
              <figcaption>Investment</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DAFeatures;
