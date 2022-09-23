// import React, { useMemo } from "react";
// import StarIcon from "./StarIcon";

// function StarRating({
//   index,
//   rating,
//   hover,
//   saveRating,
//   mouseEnter,
//   mouseLeave,
// }) {
//   console.log("index111: ", index);
//   const fill = useMemo(() => {
//     if (hover >= index) {
//       return "black";
//     } else if (!hover && rating >= index) {
//       return "black";
//     }
//     return "none";
//   }, [rating, hover, index]);

//   return (
//     <div
//       className="star__individual"
//       onMouseEnter={() => mouseEnter(index)}
//       onMouseLeave={() => mouseLeave()}
//       onClick={() => saveRating(index)}
//     >
//       <StarIcon fill={fill} />
//     </div>
//   );
// }
// export default StarRating;
