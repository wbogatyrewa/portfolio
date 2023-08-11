import React from "react";
import { Page } from "../../Page";
import { RedText } from "../../TextComponents";

export const SkillsPage: () => JSX.Element = () => {
  return (
    <Page src={"./images/skills.png"} alt={"skills planet"} title={"Skills"}>
      I am constantly learning and using the following
      <RedText> technologies</RedText>:
      <ul>
        <li>
          HTML5, CSS3, <RedText> JavaScript / TypeScript</RedText>
        </li>
        <li>adaptability, responsiveness, Crossbrowser compatibility</li>
        <li>
          <RedText> React</RedText>
        </li>
        <li>State manager – Redux, Redux Toolkit</li>
        <li>webpack, babel, eslint, prettier</li>
        <li>Emotion, styled components, Storybook, MUI</li>
        <li>
          <RedText>Git, Github</RedText>
        </li>
        <li>
          <RedText> Express.js, PostgreSQL</RedText>
        </li>
        <li>GitHub Pages, Vercel</li>
      </ul>
    </Page>
  );
};
