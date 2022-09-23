import React from "react";
import Post from "../Post/Post";

function Main({ collection, onAboutPopupClick, onPostClick, isOpen }) {
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
          />
        ))}
      </section>
    </main>
  );
}
export default Main;
