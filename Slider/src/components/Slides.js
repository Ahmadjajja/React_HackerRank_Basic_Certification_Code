import React, { useState } from "react";

function Slides({ slides }) {
  const [index, setIndex] = useState(0);
  const restartHandler = () => {
    setIndex(0);
  };
  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          disabled={index == 0}
          onClick={restartHandler}
          data-testid="button-restart"
          className="small outlined"
        >
          Restart
        </button>
        <button
          disabled={index == 0}
          onClick={() => setIndex(index - 1)}
          data-testid="button-prev"
          className="small"
        >
          Prev
        </button>
        <button
          disabled={index == slides.length}
          onClick={() => setIndex(index + 1)}
          data-testid="button-next"
          className="small"
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[index].title}</h1>
        <p data-testid="text">{slides[index].text}</p>
      </div>
    </div>
  );
}

export default Slides;
