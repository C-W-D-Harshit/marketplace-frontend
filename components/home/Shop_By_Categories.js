import React from "react";
import Category_Card from "./Category_Card";
import img from "../../public/cate.jpg";

const Shop_By_Categories = () => {
  return (
    <div className="home_sec1" id="categories">
      <p>Shop Our Top Categories</p>
      <div className="home_sec1_hold">
        <Category_Card title="Electronics" img={img} />
        <Category_Card title="Fashion" img={"/fas.jpg"} />
        <Category_Card title="Health" img={"/he.jpg"} />
        <Category_Card title="Beauty" img={"/be.jpg"} />
        <Category_Card title="Sports" img={"/spp.jpg"} />
        <Category_Card title="Decoration" img={"/de.jpg"} />
      </div>
    </div>
  );
};

export default Shop_By_Categories;
