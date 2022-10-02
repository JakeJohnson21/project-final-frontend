import React from "react";
import { Link } from "react-router-dom";

function Footer({ handleReadme }) {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">© 2022 Jake Johnson</p>
        <Link to="/readme" className="footer__link">
          <p>Check out my</p>
          <button
            type="button"
            className="footer__link-button"
            onClick={handleReadme}
          >
            README
          </button>
        </Link>
      </div>
    </footer>
  );
}
export default Footer;
