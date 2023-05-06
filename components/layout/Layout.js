import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dash from "./Dash";
import Bot_Nav from "./Bot_Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Dash />
      <Bot_Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
