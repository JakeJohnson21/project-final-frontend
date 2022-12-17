import React, { useState, useRef, useEffect } from "react";
import Post from "../Post/Post";

function Carousel({
  collection,
  onAboutPopupClick,
  onPostClick,
  isOpen,
  isLoading,
  carouselStyle,
}) {
  const innerCarousel = useRef();
  const leftArrow = useRef();
  const rightArrow = useRef();

  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  function slide(shift) {
    innerCarousel.current.scrollLeft += shift;
    setScrollX(scrollX + shift);
  }

  function handleScrolling() {
    setScrollX(innerCarousel.current.scrollLeft);
    if (
      Math.floor(
        innerCarousel.current.scrollWidth - innerCarousel.current.scrollLeft
      ) <= innerCarousel.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  }

  function leftScroll() {
    slide(-195);
  }

  function rightScroll() {
    slide(+195);
  }

  useEffect(() => {
    if (
      innerCarousel.current &&
      innerCarousel?.current?.scrollWidth ===
        innerCarousel?.current?.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
    return () => {};
  }, [
    innerCarousel?.current?.scrollWidth,
    innerCarousel?.current?.offsetWidth,
  ]);

  return (
    <div className={`outer-carousel ${carouselStyle}`}>
      {scrollX !== 0 && (
        <button
          type="button"
          ref={leftArrow}
          onClick={leftScroll}
          className="scroll-left"
        ></button>
      )}

      <div
        className="section__inner-carousel"
        ref={innerCarousel}
        onScroll={handleScrolling}
      >
        {collection.slice(0, 12).map((post) => (
          <Post
            onPostClick={onPostClick}
            key={post.id}
            post={post}
            onAboutPopupClick={onAboutPopupClick}
            isLoading={isLoading}
            isOpen={isOpen}
            postStyle={"homepage__post"}
            ratingStyle={"carousel__rating"}
            starColor={"gold"}
            starSize={19}
          />
        ))}
      </div>
      {!scrollEnd && (
        <button
          type="button"
          ref={rightArrow}
          onClick={rightScroll}
          className="scroll-right"
        ></button>
      )}
    </div>
  );
}

export default Carousel;
