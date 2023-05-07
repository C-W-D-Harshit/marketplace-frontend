import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dash from "./Dash";
import Bot_Nav from "./Bot_Nav";
import { useDispatch } from "react-redux";
import { atc } from "../../reducers/cartSlice";
import Head from "next/head";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [];
    dispatch(atc(cartItems));
  }, []);
  return (
    <>
      <Head>
        <meta name="description" content="An Ecommerce Marketplace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header />
      <Dash />
      <Bot_Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
