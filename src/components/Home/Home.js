import React, { useRef, useState, useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import Post from "../Post/Post";

function Home({
  nowPlaying,
  topRated,
  comingSoon,
  onAboutPopupClick,
  onPostClick,
  isOpen,
  isLoading,
}) {
  return (
    <main className="homepage">
      <h1 className="homepage__title">Welcome to RMDb</h1>
      <section className="homepage__section homepage__now-playing">
        <h2 className="section__title">Now playing movies</h2>
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
        <h2 className="section__title">Upcoming from hollywood</h2>
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
        <h2 className="section__title">Can't miss features</h2>
        <Carousel
          collection={topRated}
          isLoading={isLoading}
          isOpen={isOpen}
          onAboutPopupClick={onAboutPopupClick}
          onPostClick={onPostClick}
          carouselStyle={"carousel__now-playing"}
        />
      </section>
      {/* <section className="homepage__section homepage__coming-soon">
        <h2 className="section__title">Coming soon to theaters</h2>
        <div className="section__post-container">
          {comingSoon.slice(0, 12).map((post) => (
            <Post
              onPostClick={onPostClick}
              key={post.id}
              post={post}
              onAboutPopupClick={onAboutPopupClick}
              isLoading={isLoading}
              isOpen={isOpen}
              postStyle={"homepage__post"}
              setStyle=""
            />
          ))}
        </div>
      </section>
      <section className="homepage__section homepage__top-rated">
        <h2 className="section__title">Top Rated movies</h2>
        <div className="section__post-container">
          {nowPlaying.slice(0, 12).map((post) => (
            <Post
              onPostClick={onPostClick}
              key={post.id}
              post={post}
              onAboutPopupClick={onAboutPopupClick}
              isLoading={isLoading}
              isOpen={isOpen}
              postStyle={"homepage__post"}
              setStyle=""
            />
          ))}
        </div>
      </section> */}
    </main>
  );
}

export default Home;
