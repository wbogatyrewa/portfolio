import styled from "@emotion/styled";

export const MainContainer = styled.section`
  position: relative;
`;

export const HeadingContainer = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  margin-top: 35dvh;
`;

export const PageButtonsContainer = styled.div`
  position: relative;

  & > a:nth-of-type(1) {
    position: absolute;
    top: 5dvh;
    left: 0;
  }

  & > a:nth-of-type(2) {
    position: absolute;
    top: 2dvh;
    right: 0;
  }

  & > a:nth-of-type(3) {
    position: absolute;
    top: 60dvh;
    right: 0;
  }

  & > a:nth-of-type(4) {
    position: absolute;
    top: 55dvh;
    left: 0;
  }

  & > a:nth-of-type(5) {
    position: absolute;
    top: 75dvh;
    left: 20vw;
  }

  @media (min-width: 768px) {
    & > a:nth-of-type(1) {
      position: absolute;
      top: 5dvh;
      left: 34vw;
    }

    & > a:nth-of-type(2) {
      position: absolute;
      top: 35dvh;
      right: 5vw;
    }

    & > a:nth-of-type(3) {
      position: absolute;
      top: 70dvh;
      right: 25vw;
    }

    & > a:nth-of-type(4) {
      position: absolute;
      top: 70dvh;
      left: 25vw;
    }

    & > a:nth-of-type(5) {
      position: absolute;
      top: 35dvh;
      left: 5vw;
    }
  }

  @media (min-width: 1200px) {
    & > a:nth-of-type(1) {
      position: absolute;
      top: 5dvh;
      left: 38vw;
    }

    & > a:nth-of-type(2) {
      position: absolute;
      top: 35dvh;
      right: 10vw;
    }

    & > a:nth-of-type(3) {
      position: absolute;
      top: 70dvh;
      right: 25vw;
    }

    & > a:nth-of-type(4) {
      position: absolute;
      top: 70dvh;
      left: 25vw;
    }

    & > a:nth-of-type(5) {
      position: absolute;
      top: 35dvh;
      left: 10vw;
    }
  }
`;
