import "./App.css";
import CarValueCalc from "./components/CarValueCalc/CarValueCalc";
import Header from "./components/Header";
import QuoteCalc from "./components/QuoteCalc/QuoteCalc";
import RiskRatingCalc from "./components/RiskRating/RiskRatingCalc";

function App() {
  return (
    <>
      <Header />
      <CarValueCalc />
      <RiskRatingCalc />
      <QuoteCalc />
    </>
  );
}

export default App;
