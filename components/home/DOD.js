import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import ProductCard from "../product/productCard";
import img from "../../public/product-img.png";

const DOD = ({ title, wtd, products }) => {
  // console.log(products);
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
        {products &&
          products.map((product) => (
            <ProductCard
              name={product.name}
              desc={product.description}
              price={product.price}
              ratings={product.ratings}
              numOfReviews={product.numOfReviews}
              img={img}
              id={product._id}
              key={product._id}
              salePrice={product.salePrice}
              product={product}
            />
          ))}
      </div>
    </div>
  );
};

export default DOD;
