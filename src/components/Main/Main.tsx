import React from "react";
import {
  HeadingContainer,
  MainContainer,
  PageButtonsContainer,
} from "./Main.style";
import { H1 } from "../TextComponents";
import { PageButton, PageButtonData } from "../PageButton";

const pageButtonDataList: PageButtonData[] = [
  {
    src: "/images/about.png",
    alt: "about planet",
    title: "About",
    link: "about",
  },
  {
    src: "/images/education.png",
    alt: "education planet",
    title: "Education",
    link: "education",
  },
  {
    src: "/images/skills.png",
    alt: "skills planet",
    title: "Skills",
    link: "skills",
  },
  {
    src: "/images/work.png",
    alt: "work planet",
    title: "Work",
    link: "work",
  },
  {
    src: "/images/contact.png",
    alt: "contact planet",
    title: "Contact",
    link: "contact",
  },
];

const generatePageButtons: (
  pageButtonDataList: PageButtonData[]
) => JSX.Element[] = (pageButtonDataList) => {
  return pageButtonDataList.map((item, i) => (
    <PageButton
      key={item.title}
      src={item.src}
      alt={item.alt}
      title={item.title}
      link={item.link}
    />
  ));
};

export const Main: () => JSX.Element = () => {
  return (
    <MainContainer>
      <HeadingContainer>
        <H1>
          welcome 2 <br /> wbogatyrewa’s <br /> website!!!
        </H1>
      </HeadingContainer>
      <PageButtonsContainer>
        {generatePageButtons(pageButtonDataList)}
      </PageButtonsContainer>
    </MainContainer>
  );
};
