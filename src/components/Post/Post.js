import React from "react";
import FiveStarRating from "../Rating/FiveStarRating";

function Post({ post, onPostClick, onAboutPopupClick, isOpen }) {
  const correctStackVisibility = isOpen ? "lower__hidden" : "lower__visible";

  function handlePostClick() {
    onPostClick(post);

    onAboutPopupClick();
  }

  return (
    <div className="post" key={post} onClick={handlePostClick}>
      <h2 className="post__title">{post.title}</h2>
      <img
        className="post__poster"
        src={`https://image.tmdb.org/t/p/original/${post.poster_path}`}
        alt={`A movie titled ${post.title}`}
      />
      <FiveStarRating
        setStyle={correctStackVisibility}
        ratingAverage={post.vote_average / 2}
        rateMeText={"rate-me__hidden"}
      />
    </div>
  );
}
export default Post;
