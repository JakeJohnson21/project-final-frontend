import React from "react";
import Post from "../Post/Post";

function Similar({
  onPostClick,
  onAboutPopupClick,
  isOpen,
  isLoading,
  collection,
}) {
  return (
    <span className="similar__container">
      {collection.slice(0, 5).map((post) => (
        <Post
          onPostClick={onPostClick}
          key={post.id}
          post={post}
          onAboutPopupClick={onAboutPopupClick}
          isOpen={isOpen}
          isLoading={isLoading}
          postStyle={"similar__post"}
          setStyle={"hide-rating"}
        />
      ))}
    </span>
  );
}
export default Similar;
