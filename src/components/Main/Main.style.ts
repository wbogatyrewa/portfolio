import styled from "@emotion/styled";

export const MainContainer = styled.section`
  position: relative;
`;

export const HeadingContainer = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  margin-top: 35svh;
`;

export const PageButtonsContainer = styled.div`
  position: relative;

  & > a:nth-of-type(1) {
    position: absolute;
    top: 5svh;
    left: 0;
  }

  & > a:nth-of-type(2) {
    position: absolute;
    top: 2svh;
    right: 0;
  }

  & > a:nth-of-type(3) {
    position: absolute;
    top: 60svh;
    right: 0;
  }

  & > a:nth-of-type(4) {
    position: absolute;
    top: 55svh;
    left: 0;
  }

  & > a:nth-of-type(5) {
    position: absolute;
    top: 75svh;
    left: 20vw;
  }

  @media (min-width: 768px) {
    & > a:nth-of-type(1) {
      position: absolute;
      top: 5svh;
      left: 34vw;
    }

    & > a:nth-of-type(2) {
      position: absolute;
      top: 35svh;
      right: 5vw;
    }

    & > a:nth-of-type(3) {
      position: absolute;
      top: 70svh;
      right: 25vw;
    }

    & > a:nth-of-type(4) {
      position: absolute;
      top: 70svh;
      left: 25vw;
    }

    & > a:nth-of-type(5) {
      position: absolute;
      top: 35svh;
      left: 5vw;
    }
  }

  @media (min-width: 1200px) {
    & > a:nth-of-type(1) {
      position: absolute;
      top: 5svh;
      left: 38vw;
    }

    & > a:nth-of-type(2) {
      position: absolute;
      top: 35svh;
      right: 10vw;
    }

    & > a:nth-of-type(3) {
      position: absolute;
      top: 70svh;
      right: 25vw;
    }

    & > a:nth-of-type(4) {
      position: absolute;
      top: 70svh;
      left: 25vw;
    }

    & > a:nth-of-type(5) {
      position: absolute;
      top: 35svh;
      left: 10vw;
    }
  }
`;
