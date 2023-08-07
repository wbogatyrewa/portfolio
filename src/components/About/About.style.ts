import styled from "@emotion/styled";

export const AboutContainer = styled.section`
  width: 100%;
  margin-top: 25vh;

  @media (min-width: 768px) {
    margin-top: 20vh;
  }
`;

export const HeadingContainer = styled.div`
  text-align: center;
  text-transform: uppercase;
  padding: 20px 0;
`;

export const DescContainer = styled.div`
  text-align: center;
`;

export const TechContainer = styled.div`
  width: 100%;
  padding: 20px 0;

  @media (min-width: 1440px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ImgTech = styled.img`
  width: 100%;
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ImgTechDesktop = styled.img`
  width: 100%;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 1440px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;
