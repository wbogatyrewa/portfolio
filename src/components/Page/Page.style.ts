import styled from "@emotion/styled";

export const PageContainer = styled.div`
  width: 100%;
`;

export const CloseIconContainer = styled.div`
  width: fit-content;
  margin: 5vh 0 0 auto;
`;

export const HeadingContainer = styled.div`
  margin-top: 3vh;
  text-align: center;
`;

export const Img = styled.img`
  -webkit-animation-name: rotation;
  -webkit-animation-duration: 15s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-name: rotation;
  -moz-animation-duration: 15s;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -o-animation-name: rotation;
  -o-animation-duration: 15s;
  -o-animation-iteration-count: infinite;
  -o-animation-timing-function: linear;
  animation-name: rotation;
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @-webkit-keyframes rotation {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-moz-keyframes rotation {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-o-keyframes rotation {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotation {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(720deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @media (min-width: 1920px) {
    width: 220px;
  }
`;

export const ChildrenContainer = styled.div`
  margin: 5vh 0;
  line-height: 30px;

  @media (min-width: 992px) {
    margin: 5vh 100px;
  }

  @media (min-width: 1920px) {
    line-height: 40px;
  }
`;
