import type { NextPage } from "next";

import ContactButtons from "@components/contactButton";
import ContactProcess from "@components/contactProcess";
import ContactArrow from "@components/contactArrow";

const ContactPage: NextPage = () => {
  return (
    // ? Omitted Fragment object, works fine so far
    <>
      <ContactButtons />
      <ContactArrow />
      <ContactProcess />
    </>
  );
};

export default ContactPage;
