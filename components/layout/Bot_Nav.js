import Link from "next/link";
import React from "react";
import { GoHome } from "react-icons/go";
import { BiSearchAlt } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useRouter } from "next/router";

const Bot_Nav = () => {
  const router = useRouter();
  return (
    <div className="botNav">
      <Link className="link" href="/">
        <GoHome className={router.pathname === "/" ? "active" : ""} />
      </Link>
      <Link className="link" href="/search">
        <BiSearchAlt
          className={router.pathname === "/search" ? "active" : ""}
        />
      </Link>
      <Link className="link" href="/">
        <BsCart4 className={router.pathname === "/cart" ? "active" : ""} />
      </Link>
      <Link className="link" href="/">
        <MdOutlineAccountCircle
          className={
            router.pathname === ["/account", "/profile", "/signup", "/login"]
              ? "active"
              : ""
          }
        />
      </Link>
    </div>
  );
};

export default Bot_Nav;
