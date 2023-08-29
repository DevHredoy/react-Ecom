import React from "react";
import cart from "../../images/carts.png";

const Widget = () => {
  return (
    <div className="widget">
      <button className="classes.container"> </button>

      <span className="classes.productsCount"></span>

      <img src={cart} alt="product count" className="classes.shoppingCart" />
    </div>
  );
};

export default Widget;
