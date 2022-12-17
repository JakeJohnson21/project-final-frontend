import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

function Header({
  search,
  setSearch,
  isOpen,
  handleOpen,
  onClose,
  handleIsHomepageActive,
}) {
  const mobileMenuIcon = `${
    isOpen ? "mobile__menu_closed-button" : "mobile__menu_open-button"
  }`;
  return (
    <header className="header">
      <i className={mobileMenuIcon} onClick={handleOpen}></i>
      <div className="header__content">
        <div className="header__text">
          <Link to="/home" className="home__link">
            <button className="header__title" onClick={handleIsHomepageActive}>
              RMDb
            </button>
          </Link>
        </div>
        <Link className="mobile__search_link" to="/search" onClick={onClose}>
          <Search
            search={search}
            setSearch={setSearch}
            menuFormatStyles={"mobile__search_container"}
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
