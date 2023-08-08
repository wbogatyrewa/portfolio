import styled from "@emotion/styled";

export const H1 = styled.h1`
  font-size: 2rem;

  @media (min-width: 768px) {
    font-size: 4rem;
  }

  @media (min-width: 992px) {
    font-size: 6rem;
  }
`;

export const H2 = styled.h2`
  font-size: 1.8rem;

  @media (min-width: 768px) {
    font-size: 3.6rem;
  }
`;

export const P = styled.p`
  font-size: 1rem;
  line-height: 30px;

  @media (min-width: 768px) {
    font-size: 1.6rem;
    line-height: 60px;
  }

  @media (min-width: 2000px) {
    font-size: 2rem;
    line-height: 60px;
  }
`;
