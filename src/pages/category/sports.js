import React from "react";
import baseUrl from "../../../helpers/baseUrl";
import DOD from "../../../components/home/DOD";

const Sports = ({ Dproducts, Nproducts }) => {
  return (
    <div className="electronics">
      <div className="electronics_banner">
        <p>Grab Upto 50% Off On Selected Products</p>
        <div className="electronics_banner_cta">
          <p>Buy Now</p>
        </div>
      </div>
      {Dproducts.length >= 1 && (
        <DOD title="Deals of the Day!" wtd="dod" products={Dproducts} />
      )}
      {Nproducts.length >= 1 && (
        <DOD title="New Arrivals!" wtd="nA" products={Nproducts} />
      )}
    </div>
  );
};

export async function getServerSideProps() {
  let res = null;
  let data = [];
  let res1 = null;
  let data1 = [];
  try {
    res = await fetch(`${baseUrl}/api/v1/products/dod?category=sports`);
    data = await res.json();
    res1 = await fetch(`${baseUrl}/api/v1/products/nA?category=sports`);
    data1 = await res1.json();
    return {
      props: {
        Dproducts: data.products,
        Nproducts: data1.products,
      },
    };
  } catch (err) {
    return {
      props: {
        error: err.message,
      },
    };
  }
}

export default Sports;
