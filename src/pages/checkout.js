import axios from "axios";
import { parseCookies } from "nookies/dist";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Checkout = ({ user }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  //   const [orderItems, SetOrderItems] = useState([]);
  //   console.log(cartItems);
  const [formData, setFormData] = useState({
    phoneNo: 0,
    city: "",
    address: "",
    country: "",
    pincode: "",
    state: "",
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    Credentials: true,
  };
  const options = {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    const newValue =
      event.target.name === ["phoneNo", "pincode"]
        ? Number(event.target.value)
        : event.target.value;
    setFormData({ ...formData, [event.target.name]: newValue });
  };
  let phoneNo = parseInt(formData.phoneNo);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`g`);
    console.log(order);
    axios
      .get(`http://localhost:4000/api/v1/order/new`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was a problem with the axios request:", error);
      });
    // fetch(`https://marketplace.cyclic.app/api/v1/order/new`, options)
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error("There was a problem with the fetch operation:", error);
    //   });
  };

  const orderItems =
    cartItems &&
    cartItems.map((item) => {
      return {
        name: item.name,
        price: item.price,
        quantity: item.cartQuantity,
        image: item.images[0].url,
        product: item._id,
        attribute: item.attributes[0],
        sku: item.sku,
        vendor: item.vendor,
      };
    });
  //   console.log(orderItems);
  const order = {
    shippingInfo: formData,
    orderItems,
    paymentInfo: {
      id: "PAY-24546675",
      status: "Completed",
    },
    itemsPrice: cart.cartTotalAmount,
    taxPrice: 28,
    shippingPrice: 10,
    totalPrice: 28 + 10 + cart.cartTotalAmount,
    user: user,
  };
  console.log(order);
  return (
    <div className="checkout">
      <form onSubmit={handleSubmit} className="ltr">
        <p>Shipping Address</p>
        <div className="ltr_">
          <input
            type="number"
            name="phoneNo"
            id="phoneNo"
            value={formData.phoneNo}
            required
            onChange={handleChange}
            placeholder="Phone Number"
          />
          <input
            type="Number"
            name="pincode"
            id="pincode"
            value={formData.pincode}
            required
            onChange={handleChange}
            placeholder="Pincode"
          />
          <input
            type="text"
            name="city"
            id="city"
            value={formData.city}
            required
            onChange={handleChange}
            placeholder="City"
          />
          <input
            type="text"
            name="country"
            id="country"
            value={formData.country}
            required
            onChange={handleChange}
            placeholder="Country"
          />

          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            required
            onChange={handleChange}
            placeholder="Address"
          />
        </div>
        <div className="sub_check">
          <div className="orderTot">
            {/* <p>Item Price: ₹{order.itemsPrice}</p>
          <p>Shipping Price: ₹{order.shippingPrice}</p>
          <p>Tax: ₹{order.taxPrice}</p>
          <p>Total: ₹{order.totalPrice}</p> */}
          </div>
        </div>
        <div className="check_cta" onClick={handleSubmit}>
          <p>Checkout</p>
          <input type="submit" hidden />
        </div>
      </form>
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

  return {
    props: {
      user: us,
    },
  };
}

export default Checkout;
