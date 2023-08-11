import React from "react";
import { ContactList, Icon, Link, ListItem } from "./ContactPage.style";
import { GithubIcon, LinkedInIcon, MailIcon, TelegramIcon } from "../../Icons";
import { Page } from "../../Page";

interface ContactData {
  link: string;
  icon: React.ReactNode;
}

const generateContactList: (contacts: ContactData[]) => JSX.Element[] = (
  contacts
) => {
  return contacts.map((item, i) => (
    <ListItem>
      <Link href={item.link} target="_blank">
        <Icon>{item.icon}</Icon>
      </Link>
    </ListItem>
  ));
};

const contacts: ContactData[] = [
  { link: "https://github.com/wbogatyrewa", icon: GithubIcon() },
  {
    link: "https://www.linkedin.com/in/veronika-bogatyreva-7b3197239/",
    icon: LinkedInIcon(),
  },
  { link: "mailto:veronika01-01@mail.ru", icon: MailIcon() },
  { link: "https://t.me/wbogatyrewa", icon: TelegramIcon() },
];

export const Contact: () => JSX.Element = () => {
  return (
    <Page src={"./images/contact.png"} alt={"contact planet"} title={"Contact"}>
      <ContactList>{generateContactList(contacts)}</ContactList>
    </Page>
  );
};
