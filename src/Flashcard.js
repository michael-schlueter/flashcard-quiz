import React, { useState, useRef, useEffect } from "react";

export default function Flashcard({ flashcard }) {
  //Managing State
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState("initial");

  // Managing Refs
  const frontEl = useRef();
  const backEl = useRef();

  // Managing Effects
  useEffect(() => {
    setMaxHeight();
  }, [flashcard.question, flashcard.answer, flashcard.options]);

  // Adding an Event Listener every time the browser window is resized to dynamically adjust the height of the question items
  useEffect(() => {
    window.addEventListener("resize", setMaxHeight);
    return () => {
      window.removeEventListener("resize", setMaxHeight);
    };
  }, []);

  // Getting the current height of the elements to determine the height of the question items
  const setMaxHeight = () => {
    const frontHeight = frontEl.current.getBoundingClientRect().height;
    const backHeight = backEl.current.getBoundingClientRect().height;
    setHeight(Math.max(frontHeight, backHeight, 100));
  };

  return (
    <div
      className={`card ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
      style={{ height: height }}
    >
      <div className="front" ref={frontEl}>
        {flashcard.question}
        <div className="flashcard-options">
          {flashcard.options.map((option) => {
            return (
              <div className="flashcard-option" key={option}>
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className="back" ref={backEl}>
        {flashcard.answer}
      </div>
    </div>
  );
}
