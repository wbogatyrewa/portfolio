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
          The <RedText>DSF</RedText> decentralized application is a blockchain
          platform that allows users to store stablecoins in a decentralized
          manner. Within the framework of the project, my tasks were the
          development of new web interface components, the use of the MUI
          component library. I was also involved in linking the web interface
          with the server and blockchain parts.
          <br />
          <Link href="https://app.dsf.finance/" target="_blank">
            link to DSF project.
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
