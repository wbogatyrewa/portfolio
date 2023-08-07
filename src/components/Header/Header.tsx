import React from "react";
import {
  HeaderContainer,
  Link,
  ListItem,
  LogoContainer,
  NavList,
  UList,
} from "./Header.style";
import { Logo } from "../Logo";

export const Header: () => JSX.Element = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavList>
        <UList>
          <ListItem>
            <Link href="#about">About</Link>
          </ListItem>
          <ListItem>
            <Link href="#work">Work</Link>
          </ListItem>
          <ListItem>
            <Link href="#contact">Contact</Link>
          </ListItem>
        </UList>
      </NavList>
    </HeaderContainer>
  );
};
