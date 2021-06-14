import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.layout}>
      <Header />
      <Sidebar />
      <div>
        {props.children}
      
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
