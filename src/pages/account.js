import { parseCookies } from "nookies";
import React from "react";
import cookie from "js-cookie";
import baseUrl from "../../helpers/baseUrl";
import { BsHandbag } from "react-icons/bs";
import { MdOutlineAccountBox } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Link from "next/link";

const Account = ({ user, orders }) => {
  const router = useRouter();
  const orderCount = orders.length;
  const wishCount = 0;
  const proCount = 3;
  const handleLogout = async () => {
    const res = await fetch("https://marketplace.cyclic.app/api/v1/logout");
    const data = await res.json();
    Cookies.remove("user");
    Cookies.remove("token");
    if (data.success === true) {
      router.push("/");
    } else {
      console.log("Failed");
    }
  };
  return (
    <div className="cont">
      <div className="cont_">
        <div className="sidebar">
          <p>Dashboard</p>
          <div className="gg">
            <Link
              href={`/orders`}
              className={router.pathname === "/orders" ? "jkk jk" : "jk"}
            >
              <BsHandbag />
              <p>Orders</p>
            </Link>
            <p>{orderCount}</p>
          </div>
          <div className="gg">
            <Link
              href={`/wishlist`}
              className={router.pathname === "/wishlist" ? "jkk jk" : "jk"}
            >
              <AiOutlineHeart />
              <p>Wishlist</p>
            </Link>
            <p>{wishCount}</p>
          </div>
          <div className="gg">
            <Link
              href={`/account`}
              className={router.pathname === "/account" ? "jkk jk" : "jk"}
            >
              <MdOutlineAccountBox />
              <p>Profile</p>
            </Link>
            <p>{proCount}</p>
          </div>
          <div className="gg">
            <Link
              href={`${user._id}/orders`}
              className={router.pathname === "/user/orders" ? "jkk jk" : "jk"}
            >
              <MdOutlineAccountBox />
              <p>Update Password</p>
            </Link>
            <p>{0}</p>
          </div>
        </div>
        <div className="account">
          <p>Profile</p>
          <div>
            <p>
              Name: <b>{user.name}</b>
            </p>
          </div>
          <div>
            <p>
              Email: <b>{user.email}</b>
            </p>
          </div>
          <div className="acc_cta" onClick={handleLogout}>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const { token, user } = parseCookies(ctx);
  const { req } = ctx;
  if (!token) {
    const { res } = ctx;
    res.writeHead(302, { Location: "/login" });
    res.end();
    return {
      props: {},
    };
  }
  const us = JSON.parse(user);
  let res = null;
  let data = null;
  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: req.headers.cookie,
    },
  };
  try {
    res = await fetch(`${baseUrl}/api/v1/orders/me`, options);
    data = await res.json();
  } catch (err) {
    return {
      props: {
        error: err.message,
      },
    };
  }
  return {
    props: {
      user: us,
      orders: data.orders,
    },
  };
}

export default Account;
