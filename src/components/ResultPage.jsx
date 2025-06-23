import { useNavigate } from "react-router-dom";
import ResultTitle from "./ResultTitle";
import ProductSecton from "./ProductSection";
import "../result.css";

export default function ResultPage() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center result-background text-white text-center">
        <ResultTitle />
      </div>
      <ProductSecton />
    </>
  );
}
