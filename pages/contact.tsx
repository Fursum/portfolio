import type { NextPage } from "next";
import { Fragment } from "react";
import ContactButtons from "../components/contactButton";
import ContactProcess from "../components/contactProcess";
import ContactArrow from "../components/contactArrow";

const ContactPage: NextPage = () => {
  return (
    <Fragment>
      <ContactButtons />
      <ContactArrow />
      <ContactProcess/>
    </Fragment>
  );
};

export default ContactPage;
