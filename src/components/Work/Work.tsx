import React from "react";
import { H2, P } from "../TextComponents";
import {
  WorkContainer,
  HeadingContainer,
  WorkCardContainer,
} from "./Work.style";
import { WorkCard } from "./WorkCard";

export const Work: () => JSX.Element = () => {
  return (
    <WorkContainer>
      <HeadingContainer>
        <H2>Work</H2>
      </HeadingContainer>
      <WorkCardContainer>
        <WorkCard src="/images/DSF.jpg" alt="DSF project">
          <P>
            The DSF decentralized application is a blockchain platform that
            allows users to store stablecoins in a decentralized manner. <br />
            Within the framework of the project, my tasks were the development
            of new web interface components, the use of the MUI component
            library. I was also involved in linking the web interface with the
            server and blockchain parts.
          </P>
        </WorkCard>
        <WorkCard src="/images/EVoting.jpg" alt="EVoting project">
          <P>
            Thesis on the topic "Electronic voting system based on blockchain
            technology". I was engaged in the development of smart contracts in
            the Solidity language, a web application and a REST API for it
            (NodeJS). A library of components was developed and tested. The web
            application is responsive and cross-browser.
          </P>
        </WorkCard>
      </WorkCardContainer>
    </WorkContainer>
  );
};
