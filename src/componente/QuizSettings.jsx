import React, { useState } from "react";

function QuizSettings({ onStartQuiz }) {
  const [numQuestions, setNumQuestions] = useState(5);
  const [difficulty, setDifficulty] = useState("easy");

  return (
<div className="quiz-settings">
  <h2>Paramètres du Quiz</h2>

  <label>
    Nombre de questions :
    <input
      type="number"
      min="1"
      max="20"
      value={numQuestions}
      onChange={(e) => setNumQuestions(e.target.value)}
    />
  </label>

  <label>
    Difficulté :
    <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
      <option value="easy">Facile</option>
      <option value="medium">Moyen</option>
      <option value="hard">Difficile</option>
    </select>
  </label>

  <button onClick={() => onStartQuiz(numQuestions, difficulty)}>
    Commencer le quiz
  </button>
</div>
  );
}

export default QuizSettings;