import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

function Nav({ search, setSearch }) {
  const [isComingSoonActive, setIsComingSoonActive] = useState(false);
  const [isNowPlayingActive, setIsNowPlayingActive] = useState(false);
  const [isTopRatedActive, setIsTopRatedActive] = useState(false);

  function handleIsComingSoonActive() {
    setIsComingSoonActive(true);
    setIsNowPlayingActive(false);
    setIsTopRatedActive(false);
  }
  function handleIsNowPlayingActive() {
    setIsNowPlayingActive(true);
    setIsTopRatedActive(false);
    setIsComingSoonActive(false);
  }

  function handleIsTopRatedActive() {
    setIsTopRatedActive(true);
    setIsComingSoonActive(false);
    setIsNowPlayingActive(false);
  }

  return (
    <section className="nav">
      <div className="nav__button_container">
        <Link className="nav__link" to="/coming-soon">
          <button
            className={`nav__button ${
              isComingSoonActive ? "nav__button-active" : "nav__button-inactive"
            }`}
            onClick={handleIsComingSoonActive}
          >
            Coming Soon
          </button>
        </Link>
        <Link className="nav__link" to="/now-playing">
          <button
            className={`nav__button ${
              isNowPlayingActive ? "nav__button-active" : "nav__button-inactive"
            }`}
            onClick={handleIsNowPlayingActive}
          >
            Now Playing
          </button>
        </Link>
        <Link className="nav__link" to="/top-rated">
          <button
            className={`nav__button ${
              isTopRatedActive ? "nav__button-active" : "nav__button-inactive"
            }`}
            onClick={handleIsTopRatedActive}
          >
            Top Rated
          </button>
        </Link>
      </div>
      <Link className="nav__search" to="/search">
        <Search search={search} setSearch={setSearch} />
      </Link>
    </section>
  );
}
export default Nav;
