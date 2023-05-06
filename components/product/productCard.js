import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import ReactStars from "react-stars";
import { addToCart } from "../../reducers/cartSlice";

const ProductCard = ({
  name,
  desc,
  salePrice,
  price,
  img,
  ratings,
  numOfReviews,
  id,
  product,
}) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="productCard">
      <div className="productCard__top">
        <Link href={`/product/${id}`}>
          <div className="productCard_img">
            <Image src={img} alt={name} width={300} height={400} />
          </div>
        </Link>
        <AiOutlineHeart />
      </div>
      <div className="productCard_info">
        <div>
          <p style={{ fontSize: "3rem", fontWeight: "600" }}>{name}</p>
          <p style={{ fontSize: "2.5rem", fontWeight: "600" }}>
            ₹{salePrice}.00
          </p>
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
      <div className="productCard_cta" onClick={() => handleAddToCart(product)}>
        <p>Add To Cart</p>
      </div>
    </div>
  );
};

export default ProductCard;
