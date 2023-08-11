import React from "react";
import { WorkCardContainer, Img } from "./WorkCard.style";

interface Props {
  src: string;
  alt: string;
  children: React.ReactNode;
}

export const WorkCard: ({ src, alt, children }: Props) => JSX.Element = ({
  src,
  alt,
  children,
}: Props) => {
  return (
    <WorkCardContainer>
      <Img src={src} alt={alt} />
    </WorkCardContainer>
  );
};
