import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "../quiz.css";

const questions = [
  {
    text: "What's your hair type or texture?",
    options: ["Straight", "Curly", "Wavy", "Fine"],
  },
  {
    text: "How often do you wash your hair?",
    options: [
      "Daily",
      "Every other day",
      "Twice a week",
      "Once a week",
      "Every two weeks",
    ],
  },
  {
    text: "What benefit do you look for in your hair products?",
    options: [
      "Anti-breakage",
      "Hydration",
      "Soothing dry scalp",
      "Curl and coil enhancing",
      "Volume",
      "Repairs the appearance of damaged hair",
    ],
  },
  {
    text: "Is there anything troubling you about your hair?",
    options: ["Breakage", "Frizz", "Scalp dryness", "Damage", "Tangling"],
  },
  {
    text: "What is your natural hair color(s) today?",
    options: ["Black", "Brown", "Blonde", "Red/Orange", "Silver/Grey"],
  },
];

export default function Quiz() {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);
  const [pleaseSelect, setpleaseSelect] = useState("");
  const selectedAnswers = useRef(Array(questions.length).fill(null));

  const handleSelect = (idx) => {
    selectedAnswers[current] = questions[current].options[idx];
  };

  const next = () => {
    console.log(selectedAnswers);
    if (selectedAnswers[current] === undefined) {
      setpleaseSelect("Please select an option.");
    } else if (current < questions.length - 1) {
      setpleaseSelect("");
      setCurrent(current + 1);
    } else {
      checkResults();
    }
  };

  const back = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const progress = ((current + 1) / questions.length) * 100;

  const checkResults = () => {
    Cookies.set("quizAnswers", JSON.stringify(selectedAnswers), { expires: 7 });
    navigate("/results");
  };

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="position-relative d-flex align-items-center w-50">
          <div className="w-100 mb-4 text-center">
            <h2 className=" fw-light w-50 mx-auto">
              {questions[current].text}
            </h2>
          </div>
          {/* Progress circle (placeholder) */}
          <div
            style={{
              width: 101,
              height: 101,
              position: "absolute",
              top: "0px",
              right: "0px",
              transform: "translate(100%, 0%)",
            }}
          >
            <svg width="100%" height="100%" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#EEF7FB"
                strokeWidth="2"
              />
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="#AADDF3"
                strokeLinecap="round"
                strokeWidth="1.8"
                strokeDasharray={`${progress}, 100`}
                transform="rotate(-90 18 18)"
              />
            </svg>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                userSelect: "none",
              }}
            >
              <small>
                {current + 1}/{questions.length}
              </small>
            </div>
          </div>
        </div>
        <div className="rowing mb-4 w-75 justify-content-center">
          {questions[current].options.map((option, idx) => (
            <div key={idx} className="column p-1">
              <button
                className="btn-quiz text-start w-100 fw-normal"
                onClick={() => handleSelect(idx)}
              >
                {String.fromCharCode(97 + idx)}. {option}
              </button>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <button onClick={back} className="btn btn-link text-secondary">
            Back
          </button>

          <button onClick={next} className="btn btn-info text-white">
            Next question →
          </button>
        </div>
        <p className="text-danger p-2">{pleaseSelect}</p>
      </div>
    </>
  );
}
