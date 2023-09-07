import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
  const sortingArtByVoteHandler = (copy) => {
    return copy.sort((a, b) => b.upvotes - a.upvotes);
  };
  const [state, setState] = useState(sortingArtByVoteHandler(articles));
  const sortByUpvotesHandler = () => {
    let copy = [...articles];
    setState(sortingArtByVoteHandler(copy));
  };
  const sortByDateHandler = () => {
    let copy = [...articles];
    const sortedArticles = copy.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setState(sortedArticles);
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          onClick={sortByUpvotesHandler}
          data-testid="most-upvoted-link"
          className="small"
        >
          Most Upvoted
        </button>
        <button
          onClick={sortByDateHandler}
          data-testid="most-recent-link"
          className="small"
        >
          Most Recent
        </button>
      </div>
      <Articles articles={state} />
    </div>
  );
}

export default App;
