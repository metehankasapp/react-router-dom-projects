import { useEffect } from "react";
import { Routes, useParams, Route, Link, useLocation } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlatedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
  const location = useLocation();

  const params = useParams();
  console.log(location);

  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="centered focused">{error}</div>;
  }

  if (status === "completed" && (!loadedQuote || loadedQuote.length === 0)) {
    return <NoQuotesFound />;
  }

  if (!loadedQuote) {
    return <p>No quote found !</p>;
  }
  return (
    <>
      <HighlatedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Routes>
        <Route
          path={`*`}
          exact
          element={
            <div className="centered">
              <Link className="btn--flat" to={`comments`}>
                {" "}
                Load Comments
              </Link>
            </div>
          }
        />
        <Route path={`comments`} element={<Comments />} />
      </Routes>
    </>
  );
};

export default QuoteDetail;
