import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import ReactStars from "react-stars";

const ProductCard = ({ name, desc, price, img, ratings, numOfReviews }) => {
  return (
    <div className="productCard">
      <div className="productCard__top">
        <div className="productCard_img">
          <Image src={img} alt={name} width={300} height={400} />
        </div>
        <AiOutlineHeart />
      </div>
      <div className="productCard_info">
        <div>
          <p style={{ fontSize: "3rem", fontWeight: "600" }}>{name}</p>
          <p style={{ fontSize: "2.5rem", fontWeight: "600" }}>₹{price}.00</p>
        </div>
        <div>
          <p>{desc}</p>
        </div>
        <div>
          <ReactStars
            value={ratings}
            color2="#209c20"
            edit={false}
            half={true}
            size={20}
          />
          <span>({numOfReviews})</span>
        </div>
      </div>
      <div className="productCard_cta">
        <p>Add To Cart</p>
      </div>
    </div>
  );
};

export default ProductCard;
