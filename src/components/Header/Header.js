import React from "react";
import bags from "../../images/bags.jpg";
import Widget from "../Widget/Widget";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={bags} alt="your super shop" className="test" />
      </div>

      <Widget />
    </div>
  );
};

export default Header;
