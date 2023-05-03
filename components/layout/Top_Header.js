import React from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";

const Top_Header = () => {
  return (
    <div className="topHeader">
      <div>
        <BsTelephone />
        <p>+00123456789</p>
      </div>
      <div>
        <p>Get Upto 50% Off on Selected Item</p>
      </div>
      <div>
        <div>
          <p>Eng</p>
          <AiOutlineDown />
        </div>
        <div>
          <p>Location</p>
          <AiOutlineDown />
        </div>
      </div>
    </div>
  );
};

export default Top_Header;
