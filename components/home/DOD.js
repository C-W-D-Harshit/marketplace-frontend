import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import ProductCard from "../product/productCard";
import img from "../../public/product-img.png";

const DOD = ({ title, wtd }) => {
  return (
    <div className="dod" style={{ zIndex: "1", width: "96%" }}>
      <div className="dod_top">
        <div className="dod_tit">
          <p style={{ fontFamily: "poppins" }}>{title}</p>
        </div>
        <Link href={`/${wtd}`} className="dod_cta">
          <p>More Products</p>
          <AiOutlineArrowRight />
        </Link>
      </div>
      <div className="dod_hold">
        <ProductCard
          name="Airpods"
          desc="Sample description"
          price={83}
          ratings={5}
          numOfReviews={208}
          img={img}
        />
        <ProductCard
          name="Airpods"
          desc="Sample description"
          price={83}
          ratings={5}
          numOfReviews={208}
          img={img}
        />
        <ProductCard
          name="Airpods"
          desc="Sample description"
          price={83}
          ratings={5}
          numOfReviews={208}
          img={img}
        />
        <ProductCard
          name="Airpods"
          desc="Sample description"
          price={83}
          ratings={5}
          numOfReviews={208}
          img={img}
        />
        <ProductCard
          name="Airpods"
          desc="Sample description"
          price={83}
          ratings={5}
          numOfReviews={208}
          img={img}
        />
        <ProductCard
          name="Airpods"
          desc="Sample description"
          price={83}
          ratings={5}
          numOfReviews={208}
          img={img}
        />
      </div>
    </div>
  );
};

export default DOD;
