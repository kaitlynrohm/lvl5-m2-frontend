import "./App.css";
import CarValueCalc from "./components/CarValueCalc/CarValueCalc";
import Header from "./components/Header";
import QuoteCalc from "./components/QuoteCalc/QuoteCalc";
import RiskRatingCalc from "./components/RiskRatingCalc/RiskRatingCalc";

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
