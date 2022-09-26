import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header__text">
        {" "}
        <p className="header__title">RMDb</p>
        <p className="header__subtitle">React Movie Database</p>
      </div>

      <div className="header__button_container">
        <button className="header__button">Home</button>
        <button className="header__button">Movies</button>
      </div>
    </header>
  );
}

export default Header;
