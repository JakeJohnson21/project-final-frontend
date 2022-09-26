import React from "react";

function Search({ search, setSearch }) {
  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <span className="search__container">
      <span className="search">
        <span className="">
          <input
            className="search__input"
            placeholder="Search movies"
            type="text"
            onChange={handleSearch}
            value={search}
            minLength="1"
          ></input>
          <i className="search__icon"></i>
        </span>
      </span>
    </span>
  );
}
export default Search;
