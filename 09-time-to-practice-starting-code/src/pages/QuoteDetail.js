import React from "react";
import { useParams, Route, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maxmilian", text: "Learning React is Great!" },
];

const QuoteDetail = () => {
  const param = useParams();
  const quote = DUMMY_QUOTES.find((item) => item.id === param.id);

  if(!quote){
      return <p>No Quote Found</p>
  }

  console.log(param.id);

  return (
    <>
   
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${quote.id}`} exact>
      <div className="centered">
      <Link className="btn--flat" to={`/quotes/${quote.id}/comments`}>Load Comments</Link>
      </div>
      </Route>
      <Route path={`/quotes/${quote.id}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
