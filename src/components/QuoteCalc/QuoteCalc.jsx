import React, { useState } from "react";
import axios from "axios";
import styles from "./QuoteCalc.module.css";

function QuoteCalc() {
  const [carValue, setCarValue] = useState("");
  const [riskRating, setRiskRating] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/get_quote", {
        car_value: parseInt(carValue),
        risk_rating: parseInt(riskRating),
      });
      setResult(response.data);
      setError(null);
    } catch (err) {
      setError(err.response.data.error);
      setResult(null);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Insurance Quote</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Car Value:</label>
          <input
            type="number"
            value={carValue}
            onChange={(e) => setCarValue(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Risk Rating:</label>
          <input
            type="number"
            value={riskRating}
            onChange={(e) => setRiskRating(e.target.value)}
            min="1"
            max="5"
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Get Quote
        </button>
      </form>
      {result && (
        <div className={styles.result}>
          <h2>Premiums</h2>
          <p>Monthly Premium: ${result.monthly_premium}</p>
          <p>Yearly Premium: ${result.yearly_premium}</p>
        </div>
      )}
      {error && <p className={styles.error}>Error: {error}</p>}
    </div>
  );
}

export default QuoteCalc;
