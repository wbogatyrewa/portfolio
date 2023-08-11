import React from "react";
import {
  ChildrenContainer,
  CloseIconContainer,
  HeadingContainer,
  Img,
  PageContainer,
} from "./Page.style";
import { H1 } from "../TextComponents";
import { Link } from "react-router-dom";
import { CloseIcon } from "../Icons/CloseIcon";

interface Props {
  src: string;
  alt: string;
  title: string;
  children?: React.ReactNode;
}

export const Page: (props: Props) => JSX.Element = ({
  src,
  alt,
  title,
  children,
}: Props) => {
  return (
    <PageContainer>
      <CloseIconContainer>
        <Link to={"/"}>
          <CloseIcon />
        </Link>
      </CloseIconContainer>
      <HeadingContainer>
        <Img src={src} alt={alt} />
        <H1>{title}</H1>
      </HeadingContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
    </PageContainer>
  );
};
