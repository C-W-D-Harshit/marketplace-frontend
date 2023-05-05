import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const DOD = ({ title, wtd }) => {
  return (
    <div className="dod" style={{ zIndex: "1", width: "96%" }}>
      <div className="dod_top">
        <div className="dod_tit">
          <p style={{ fontFamily: "poppins" }}>{title}</p>
        </div>
        <div className="dod_cta">
          <p>More Products</p>
          <AiOutlineArrowRight />
        </div>
      </div>
      <div className="dod_hold">{/* ProductCard */}</div>
    </div>
  );
};

export default DOD;
