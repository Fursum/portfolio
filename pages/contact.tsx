import type { NextPage } from "next";

import ContactButtons from "../components/contactButton";
import ContactProcess from "../components/contactProcess";
import ContactArrow from "../components/contactArrow";

const ContactPage: NextPage = () => {
  return (
    <>
      <ContactButtons />
      <ContactArrow />
      <ContactProcess/>
    </>
  );
};

export default ContactPage;
