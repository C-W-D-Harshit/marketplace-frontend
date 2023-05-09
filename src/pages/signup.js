import axios from "axios";
import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import baseUrl from "../../helpers/baseUrl";
import cookie from "js-cookie";
import { parseCookies } from "nookies/dist";

const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: {
      public_id: "1234",
      url: "sample",
    },
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `https://marketplace.cyclic.app/api/v1/register`,
        formData
      );
      cookie.set("token", response.data.token);
      cookie.set("user", JSON.stringify(response.data.user), {
        sameSite: "none",
        secure: true,
      });

      alert("User created successfully");
      alert("Logged In successfully");
      router.push("/account");
    } catch (error) {
      console.error(error);
      alert("An error occurred");
    }
  };
  return (
    <div className="signup">
      <div className="signup_">
        <form onSubmit={handleSubmit} className="signup__">
          <div className="signup_title">
            <p>Signup:-</p>
          </div>
          <div className="signup_name">
            <div>
              <p>Username</p>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Username"
              />
            </div>
          </div>
          <div className="signup_email">
            <p>Email</p>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
            />
          </div>
          <div className="signup_email">
            <p>Password</p>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
            />
          </div>
          <div className="ctas">
            <div className="signup_cta" onClick={handleSubmit}>
              <p>Sign Up</p>
              <input
                type="submit"
                placeholder="Login"
                hidden
                onSubmit={() => handleSubmit()}
              />
            </div>
            <div className="signup_cta" onClick={() => router.push("/login")}>
              <p>Already?</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const { token } = parseCookies(ctx);
  if (token) {
    const { res } = ctx;
    res.writeHead(302, { Location: "/account" });
    res.end();
  }
  return {
    props: {},
  };
}

export default Signup;
