import React from "react";
import Top_Header from "./Top_Header";
import Link from "next/link";
import { useSelector } from "react-redux";
import {
  GiAbdominalArmor,
  GiHamburgerMenu,
  GiShoppingCart,
} from "react-icons/gi";
import { AiOutlineDown } from "react-icons/ai";
import { useRouter } from "next/router";
import { BiSearchAlt } from "react-icons/bi";
import { RiAccountBoxLine } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
  const router = useRouter();
  const count = useSelector((state) => state.cart.cartTotalQuantity);
  return (
    <>
      <Top_Header />
      <div className="header">
        <Link href="/" className="header__logo">
          <GiAbdominalArmor />
          <p>Shopcart</p>
        </Link>
        <div className="header__menu">
          <Link href="/shop">
            <p>Shop</p>
          </Link>
          <Link href="/deals">
            <p>Deals</p>
          </Link>
          <Link href="/nA">
            <p>What's New</p>
          </Link>
          <Link href="/about">
            <p>About Us</p>
          </Link>
        </div>
        <div className="header__search">
          <input type="text" placeholder="Search for Products..." />
          <BiSearchAlt />
        </div>
        <div className="header__user">
          <Link href="/">
            <RiAccountBoxLine />
            <p>Account</p>
          </Link>
          <Link href="/">
            <div className="cart_">
              <BsCart4 />
              <p>{count}</p>
            </div>
            <p>Cart</p>
          </Link>
        </div>
        <div className="header__mob">
          <div className="cart_">
            <BsCart4 />
            <p>{count}</p>
          </div>
          <GiHamburgerMenu />
        </div>
      </div>
    </>
  );
};

export default Header;
