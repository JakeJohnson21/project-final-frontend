import React, { useRef } from "react";
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
  const carousel = useRef();

  return (
    <main className="homepage">
      <h1 className="homepage__title">Welcome to RMDb</h1>
      <section className="homepage__section homepage__now-playing">
        <h2 className="section__title">Now playing movies</h2>
        <div ref={carousel} className="outer-carousel">
          <button className="scroll-left"></button>

          <div className="section__inner-carousel">
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
          <button className="scroll-right"></button>
        </div>
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
