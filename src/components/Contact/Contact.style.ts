import styled from "@emotion/styled";

export const ContactContainer = styled.section`
  width: 100%;
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

export const HeadingContainer = styled.div`
  text-align: center;
  text-transform: uppercase;
  padding: 20px 0;
  margin-bottom: 5vh;
`;

export const ContactList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 80%;

  @media (min-width: 768px) {
    max-width: 50%;
  }

  @media (min-width: 2000px) {
    max-width: 35%;
  }
`;

export const ListItem = styled.li`
  padding: 0 5px;

  @media (min-width: 768px) {
    padding: 0 15px;
  }
`;

export const Link = styled.a``;

export const Icon = styled.span``;
