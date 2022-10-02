import React from "react";

function Search({ search, setSearch, menuFormatStyles }) {
  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <span className={menuFormatStyles}>
      <input
        className="search__input"
        placeholder="Search movies"
        required
        type="text"
        onChange={handleSearch}
        value={search}
        minLength="1"
      ></input>
      <i className="search__icon"></i>
    </span>
  );
}
export default Search;
