import React from "react";
import { HeadingContainer, MainContainer } from "./Main.style";
import { H1 } from "../TextComponents";

export const Main: () => JSX.Element = () => {
  return (
    <MainContainer>
      <HeadingContainer>
        <H1>
          welcome 2 <br /> wbogatyrewa’s <br /> website!!!
        </H1>
      </HeadingContainer>
    </MainContainer>
  );
};
