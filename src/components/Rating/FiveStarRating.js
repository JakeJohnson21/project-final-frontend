import React from "react";
import { Rating } from "react-simple-star-rating";

function FiveStarRating({
  ratingAverage,
  rateMeText,
  setStyle,
  starSize,
  fillColor = "black",
}) {
  return (
    <div className={setStyle}>
      <p className={rateMeText}>Leave a rating</p>
      <Rating
        initialValue={ratingAverage}
        size={starSize}
        fillColor={fillColor}
      />
      <p className="post__rating">{`${ratingAverage}/5`}</p>
    </div>
  );
}
export default React.memo(FiveStarRating);
