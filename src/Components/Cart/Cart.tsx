import React from "react";
import "./Cart.css";

//import Types
import { CartProps } from "../../Data/cart";

interface Props {
  cart: CartProps;
  numOfStatus: number;
  totalNum: number;
}

export const Cart: React.FC<Props> = ({ cart, numOfStatus, totalNum }) => {
  const { cartTitle, cartPic } = cart;
  console.log(numOfStatus);
  return (
    <div className="cart-container col-md-4 col-11 mt-2">
      <div className="cart-title">
        <span>{cartTitle}</span>
        <div className="">
          <span className="cart-num">{numOfStatus} </span>
          <span>/ {totalNum}</span>
        </div>
      </div>
      <img src={cartPic} className="ship-cart" />
    </div>
  );
};
