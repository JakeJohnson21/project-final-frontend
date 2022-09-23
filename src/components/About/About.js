import React from "react";
import FiveStarRating from "../Rating/FiveStarRating";

function About({ isOpen, onClose, movieData, genres }) {
  const popupToggle = `about ${
    isOpen ? "about__is_open about__background " : ""
  }`;

  return (
    <section className={popupToggle}>
      <div className="about__container">
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
            <FiveStarRating
              setStyle={"about__rating"}
              ratingAverage={movieData.vote_average / 2}
              rateMeText={"rate-me__visible"}
            />
          </div>
          <div className="about__body">
            <p className="about__genres">{genres}</p>
            <p className="about__overview">{movieData.overview}</p>
            <p className="about__release">{movieData.release_date}</p>
          </div>
        </div>

        <button className="about__close_button" onClick={onClose} />
      </div>
    </section>
  );
}
export default About;
