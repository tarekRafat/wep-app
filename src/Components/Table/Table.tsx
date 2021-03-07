import React, { useEffect, useState } from "react";
import "./Table.css";

interface Props {
  products: Product[];
}
export interface Product {
  date: string;
  details: string;
  size: number;
  website: string;
  price: number;
  status: boolean;
}

export const Table: React.FC<Props> = ({ products }) => {
  let [count, setCount] = useState(0);
  let statusBtnHanddle = (status: boolean) => {
    if (status) {
      return ["SUCCESS"];
    }
    return ["FAIL"];
  };

  return (
    <section className="col-12 table-sec">
      <table className="table">
        <thead className="table-head">
          <tr>
            <th scope="col">DATE</th>
            <th scope="col">PRODUCT</th>
            <th scope="col">SIZE(US)</th>
            <th scope="col">WEBSITE</th>
            <th scope="col">PRICE</th>
            <th scope="col">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={index}>
                <th scope="row">{product.date}</th>
                <td>{product.details}</td>
                <td>{product.size}</td>
                <td>{product.website}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className={product.status ? "success-btn" : "fail-btn"}
                  >
                    {" "}
                    {statusBtnHanddle(product.status)}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
