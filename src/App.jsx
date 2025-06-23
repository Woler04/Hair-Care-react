import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Quiz from "./components/Quiz";
import ResultPage from "./components/ResultPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/results" element={<ResultPage />} />
    </Routes>
  );
}

export default App;
