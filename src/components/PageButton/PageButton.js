import React from "react";

function PageButton({ setTopRatedPage, pageButtonStyle }) {
  function handlePageClick(pageButton) {
    setTopRatedPage(pageButton.target.textContent);
  }

  return (
    <ul className={pageButtonStyle}>
      <button className="directory__button" onClick={handlePageClick}>
        1
      </button>
      <button className="directory__button" onClick={handlePageClick}>
        2
      </button>
      <button className="directory__button" onClick={handlePageClick}>
        3
      </button>
      <button className="directory__button" onClick={handlePageClick}>
        4
      </button>
      <button className="directory__button" onClick={handlePageClick}>
        5
      </button>
      <button className="directory__button" onClick={handlePageClick}>
        6
      </button>
      <button className="directory__button" onClick={handlePageClick}>
        7
      </button>
      <button className="directory__button" onClick={handlePageClick}>
        8
      </button>
      <button className="directory__button" onClick={handlePageClick}>
        9
      </button>
      <button className="directory__button" onClick={handlePageClick}>
        10
      </button>
    </ul>
  );
}

export default PageButton;
