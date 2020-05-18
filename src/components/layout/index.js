import React, { Children } from "react";
import Header from "./../header.js";

const Layout = () => <Header>{Children.props}</Header>;

export default Layout;
