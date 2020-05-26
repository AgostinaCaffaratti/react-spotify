import React, { Fragment } from "react";
import HeaderGral from "./../../header-gral";
import Footer from "./../../footer";

const LayoutGral = (props) => (
  <Fragment>
    <HeaderGral />
    {props.children}
    <Footer />
  </Fragment>
);

export default LayoutGral;
