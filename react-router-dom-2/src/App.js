import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
/*components*/

import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuotes = React.lazy(() => import("./pages/NewQuotes"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const Layout = React.lazy(() => import("./components/layout/Layout"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      }
    >
      <Layout>
        <Routes>
          <Route path="/" exact element={<Navigate to="/quotes" />} />
          <Route path="/quotes" element={<AllQuotes />} exact />
          <Route path="/quotes/:quoteId/*" element={<QuoteDetail />} />
          <Route path="/new-quote" element={<NewQuotes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>{" "}
    </Suspense>
  );
}

export default App;
