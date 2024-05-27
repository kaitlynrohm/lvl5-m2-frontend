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
  const [carValue, setCarValue] = useState("a");
  const [riskRating, setRiskRating] = useState("a");
  const [quote, setQuote] = useState("");

  //Function
  const handleNext = () => {
    if (carValueDisplay) {
      setCarValueDisplay(false);
      setRiskRatingDisplay(true);
    } else if (riskRatingDisplay) {
      setRiskRatingDisplay(false);
      setQuoteDisplay(true);
    } else {
      console.log("Something went wrong");
    }
  };

  const handlePrev = () => {
    if (riskRatingDisplay) {
      setCarValueDisplay(true);
      setRiskRatingDisplay(false);
    } else if (quoteDisplay) {
      setRiskRatingDisplay(true);
      setQuoteDisplay(false);
    } else {
      console.log("Something went wrong");
    }
  };

  return (
    <div className="quote-questions">
      <div
        style={{ display: !carValueDisplay && "none" }}
        className="question-div"
      >
        <CarValueCalc />
        <div className="btn-div">
          <button className="question-btn" disabled={true}>
            Prev
          </button>
          <button
            className="question-btn"
            disabled={carValue ? false : true}
            onClick={handleNext}
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
          <button className="question-btn" onClick={handlePrev}>
            Prev
          </button>
          <button
            className="question-btn"
            disabled={riskRating ? false : true}
            onClick={handleNext}
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
          <button className="question-btn" onClick={handlePrev}>
            Prev
          </button>
          <button className="question-btn" disabled={true}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
