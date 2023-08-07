import styled from "@emotion/styled";

export const AnimatedGradientContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  @media (min-width: 768px) {
    width: 80%;
    top: 5vw;
    left: 10vw;
  }

  @media (min-width: 1140px) {
    width: 40%;
    top: 5vw;
    left: 10vw;
  }
`;
