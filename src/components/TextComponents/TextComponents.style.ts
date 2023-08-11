import styled from "@emotion/styled";

export const H1 = styled.h1`
  font-size: 1.8rem;
  line-height: 30px;

  @media (min-width: 768px) {
    font-size: 2rem;
    line-height: 40px;
  }

  @media (min-width: 992px) {
    font-size: 3rem;
    line-height: 60px;
  }

  @media (min-width: 1920px) {
    font-size: 4rem;
    line-height: 70px;
  }
`;

export const P = styled.p`
  font-size: 1rem;
  line-height: 30px;

  @media (min-width: 768px) {
    font-size: 1.4rem;
    line-height: 50px;
  }

  @media (min-width: 2000px) {
    font-size: 2rem;
    line-height: 60px;
  }
`;

export const RedText = styled.div`
  display: inline;
  color: var(--red);
`;
