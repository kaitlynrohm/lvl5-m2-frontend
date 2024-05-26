import { useState } from "react";
import CarValueCalc from "./CarValueCalc/CarValueCalc";
import QuoteCalc from "./QuoteCalc/QuoteCalc";
import RiskRatingCalc from "./RiskRatingCalc/RiskRatingCalc";

export default function QuoteQuestions() {
  // Which question shows - states
  const [carValueDisplay, setCarValueDisplay] = useState(true);
  const [riskRatingDisplay, setRiskRatingDisplay] = useState(false);
  const [quoteDisplay, setQuoteDisplay] = useState(false);

  //states with api results
  const [carValue, setCarValue] = useState("");
  const [riskRating, setRiskRating] = useState("");
  const [quote, setQuote] = useState("");

  return (
    <div className="quote-questions">
      <div
        style={{ display: !carValueDisplay && "none" }}
        className="question-div"
      >
        <CarValueCalc />
        <div className="btn-div">
          <button className="question-btn" disabled="true">
            Prev
          </button>
          <button
            className="question-btn"
            disabled={carValue ? "false" : "true"}
          >
            Next
          </button>
        </div>
      </div>
      <div
        style={{ display: !riskRatingDisplay && "none" }}
        className="question-div"
      >
        <RiskRatingCalc />
        <div className="btn-div">
          <button className="question-btn">Prev</button>
          <button
            className="question-btn"
            disabled={riskRating ? "false" : "true"}
          >
            Next
          </button>
        </div>
      </div>
      <div
        style={{ display: !quoteDisplay && "none" }}
        className="question-div"
      >
        <QuoteCalc />
        <div className="btn-div">
          <button className="question-btn">Prev</button>
          <button className="question-btn" disabled={quote ? "false" : "true"}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
