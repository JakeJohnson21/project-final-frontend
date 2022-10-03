import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

function Nav({
  search,
  setSearch,
  isOpen,
  isComingSoonActive,
  isTopRatedActive,
  isNowPlayingActive,
  handleComingSoon,
  handleTopRated,
  handleNowPlaying,
  isReadmeActive,
  handleReadMe,
}) {
  const mobileMenuClassName = `nav ${isOpen ? "mobile__menu_open" : ""}`;

  return (
    <section className={mobileMenuClassName}>
      <div className="nav__button_container">
        <Link className="nav__link" to="/coming-soon">
          <button
            className={`nav__button ${
              isComingSoonActive ? "nav__button-active" : "nav__button-inactive"
            }`}
            onClick={handleComingSoon}
          >
            Coming Soon
          </button>
        </Link>
        <Link className="nav__link" to="/now-playing">
          <button
            className={`nav__button ${
              isNowPlayingActive ? "nav__button-active" : "nav__button-inactive"
            }`}
            onClick={handleNowPlaying}
          >
            Now Playing
          </button>
        </Link>
        <Link className="nav__link" to="/top-rated">
          <button
            className={`nav__button ${
              isTopRatedActive ? "nav__button-active" : "nav__button-inactive"
            }`}
            onClick={handleTopRated}
          >
            Top Rated
          </button>
        </Link>
        <Link className="nav__link readme__link" to="/readme">
          <button
            className={`nav__button ${
              isReadmeActive ? "nav__button-active" : "nav__button-inactive"
            }`}
            onClick={handleReadMe}
          >
            README
          </button>
        </Link>
      </div>

      <Link className="nav__search" to="/search">
        <Search
          search={search}
          setSearch={setSearch}
          menuFormatStyles={"search__container"}
        />
      </Link>
    </section>
  );
}
export default Nav;
