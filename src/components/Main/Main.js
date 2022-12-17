import React from "react";
import PageButton from "../PageButton/PageButton";
import Post from "../Post/Post";

function Main({
  collection,
  onAboutPopupClick,
  onPostClick,
  isOpen,
  pageTitle,
  pageButtonStyle,
  setTopRatedPage,
  mainContentStyles,
  starSize = 20,
}) {
  return (
    // Main Content container
    <main className={`content ${mainContentStyles}`}>
      <h1 className="page__title">{pageTitle}</h1>

      <section className="post__container">
        {collection.map((post) => (
          <Post
            onPostClick={onPostClick}
            key={post.id}
            post={post}
            onAboutPopupClick={onAboutPopupClick}
            isOpen={isOpen}
            setStyle={"rating__container"}
            postStyle={"post"}
            ratingStyle={"post__rating"}
            starSize={starSize}
          />
        ))}
      </section>
      <PageButton
        setTopRatedPage={setTopRatedPage}
        pageButtonStyle={pageButtonStyle}
      />
    </main>
  );
}
export default Main;
