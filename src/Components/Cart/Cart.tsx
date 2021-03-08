import React from "react";
import { useSpring, animated } from "react-spring";
import "./Cart.css";

//import Types
import { CartProps } from "../../Data/cart";

interface Props {
  cart: CartProps;
  numOfStatus: number;
  totalNum: number;
}

export const Cart: React.FC<Props> = ({ cart, numOfStatus, totalNum }) => {
  //animate numbers
  const props = useSpring({
    number: Math.floor(numOfStatus),
    from: { number: 0 },
  });
  const { cartTitle, cartPic } = cart;

  return (
    <div className="cart-container col-md-4 col-11 mt-2">
      <div className="cart-title">
        <span>{cartTitle}</span>
        <div className="">
          <animated.span className="cart-num">
            {props.number.interpolate((number: any) => Math.floor(number))}
          </animated.span>
          <span>/ {totalNum}</span>
        </div>
      </div>
      <img src={cartPic} className="ship-cart" />
    </div>
  );
};
