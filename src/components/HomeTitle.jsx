import { useNavigate } from "react-router-dom";

function HomeTitle() {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz");
  };
  return (
    <>
      <h1>
        Build a self care routine
        <br />
        suitable for you
      </h1>
      <p>
        Take out test to get a personalised self care
        <br />
        routine based on yourneeds.
      </p>
      <button className="title-button" onClick={startQuiz}>
        Start the quiz
      </button>
    </>
  );
}

export default HomeTitle;
