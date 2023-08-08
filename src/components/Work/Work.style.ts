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
  div {
    max-width: 70%;
    margin-bottom: 15px;
  }

  & div:nth-child(2n) {
    margin-left: auto;
  }
`;
