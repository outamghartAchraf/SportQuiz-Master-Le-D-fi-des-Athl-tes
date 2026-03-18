export const fetchQuestions = async (amount = 10, difficulty = "") => {

  let url = `https://opentdb.com/api.php?amount=${amount}&category=21`;
  if (difficulty) url += `&difficulty=${difficulty}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.response_code !== 0) throw new Error("No questions available");


}