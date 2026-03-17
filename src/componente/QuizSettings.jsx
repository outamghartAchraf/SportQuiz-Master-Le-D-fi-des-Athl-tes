import React, { useState } from "react";

function QuizSettings({ onStartQuiz }) {
  const [numQuestions, setNumQuestions] = useState(5);
  const [difficulty, setDifficulty] = useState("easy");

  const handleStart = () => {
    onStartQuiz(numQuestions, difficulty);
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-title">Paramètres du Quiz</h2>

      <div className="form-group">
        <label>Nombre de questions :</label>
        <input
          type="number"
          min="1"
          max="20"
          value={numQuestions}
          onChange={(e) => setNumQuestions(Number(e.target.value))}
        />
      </div>

      <div className="form-group">
        <label>Difficulté :</label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Facile</option>
          <option value="medium">Moyen</option>
          <option value="hard">Difficile</option>
        </select>
      </div>

      <button className="start-btn" onClick={handleStart}>
        Commencer le Quiz
      </button>
    </div>
  );
}

export default QuizSettings;