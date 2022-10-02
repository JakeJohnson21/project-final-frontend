import React from "react";

function Preloader({ isLoading }) {
  const whenLoading = isLoading ? "preloader__visible" : "preloader__hidden";
  const whenLoadingBackground = isLoading ? "preloader" : "preloader__hidden";

  return (
    <span className={whenLoadingBackground}>
      <i className={whenLoading}></i>
    </span>
  );
}
export default Preloader;
