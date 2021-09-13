import type { NextPage } from "next";
import { Fragment } from "react";
import Contact from "../components/contactButton";
import ContactProcess from "../components/contactProcess";
import Header from "../components/header";

const ContactPage: NextPage = () => {
  return (
    <Fragment>
      <Header />
      <Contact />
      <ContactProcess/>
    </Fragment>
  );
};

export default ContactPage;
