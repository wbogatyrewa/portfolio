import React from "react";
import { HeaderContainer, LogoContainer } from "./Header.style";
import { Logo } from "../Logo";

export const Header: () => JSX.Element = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </HeaderContainer>
  );
};
