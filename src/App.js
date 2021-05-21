import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import FlashcardList from "./FlashcardList";

function App() {
  // Managing State
  const [flashcards, setFlashcards] = useState([]);
  const [categories, setCategories] = useState([]);

  // Managing Refs
  const categoryEl = useRef();
  const amountEl = useRef();

  // Managing Effects
  useEffect(() => {
    getCategories();
  }, []);

  // API Request to get the list of categories for the dropdown menu
  const getCategories = async () => {
    const response = await fetch("https://opentdb.com/api_category.php");
    const data = await response.json();
    setCategories(data.trivia_categories);
  };

  // Decode HTML encoded text to normal string text
  const decodeString = (str) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  };

  // Event Handler to get the question, list of options, answer and an ID from the API
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${amountEl.current.value}&category=${categoryEl.current.value}`
    );
    const data = await response.json();
    setFlashcards(
      data.results.map((questionItem, index) => {
        const answer = decodeString(questionItem.correct_answer);
        const options = [
          ...questionItem.incorrect_answers.map((a) => decodeString(a)),
          answer,
        ];
        return {
          id: `${index}--${Date.now()}`, // creating a unique ID
          question: decodeString(questionItem.question),
          answer: answer,
          options: options.sort(() => Math.random() - 0.5), // randomly sorting the options in the array
        };
      })
    );
  };

  return (
    <>
      <form className="header" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryEl}>
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Number of Questions</label>
          <input
            type="number"
            id="amount"
            step="1"
            min="1"
            defaultValue={10}
            ref={amountEl}
          ></input>
        </div>
        <div className="form-group">
          <button className="btn">Generate</button>
        </div>
      </form>
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
    </>
  );
}

export default App;
