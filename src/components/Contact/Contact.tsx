import React from "react";
import {
  ContactContainer,
  ContactList,
  HeadingContainer,
  Icon,
  Link,
  ListItem,
} from "./Contact.style";
import { H2 } from "../TextComponents";
import { GithubIcon, LinkedInIcon, MailIcon, TelegramIcon } from "../Icons";

export const Contact: () => JSX.Element = () => {
  return (
    <ContactContainer>
      <HeadingContainer>
        <H2>Contact</H2>
      </HeadingContainer>
      <ContactList>
        <ListItem>
          <Link href="https://github.com/wbogatyrewa" target="_blank">
            <Icon>
              <GithubIcon />
            </Icon>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.linkedin.com/in/veronika-bogatyreva-7b3197239/"
            target="_blank"
          >
            <Icon>
              <LinkedInIcon />
            </Icon>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="mailto:veronika01-01@mail.ru" target="_blank">
            <Icon>
              <MailIcon />
            </Icon>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://t.me/wbogatyrewa" target="_blank">
            <Icon>
              <TelegramIcon />
            </Icon>
          </Link>
        </ListItem>
      </ContactList>
    </ContactContainer>
  );
};
