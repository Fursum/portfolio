import { Fragment, FunctionComponent } from "react";
import Footer from "../footer";
import Header from "../header";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer/>
    </Fragment>
  );
};

export default Layout;
