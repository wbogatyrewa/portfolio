import React from "react";
import { Link } from "react-router-dom";
import {
  PageButtonContainer,
  PageButtonImg,
  PageButtonTitle,
} from "./PageButton.style";

export interface PageButtonData {
  src: string;
  alt: string;
  title: string;
  link: string;
}

export const PageButton: (props: PageButtonData) => JSX.Element = ({
  src,
  alt,
  title,
  link,
}: PageButtonData) => {
  return (
    <Link to={link}>
      <PageButtonContainer>
        <PageButtonImg src={src} alt={alt} />
        <PageButtonTitle>{title}</PageButtonTitle>
      </PageButtonContainer>
    </Link>
  );
};
