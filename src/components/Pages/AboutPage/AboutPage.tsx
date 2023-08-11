import React from "react";
import { Page } from "../../Page";
import { RedText } from "../../TextComponents";

export const AboutPage: () => JSX.Element = () => {
  return (
    <Page src={"/images/about.png"} alt={"about planet"} title={"About"}>
      HI! My name is <RedText>Veronika Bogatyreva</RedText> and I am a{" "}
      <RedText>web developer</RedText>. I have about 1 year of experience in
      commercial development in this area. I specialize in creating interfaces
      for web applications, landing pages and SPAs using{" "}
      <RedText>JavaScript</RedText>, <RedText>React</RedText> and
      <RedText> NodeJS</RedText>. I develop fast, adaptive and cross-browser
      solutions for my projects.
      <br /> <br />I have experience in <RedText>team work</RedText>. I have
      strong conflict resolution skills and the ability to work effectively as a
      member of a team. I'm great at meeting deadlines.
      <br /> <br />
      Set up for <RedText>high motivation</RedText> and fast, effective growth,
      solving interesting and complex tasks.
    </Page>
  );
};
