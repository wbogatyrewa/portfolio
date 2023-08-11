import styled from "@emotion/styled";

export const ContactList = styled.ul`
  list-style: none;
  margin: 10vh auto;
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
    padding: 0 25px;
  }
`;

export const Link = styled.a``;

export const Icon = styled.span``;
