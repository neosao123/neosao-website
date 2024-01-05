import { auto } from "@popperjs/core";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function LodingImages({ src, alt, height, width }) {
  return (
    <LazyLoadImage
      alt={alt}
      height={height}
      src={src}
      width={width}
      effect="blur"
      delayTime={100}
      delayMethod="scroll"
    />
  );
}

export default LodingImages;
