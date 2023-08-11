import styled from "@emotion/styled";

export const WorkContainer = styled.section`
  width: 100%;
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

export const HeadingContainer = styled.div`
  text-align: center;
  text-transform: uppercase;
  padding: 20px 0;
`;

export const WorkCardContainer = styled.div`
  & > div {
    max-width: 100%;
    margin-bottom: 5vw;
  }

  & div:nth-child(2n) {
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 992px) {
    & > div {
      max-width: 60%;
    }

    & div:nth-child(2n) {
      margin-right: 0;
    }
  }
`;
