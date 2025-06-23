import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

export default function ResultTitle() {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz");
  };
  return (
    <>
      <h1>
        Build you everyday self
        <br />
        care routine.
      </h1>
      <p>
        Perfect for if you're looking for soft, nourished skin, our moisturizing
        body <br />
        washes are made with skin-natural nutrients that work with your skin to{" "}
        <br />
        replenish moisture. With a light formula, the bubbly lather leaves your
        skin
        <br /> feeling cleansed and cared for. And by choosing relaxing
        fragrances you can
        <br /> add a moment of calm to the end of your day.
      </p>
      <button className="result-button" onClick={startQuiz}>
        Retake the quiz
      </button>
    </>
  );
}
