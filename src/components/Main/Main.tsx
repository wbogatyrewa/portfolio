import React from "react";
import { HeadingContainer, MainContainer } from "./Main.style";
import { H1 } from "../TextComponents";

export const Main: () => JSX.Element = () => {
  return (
    <MainContainer>
      <HeadingContainer>
        <H1>Hi,</H1>
        <H1>I'm Veronika,</H1>
        <H1>web developer</H1>
      </HeadingContainer>
    </MainContainer>
  );
};
