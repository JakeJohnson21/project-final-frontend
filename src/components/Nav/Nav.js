import React from "react";

function Nav() {
  return (
    <section className="nav">
      <div className="nav__button_container">
        <button className="nav__button">Coming Soon</button>
        <button className="nav__button">Popular</button>
        <button className="nav__button">Now Playing</button>
      </div>
      <div className="nav__search">
        <button className="nav__search_button" />
      </div>
    </section>
  );
}
export default Nav;
