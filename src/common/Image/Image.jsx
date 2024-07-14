import React from "react";
import ImageUrl from "./ImageUrl";

function Image(data) {
  return (
    <picture>
      <source media="(min-width:650px)" srcSet={ImageUrl(data?.data)} />
      <img
        src={ImageUrl(data?.data)}
        alt="no-image"
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
}

export default Image;
