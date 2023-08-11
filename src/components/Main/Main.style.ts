import styled from "@emotion/styled";

export const MainContainer = styled.section`
  position: relative;
`;

export const HeadingContainer = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  margin-top: 35vh;
`;

export const PageButtonsContainer = styled.div`
  position: relative;

  & > a:nth-of-type(1) {
    position: absolute;
    top: 5vh;
    left: 0;
  }

  & > a:nth-of-type(2) {
    position: absolute;
    top: 2vh;
    right: 0;
  }

  & > a:nth-of-type(3) {
    position: absolute;
    top: 60vh;
    right: 0;
  }

  & > a:nth-of-type(4) {
    position: absolute;
    top: 55vh;
    left: 0;
  }

  & > a:nth-of-type(5) {
    position: absolute;
    top: 75vh;
    left: 20vw;
  }

  @media (min-width: 768px) {
    & > a:nth-of-type(1) {
      position: absolute;
      top: 5vh;
      left: 34vw;
    }

    & > a:nth-of-type(2) {
      position: absolute;
      top: 35vh;
      right: 5vw;
    }

    & > a:nth-of-type(3) {
      position: absolute;
      top: 70vh;
      right: 25vw;
    }

    & > a:nth-of-type(4) {
      position: absolute;
      top: 70vh;
      left: 25vw;
    }

    & > a:nth-of-type(5) {
      position: absolute;
      top: 35vh;
      left: 5vw;
    }
  }

  @media (min-width: 1200px) {
    & > a:nth-of-type(1) {
      position: absolute;
      top: 5vh;
      left: 38vw;
    }

    & > a:nth-of-type(2) {
      position: absolute;
      top: 35vh;
      right: 10vw;
    }

    & > a:nth-of-type(3) {
      position: absolute;
      top: 70vh;
      right: 25vw;
    }

    & > a:nth-of-type(4) {
      position: absolute;
      top: 70vh;
      left: 25vw;
    }

    & > a:nth-of-type(5) {
      position: absolute;
      top: 35vh;
      left: 10vw;
    }
  }
`;
