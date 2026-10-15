import { useState, useEffect } from "react";

const questions = [
  {
    q: "What is React?",
    options: ["Library", "Database", "Browser", "Language"],
    ans: "Library"
  },
  {
    q: "Which hook is used for state?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    ans: "useState"
  },
  {
    q: "Which language is used with React?",
    options: ["Java", "Python", "JavaScript", "C"],
    ans: "JavaScript"
  },
  {
    q: "How do we pass data to a child component?",
    options: ["Props", "Loops", "CSS", "Events"],
    ans: "Props"
  },
  {
    q: "Which hook is used for side effects?",
    options: ["useState", "useEffect", "useRef", "useMemo"],
    ans: "useEffect"
  }
];

function App() {
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [time, setTime] = useState(30);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;

    if (time === 0) {
      setDone(true);
      return;
    }

    const t = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(t);
  }, [time, done]);

  function next() {
    if (answer === questions[i].ans) {
      setScore(score + 1);
    }

    if (i === questions.length - 1) {
      setDone(true);
    } else {
      setI(i + 1);
      setAnswer("");
    }
  }

  if (done) {
    return <h2>Your Score: {score} / {questions.length}</h2>;
  }

  return (
    <div>
      <h2>Quiz</h2>
      <p>Time left: {time} seconds</p>
      <h3>{questions[i].q}</h3>

      {questions[i].options.map((op) => (
        <p key={op}>
          <input
            type="radio"
            name="answer"
            checked={answer === op}
            onChange={() => setAnswer(op)}
          />
          {op}
        </p>
      ))}

      <button onClick={next}>
        {i === questions.length - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
}

export default App;
