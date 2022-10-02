import React from "react";

function README() {
  return (
    <section className="readme__container">
      <h1 className="readme__title">Project Final Frontend</h1>
      <p className="readme__subtitle"></p>
      <div className="readme__body">
        <p className="readme__paragraph">
          This project was created with React and has great capabilities. I used
          the MDb database API to create a fresh take on a movie database. The
          site is much simpler but I've found it to be beautiful and fun to use.
          During the time I spent building it, new, or updated movies would pop
          up and it has been interesting.
        </p>
        <p className="readme__paragraph">
          I addressed most challanges with state and effect hooks. The site is
          fully responsive with extensive breakpoints for many different
          devices. The page effortlessly resizes with snappy transitions over
          the majority of elements.
        </p>
        <p className="readme__paragraph">
          I've implemented a horizontal menu that can be clicked through via
          left or right arrow buttons, or scroll/ dragged through.
        </p>
        <p className="readme__paragraph">
          The search function accesses the whole database so you can look up any
          movie. Clicking on any movie post will open the detailed about window.
          There are many different ways I have organized the content. On the
          more info popup, each movie has 5 similar or related movies.
        </p>
        <p className="readme__paragraph">
          I extended the top rated collection by creating a page selection
          option. There are now 10 pages worth of top rated movies. I chose to
          go in my own direction with the UI.
        </p>
        <p className="readme__paragraph"></p>
      </div>
    </section>
  );
}

export default README;
