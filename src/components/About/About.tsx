import React from "react";
import {
  AboutContainer,
  DescContainer,
  HeadingContainer,
  ImgTech,
  ImgTechDesktop,
  TechContainer,
} from "./About.style";
import { H2, P } from "../TextComponents";

export const About: () => JSX.Element = () => {
  return (
    <AboutContainer>
      <HeadingContainer>
        <H2>About</H2>
      </HeadingContainer>
      <DescContainer>
        <P>
          My name is Veronika Bogatyreva. I specialize in creating interfaces
          for web applications, landing pages and SPAs in JavaScript, React and
          NodeJS. I develop fast, adaptive and cross-browser solutions for my
          projects. I have a bachelor's degree in Computer Science from 2023.
          Set for high motivation and fast, effective growth, solving
          interesting and complex problems.
        </P>
      </DescContainer>
      <TechContainer>
        <ImgTech alt="Tech Stack" src="/images/TECH.png" />
        <ImgTechDesktop alt="Tech Stack" src="/images/TECH_Desktop.png" />
      </TechContainer>
    </AboutContainer>
  );
};
