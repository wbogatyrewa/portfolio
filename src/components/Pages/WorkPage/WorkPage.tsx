import React from "react";
import { Page } from "../../Page";
import { RedText } from "../../TextComponents";
import { Link } from "./WorkPage.style";

export const WorkPage: () => JSX.Element = () => {
  return (
    <Page src={"/images/work.png"} alt={"work planet"} title={"Work"}>
      <RedText>Projects</RedText> in which I took an active part:
      <ul>
        <li>
          <RedText>Blog</RedText> site with user registration and authorization
          (JSON Web Tokens). The site displays all posts by authors. Post
          authors can edit and delete posts. The client part was created using
          React, the server part - Node.js and Express.
          <br />
          <Link
            href="https://github.com/wbogatyrewa/records-api"
            target="_blank"
          >
            link to github.
          </Link>
        </li>
        <li>
          <RedText>EVoting</RedText> is an electronic voting system based on
          blockchain technology. I was engaged in the development of smart
          contracts in the Solidity language, web applications and REST API for
          it (NodeJS). A library of components has been developed and tested.
          The web app is responsive and cross browser.
          <br />
          <Link href="http://veronijo.beget.tech/" target="_blank">
            link to EVoting project.
          </Link>{" "}
          <Link href="https://github.com/wbogatyrewa/EVoting" target="_blank">
            link to github.
          </Link>
        </li>
      </ul>
    </Page>
  );
};
