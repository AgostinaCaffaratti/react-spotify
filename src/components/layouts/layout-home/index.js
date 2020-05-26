import React, { Fragment } from "react";
import HeaderHome from "../../header-Home/index.js";
import Footer from "./../../footer";

const LayoutHome = (props) => (
  <Fragment>
    <HeaderHome />
    {props.children}
    <Footer />
  </Fragment>
);

export default LayoutHome;
