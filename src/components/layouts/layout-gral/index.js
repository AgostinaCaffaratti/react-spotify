import React, {  Fragment } from "react";
import Header from "./../../header";
import Footer from './../../footer'

const LayoutGral = (props) => (
    <Fragment>
<Header/>
{props.children}
<Footer/>
</Fragment>
)



export default LayoutGral;