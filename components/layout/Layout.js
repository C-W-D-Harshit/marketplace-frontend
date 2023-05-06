import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dash from "./Dash";
import Bot_Nav from "./Bot_Nav";
import { useDispatch } from "react-redux";
import { atc } from "../../reducers/cartSlice";

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
      <Header />
      <Dash />
      <Bot_Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
