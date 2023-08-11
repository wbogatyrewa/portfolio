import React from "react";
import { Stars, Star } from "./StarsBackground.style";

const generateStars: () => JSX.Element[] = () => {
  const numberOfPicturesOfStars = 3;
  const stars = [...Array(numberOfPicturesOfStars)];
  return stars.map((item, i) => <Star key={i}></Star>);
};

export const StarsBackground: () => JSX.Element = () => {
  return <Stars>{generateStars()}</Stars>;
};
