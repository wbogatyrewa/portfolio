import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  width: fit-content;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    margin-left: 0;
  }
`;

export const NavList = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const UList = styled.ul`
  display: flex;
  align-items: center;
`;

export const ListItem = styled.li`
  padding: 0 15px;

  @media (min-width: 992px) {
    padding: 0 35px;
  }
`;

export const Link = styled.a`
  color: #fff;
  font-size: 1rem;
`;
