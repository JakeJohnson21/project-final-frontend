import React from "react";
import Post from "../Post/Post";

function Main({
  collection,
  onAboutPopupClick,
  onPostClick,
  isOpen,
  isLoading,
}) {
  return (
    <main className="content">
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
          />
        ))}
      </section>
    </main>
  );
}
export default Main;
