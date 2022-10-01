import React from "react";
import Preloader from "../Preloader/Preloader";
import FiveStarRating from "../Rating/FiveStarRating";

function Post({
  post,
  onPostClick,
  isLoading,
  postStyle,
  ratingStyle,
  starColor,
}) {
  function handlePostClick() {
    onPostClick(post);
  }

  return (
    <div className={postStyle} key={post} onClick={handlePostClick}>
      <h2 className="post__title">{post.title}</h2>
      <img
        className="post__poster"
        src={`https://image.tmdb.org/t/p/original/${post.poster_path}`}
        alt={`A movie titled ${post.title}`}
      />

      <FiveStarRating
        ratingAverage={post.vote_average / 2}
        rateMeText={"rate-me__hidden"}
        setStyle={ratingStyle}
        starSize={25}
        fillColor={starColor}
      />
      <Preloader isLoading={isLoading} />
    </div>
  );
}
export default Post;
