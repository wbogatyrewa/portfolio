import styled from "@emotion/styled";

export const GradientSVG = styled.svg`
  opacity: 0.8;
  --tw-blur: blur(15vw);
  filter: var(--tw-blur);

  @media (min-width: 992px) {
    --tw-blur: blur(8vw);
  }
`;

export const GradientPath = styled.path`
  transition: fill 3s ease 0s;
`;
