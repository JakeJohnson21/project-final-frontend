import React from "react";

function README() {
  return (
    <section className="readme__container">
      <h1 className="readme__title">Final Project</h1>
      <p className="readme__subtitle">Frontend movie database</p>
      <div className="readme__body">
        <p className="readme__paragraph">
          This project was created with React. I used the TMDb database API to
          create a simplistic movie info database.
        </p>
        <p className="readme__paragraph">
          I've implemented a horizontal carousel type menu that can be clicked
          through via left or right arrow buttons, or scroll/ dragged through.
        </p>
        <p className="readme__paragraph">
          The search function accesses the whole database so you can look up any
          movie. Clicking on any movie post will open the detailed about window.
          There are many different ways I have organized the content. On the
          more info popup, each movie has 5 similar or related movies. Which can
          lead you to discovering something you've never heard of.
        </p>
        <p className="readme__paragraph">
          List of technologies: <br></br>
          -React <br></br>
          -NPM <br></br>
          -CSS <br></br>
          -JSX <br></br>
          -REST API <br></br>
          -Resonsive Design<br></br>
        </p>
        <p className="readme__paragraph">
          I addressed most challanges with state and effect hooks. The site is
          fully responsive with extensive breakpoints for many different
          devices. The page effortlessly resizes with smooth transitions.
        </p>

        <p className="readme__paragraph">
          I extended the top rated collection by creating a page selection
          option. There are now 10 pages worth of top rated movies. I chose to
          go in my own direction with the UI.
        </p>
      </div>
    </section>
  );
}

export default README;
