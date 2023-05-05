import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category_Card = ({ title, img }) => {
  return (
    <Link href={`/category/${title}`} className="categoryCard">
      <Image src={img} alt="Image" width={250} height={350} priority />
      <p>{title}</p>
    </Link>
  );
};

export default Category_Card;
