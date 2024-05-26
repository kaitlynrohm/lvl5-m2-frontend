import "./App.css";
import Header from "./components/Header";
import QuoteQuestions from "./components/QuoteQuestions";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <QuoteQuestions />
      </div>
    </>
  );
}

export default App;
