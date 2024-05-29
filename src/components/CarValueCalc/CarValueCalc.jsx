import { useEffect, useState } from "react";
import styles from "./CarValueCalc.module.css";

export default function CarValueCalc(props) {
  const [modelValue, setModelValue] = useState();
  const [yearValue, setYearValue] = useState();
  const [error, setError] = useState("");

  const handleInputModel = (e) => {
    setModelValue(e.target.value);
  };

  const handleInputYear = (e) => {
    setYearValue(e.target.value);
  };

  const handleClick = () => {
    fetch("http://localhost:3000/api/carValueCalc", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: modelValue,
        year: yearValue,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json[0] == "E") {
          setError(json);
          props.setCarValue("");
        } else {
          props.setCarValue(json);
        }
      });
  };

  return (
    <div className={styles.carValueDiv}>
      <h1>Calculate your car value</h1>
      <div className={styles.flex}>
        <div className={styles.left}>
          <h4 className={styles.question}>Input the model of your car</h4>
          <input type="text" onChange={handleInputModel} />
        </div>
        <div className={styles.right}>
          <h4 className={styles.question}>Input the year of your car</h4>
          <input type="number" onChange={handleInputYear} />
        </div>
      </div>
      <button className={styles.submitBtn} onClick={handleClick}>
        Submit
      </button>
      <p>
        Result:
        <span style={{ color: "red" }}> {error}</span>
        <span> {props.carValue}</span>
      </p>
    </div>
  );
}
