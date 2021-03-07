import { type } from "node:os";
import React from "react";
import "./Cart.css";
interface Props {
  cart: Cart;
  numOfStatus: number;
  totalNum: number;
}

interface Cart {
  cartTitle: string;
  cartNum: number;
  cartPic: string;
}

export const Cart: React.FC<Props> = ({ cart, numOfStatus, totalNum }) => {
  const { cartTitle, cartNum, cartPic } = cart;
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
