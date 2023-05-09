import { parseCookies } from "nookies";
import React from "react";
import cookie from "js-cookie";
import { BsHandbag } from "react-icons/bs";
import { MdOutlineAccountBox } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";
import baseUrl from "../../../helpers/baseUrl";
import Image from "next/image";

const OrderDetail = ({ orders, order }) => {
  const router = useRouter();
  const orderCount = orders.length;
  const wishCount = 0;
  const proCount = 3;
  let dateString = "";
  function handleDate(g) {
    const formattedDate = new Date(g).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const [month, day, year] = formattedDate.split(" ");
    const titleCaseMonth = month.charAt(0).toUpperCase() + month.slice(1);
    dateString = `${day} ${titleCaseMonth} ${year}`;
  }
  console.log(order);
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
              href={`/orders`}
              className={router.pathname === "/user/orders" ? "jkk jk" : "jk"}
            >
              <MdOutlineAccountBox />
              <p>Update Password</p>
            </Link>
            <p>{0}</p>
          </div>
        </div>
        <div className="order">
          <p>Order Detail</p>
          <div className="orderDetail">
            <p>
              Order ID: <b> {order._id}</b>
            </p>
            <div className="pro_hold">
              {order.orderItems &&
                order.orderItems.map((orderItem) => {
                  return (
                    <div className="orderItem" key={orderItem._id}>
                      <div className="orderItem_img">
                        <Image
                          src={orderItem.image}
                          alt="img"
                          width="200"
                          height={200}
                        />
                      </div>
                      <p>{orderItem.name}</p>
                      <p>
                        ₹{orderItem.price} x {orderItem.quantity}
                      </p>
                    </div>
                  );
                })}
            </div>
            <div className="orderTot">
              <p>Item Price: ₹{order.itemsPrice}</p>
              <p>Shipping Price: ₹{order.shippingPrice}</p>
              <p>Tax: ₹{order.taxPrice}</p>
              <p>Total: ₹{order.totalPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const { token } = parseCookies(ctx);
  const { req } = ctx;
  if (!token) {
    const { res } = ctx;
    res.writeHead(302, { Location: "/login" });
    res.end();
    return {
      props: {},
    };
  }
  let res1 = null;
  let data1 = null;
  let res = null;
  let data = null;
  const id = ctx.params.id;
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
    res1 = await fetch(`${baseUrl}/api/v1/order/${id}`, options);
    data1 = await res1.json();
  } catch (err) {
    return {
      props: {
        error: err.message,
      },
    };
  }
  return {
    props: {
      order: data1.order,
      orders: data.orders,
    },
  };
}

export default OrderDetail;
