import React from "react";
import { Rating } from "react-simple-star-rating";

function FiveStarRating({ ratingAverage, setStyle, rateMeText }) {
  return (
    <div className={`rating__container ${setStyle}`}>
      <p className={rateMeText}>Leave a rating</p>
      <Rating initialValue={ratingAverage} fillColor="black" />
      <p className="post__rating">{`${ratingAverage}/5`}</p>
    </div>
  );
}
export default FiveStarRating;

// import React, { useState } from "react";
// import StarRating from "./StarRating";

// function FiveStarRating({ ratingAverage }) {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);

//   const onMouseEnter = (index) => {
//     setHover(index);
//   };
//   const onMouseLeave = () => {
//     setHover(0);
//   };
//   const onSaveRating = (index) => {
//     setRating(index);
//   };

//   return (
//     <div className="rating__container">
//       {[...Array(5)].map((index) => {
//         return (
//           <StarRating
//             index={index}
//             rating={rating}
//             hover={hover}
//             mouseEnter={onMouseEnter}
//             mouseLeave={onMouseLeave}
//             saveRating={onSaveRating}
//           />
//         );
//       })}
//       <p className="post__rating">{`${ratingAverage}/5`}</p>
//     </div>
//   );
// }

// export default FiveStarRating;
