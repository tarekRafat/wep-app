export interface CartProps {
  cartTitle: string;
  cartNum: number;
  cartPic: string;
}
export const carts: CartProps[] = [
  {
    cartTitle: "Total checkouts",
    cartNum: 72,
    cartPic: "./svgs/bluecart.svg",
  },
  {
    cartTitle: "Total Failure",
    cartNum: 10,
    cartPic: "./svgs/orangecart.svg",
  },
];
