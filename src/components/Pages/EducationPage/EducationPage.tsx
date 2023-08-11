import React from "react";
import { Page } from "../../Page";
import { RedText } from "../../TextComponents";

export const EducationPage: () => JSX.Element = () => {
  return (
    <Page
      src={"/images/education.png"}
      alt={"education planet"}
      title={"Education"}
    >
      I received a Bachelor's degree in <RedText>Software Engineering</RedText>{" "}
      from South Ural State University.
      <br />
      <br />
      At the university, I studied mathematics, probability theory, computer
      science, <RedText>algorithms and data structures</RedText>, computer
      systems architecture, databases, programming in <RedText>Python</RedText>,
      <RedText>Java</RedText>, <RedText>C#</RedText>, <RedText>C++</RedText>.
      <br />
      <br />
      During my studies, I was engaged in <RedText>scientific work</RedText> and
      writing articles about <RedText>blockchain technology</RedText>.
      <br />
      <br />I took front-end development courses from{" "}
      <RedText>Skillbox</RedText> and <RedText>OTUS</RedText>, which helped me
      deepen my knowledge of web development. I constantly strive to{" "}
      <RedText>develop my skills</RedText> and knowledge in this areas.
    </Page>
  );
};
