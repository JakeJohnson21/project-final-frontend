import React from "react";
import FiveStarRating from "../Rating/FiveStarRating";

import Similar from "../Similar/Similar";

function About({
  isOpen,
  onClose,
  movieData,
  genres,

  onPostClick,
  onAboutPopupOpen,
  collection,
}) {
  const runHours = Math.floor(movieData.runtime / 60);
  const runMinutes = movieData.runtime % 60;
  const runtime = `${runHours} hr ${runMinutes} minutes`;

  const popupToggle = `about ${isOpen ? "about__is_open" : "about"}`;

  return (
    <section className={popupToggle}>
      <div className="about__border" onClick={onClose}></div>
      <div className="about__container">
        <div className="about__content">
          <img
            className="about__poster"
            src={`https://image.tmdb.org/t/p/original/${
              movieData ? movieData.poster_path : ""
            }`}
            alt={movieData ? `A movie titled ${movieData.title}` : ""}
          />
          <div className="about__text">
            <div className="about__heading">
              <h2 className="about__title">{movieData.title}</h2>
              <p className="about__subtitle">{movieData.tagline}</p>
              <p className="about__runtime">{runtime}</p>
              <FiveStarRating
                ratingAverage={movieData.vote_average / 2}
                rateMeText={"rate-me__visible"}
                setStyle={"about__rating"}
                starSize="28px"
              />
            </div>
            <div className="about__body">
              <p className="about__genres">{genres}</p>
              <p className="about__release">{`Released Date: ${movieData.release_date}`}</p>
              <p className="about__overview">{movieData.overview}</p>
            </div>
          </div>
          <Similar
            collection={collection}
            onPostClick={onPostClick}
            onAboutPopupOpen={onAboutPopupOpen}
            isOpen={isOpen}
          />

          <button
            type="button"
            className="about__close_button"
            onClick={onClose}
          />
        </div>
      </div>
    </section>
  );
}
export default About;
