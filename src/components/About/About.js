import React from "react";
import FiveStarRating from "../Rating/FiveStarRating";
import Preloader from "../Preloader/Preloader";
import Similar from "../Similar/Similar";

function About({
  isOpen,
  onClose,
  movieData,
  genres,
  isLoading,
  onPostClick,
  onAboutPopupOpen,
  collection,
}) {
  const popupToggle = `about ${isOpen ? "about__is_open" : "about"}`;

  return (
    <section className={popupToggle}>
      <div className="border__close_button" onClick={onClose}></div>
      <div className="about__container">
        <Preloader isLoading={isLoading} />
        <div className="about__content">
          <img
            className="about__poster"
            src={`https://image.tmdb.org/t/p/original/${
              movieData ? movieData.poster_path : ""
            }`}
            alt={movieData ? `A movie titled ${movieData.title}` : ""}
          />

          <div className="about__heading">
            <h2 className="about__title">{movieData.title}</h2>
            <p className="about__subtitle">{movieData.tagline}</p>
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
          <span className="about__bottom-background">
            <p className="similar__caption">Similar results</p>
            <Similar
              collection={collection}
              onPostClick={onPostClick}
              onAboutPopupOpen={onAboutPopupOpen}
              isLoading={isLoading}
              isOpen={isOpen}
            />
          </span>

          <button className="about__close_button" onClick={onClose} />
        </div>
      </div>
    </section>
  );
}
export default About;
