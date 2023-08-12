import styled from "@emotion/styled";

export const PageButtonContainer = styled.div`
  text-align: center;
  color: var(--yellow);
  transform: scale(1);
  transition: transform 0.2s linear;

  &:hover {
    transform: scale(1.2);
  }
`;

export const PageButtonImg = styled.img`
  width: 100px;

  @media (min-width: 992px) {
    width: 130px;
  }

  @media (min-width: 1920px) {
    width: 170px;
  }
`;

export const PageButtonTitle = styled.div`
  @media (min-width: 992px) {
    transform: translateY(-15px);
  }

  @media (min-width: 1920px) {
    font-size: 2rem;
  }
`;
