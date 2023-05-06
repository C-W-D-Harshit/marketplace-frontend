import React from "react";
import baseUrl from "../../../helpers/baseUrl";

const ID = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
};

export async function getServerSideProps({ params: { id } }) {
  let res = null;
  let data = [];
  try {
    res = await fetch(`${baseUrl}/api/v1/product/${id}`);
    data = await res.json();
    return {
      props: {
        success: data.success,
        product: data.product,
      },
    };
  } catch (err) {
    return {
      props: {
        product: null,
        error: err.message,
      },
    };
  }
}

export default ID;
