import React, { useState, useEffect } from "react";
import FiveStarRating from "../Rating/FiveStarRating";

function Post({ post, onPostClick, postStyle, ratingStyle, starColor }) {
  const [starSize, setStarSize] = useState(25);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  });

  function handlePostClick() {
    onPostClick(post);
  }

  useEffect(() => {
    function handleStarSize() {
      if (dimensions.width <= 600) {
        setStarSize(11);
      } else if (dimensions.width <= 800) {
        setStarSize(17);
      } else if (dimensions.width <= 1000) {
        setStarSize(20);
      } else if (dimensions.width > 1000) {
        setStarSize(25);
      }
    }
    window.addEventListener("resize", handleStarSize);
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
  });

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
        starSize={starSize}
        fillColor={starColor}
      />
    </div>
  );
}
export default React.memo(Post);
