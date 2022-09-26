import React from "react";
import { Rating } from "react-simple-star-rating";

function FiveStarRating({ ratingAverage, rateMeText, setStyle, starSize }) {
  return (
    <div className={setStyle}>
      <p className={rateMeText}>Leave a rating</p>
      <Rating initialValue={ratingAverage} size={starSize} fillColor="black" />
      <p className="post__rating">{`${ratingAverage}/5`}</p>
    </div>
  );
}
export default FiveStarRating;
