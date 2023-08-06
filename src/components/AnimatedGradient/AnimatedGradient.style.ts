import styled from "@emotion/styled";

export const GradientSVG = styled.svg`
  position: absolute;
  top: -50vw;
  left: 0;
  z-index: -1;
  height: 200vw;
  width: 100vw;
  opacity: 0.9;
  --tw-blur: blur(15vw);
  filter: var(--tw-blur);
`;

export const GradientPath = styled.path`
  transition: fill 3s ease 0s;
`;
