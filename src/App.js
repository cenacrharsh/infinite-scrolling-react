import { useState, useRef } from "react";

import useBookSearch from "./useBookSearch";

function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  const { loading, hasMore, books, error } = useBookSearch(query, pageNumber);
  return (
    <>
      <input type="text" value={query} onChange={handleSearch}></input>
      {books.map((book) => {
        return <div key={book}>{book}</div>;
      })}
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </>
  );
}

export default App;
