import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Checkbox } from "@mui/material";
import ProductCard from "../../components/product/productCard";
import img from "../../public/product-img.png";
import axios from "axios";
import baseUrl from "../../helpers/baseUrl";
// import axios from "axios";

const Shop = ({ products }) => {
  const [rating, setRating] = React.useState(0);
  const [price, setPrice] = React.useState([0, 500]);
  const [checked, setChecked] = React.useState(false);
  const [category, setCategory] = React.useState(null);
  const [items, setItems] = React.useState([]);
  const [un, setUn] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");
  const [dat, setData] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  const handleChange1 = (event, newValue) => {
    setPrice(newValue);
    getData();
  };
  const handleChange2 = (event, newValue) => {
    setRating(newValue);
    getData();
    getData();
  };
  React.useEffect(() => {
    if (products) {
      const uq = products.map((product) => product.category);
      const g = [...new Set(uq)];
      const newUn = g.map((item, index) => ({
        id: index + 1,
        category: item,
        checked: false,
      }));
      setUn(newUn);
    }
    getData();
  }, []);
  async function getData() {
    let link = `https://marketplace.cyclic.app/api/v1/products?keyword=${keyword}&page=${currentPage}&salePrice[gte]=${price[0]}&salePrice[lte]=${price[1]}&ratings=${rating}`;
    if (category) {
      link = `https://marketplace.cyclic.app/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings=${rating}`;
    }
    const { data } = await axios.get(link);
    setData(data);
    console.log(dat);
  }

  const handleCheckboxChange = (id) => {
    const newUn = un.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setUn(newUn);
  };
  //   console.log(un);
  return (
    <div className="shop">
      <div className="shop_fil">
        <p>Filter</p>
        <div className="shop_filter">
          <p>Rating</p>
          <Slider
            getAriaLabel={() => "Rating"}
            value={rating}
            onChange={handleChange2}
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={5}
            onClick={() => getData()}
          />
        </div>
        <div className="shop_filter">
          <p>Price</p>
          <Slider
            getAriaLabel={() => "Price range"}
            value={price}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            min={0}
            step={500}
            max={10000}
            onClick={() => getData()}
          />
        </div>
        <div className="shop_filter">
          <p>Categories</p>
          <div className="shop_filter_">
            {un &&
              un.map((u) => (
                <div className="shop_filter__" key={u.id}>
                  <Checkbox
                    checked={u.checked}
                    onChange={() => {
                      handleCheckboxChange(u.id);
                      setCategory(u.category);
                    }}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                  <p style={{ textTransform: "capitalize" }}>{u.category}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="shop_hold">
        {dat.products &&
          dat.products
            .reverse()
            .map((product) => (
              <ProductCard
                name={product.name}
                desc={product.shortDescription}
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

export async function getServerSideProps() {
  try {
    const res = await fetch(`${baseUrl}/api/v1/products`);
    const data = await res.json();
    return {
      props: {
        products: data.products,
      },
    };
  } catch (err) {
    return {
      props: {
        products: null,
        error: err.message,
      },
    };
  }
}

export default Shop;
