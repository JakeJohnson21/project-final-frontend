import React, { useRef, useState, useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import { Link } from "react-router-dom";

function Home({
  nowPlaying,
  topRated,
  comingSoon,
  halloween,
  onAboutPopupClick,
  onPostClick,
  isOpen,
  isLoading,
}) {
  return (
    <main className="homepage">
      <section className="homepage__section homepage__halloween">
        <Link to="/halloween" className="homepage__link">
          <h2 className="section__title">Halloween is back</h2>
        </Link>
        <Carousel
          collection={halloween}
          isLoading={isLoading}
          isOpen={isOpen}
          onAboutPopupClick={onAboutPopupClick}
          onPostClick={onPostClick}
          carouselStyle={"carousel__coming-soon"}
        />
      </section>

      <section className="homepage__section homepage__now-playing">
        <Link to="/now-playing" className="homepage__link">
          <h2 className="section__title">Now playing movies</h2>
        </Link>

        <Carousel
          collection={nowPlaying}
          isLoading={isLoading}
          isOpen={isOpen}
          onAboutPopupClick={onAboutPopupClick}
          onPostClick={onPostClick}
          carouselStyle={"carousel__now-playing"}
        />
      </section>
      <section className="homepage__section homepage__coming-soon">
        <Link to="/coming-soon" className="homepage__link">
          <h2 className="section__title">Upcoming from hollywood</h2>
        </Link>

        <Carousel
          collection={comingSoon}
          isLoading={isLoading}
          isOpen={isOpen}
          onAboutPopupClick={onAboutPopupClick}
          onPostClick={onPostClick}
          carouselStyle={"carousel__coming-soon"}
        />
      </section>
      <section className="homepage__section homepage__top-rated">
        <Link to="/top-rated" className="homepage__link">
          <h2 className="section__title">Can't miss features</h2>
        </Link>
        <Carousel
          collection={topRated}
          isLoading={isLoading}
          isOpen={isOpen}
          onAboutPopupClick={onAboutPopupClick}
          onPostClick={onPostClick}
          carouselStyle={"carousel__now-playing"}
        />
      </section>
    </main>
  );
}

export default Home;
