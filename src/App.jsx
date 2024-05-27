import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import QuoteQuestions from "./components/QuoteQuestions";
import QuoteCalc from "./components/QuoteCalc/QuoteCalc";
import CarValueCalc from "./components/CarValueCalc/CarValueCalc";
import RiskRatingCalc from "./components/RiskRatingCalc/RiskRatingCalc"; 

function App() {
  return (
    <Router>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<QuoteQuestions />} />
          <Route path="/quote-calc" element={<QuoteCalc />} />
          <Route path="/car-value-calc" element={<CarValueCalc />} />
          <Route path="/risk-rating-calc" element={<RiskRatingCalc />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
