import styled from "@emotion/styled";

export const Stars = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 100vw;
  min-height: 100vh;
  margin-bottom: -350px;

  & :nth-of-type(2n) {
    background-position: 100px 100px;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
  }

  & :nth-of-type(3n) {
    background-position: 350px 100px;
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
  }
`;

export const Star = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  opacity: 0;
  background: url("./images/bg.png");
  -webkit-animation: stars 5s linear infinite;
  animation: stars 5s linear infinite;

  @-webkit-keyframes stars {
    0%,
    50%,
    100% {
      opacity: 0;
    }
    1%,
    49% {
      opacity: 1;
    }
  }
  @keyframes stars {
    0%,
    50%,
    100% {
      opacity: 0;
    }
    5%,
    45% {
      opacity: 1;
    }
  }
`;
