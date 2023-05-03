import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="home__banner">
      <p>Shopping And Departmental Store</p>
      <p>
        Shopping is a bit of relaxing hobbie for me, which is sometime troubling
        for the bank balance.
      </p>
      <Link className="home__banner__cta" href="#categories">
        <p>Shop Now</p>
      </Link>
    </div>
  );
};

export default Banner;
