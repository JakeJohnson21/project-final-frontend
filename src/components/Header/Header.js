import React from "react";

function Header() {
  return (
    <header className="header">
      <p className="header__title">Movies</p>
      <div className="header__button_container">
        <button className="header__button">Movies</button>
        <button className="header__button">TV</button>
      </div>
    </header>
  );
}

export default Header;
