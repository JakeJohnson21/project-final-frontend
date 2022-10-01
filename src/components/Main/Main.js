import React from "react";
import Post from "../Post/Post";
import Preloader from "../Preloader/Preloader";

function Main({
  collection,
  onAboutPopupClick,
  onPostClick,
  isOpen,
  isLoading,
  pageTitle,
}) {
  return (
    <main className="content">
      <h1 className="page__title">{pageTitle}</h1>
      <Preloader isLoading={isLoading} />
      <section className="post__container">
        {collection.map((post) => (
          <Post
            onPostClick={onPostClick}
            key={post.id}
            post={post}
            onAboutPopupClick={onAboutPopupClick}
            isOpen={isOpen}
            isLoading={isLoading}
            setStyle={"rating__container"}
            postStyle={"post"}
            ratingStyle={"post__rating"}
          />
        ))}
      </section>
    </main>
  );
}
export default Main;
