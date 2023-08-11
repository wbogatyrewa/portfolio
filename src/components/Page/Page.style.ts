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
