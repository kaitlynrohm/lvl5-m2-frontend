import { useState } from 'react'
import axios from 'axios'
import styles from './RiskRaitingCalc.module.css'

export default function RiskRatingCalc() {
  const [input, setInput] = useState('')
  const [risk, setRisk] = useState({})

  function submitClaimHistory(event) {
    event.preventDefault()

    axios
      .post('http://localhost:3000/risk_rating', {
        claim_history: input,
      })
      .then(({ data }) => setRisk(data))
      .catch((err) => console.error(err))
  }
  return (
    <>
      <div>RiskRatingCalc</div>
      <form className={styles.form}>
        <textarea
          type='text'
          rows='5'
          cols='33'
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={submitClaimHistory}>submit</button>
      </form>
      {risk && <div>risk result:{risk.risk_rating}</div>}
    </>
  )
}
