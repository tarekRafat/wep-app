import React from "react";
import { Cart } from "../Cart/Cart";
import { Header } from "../Header/Header";
import { Table } from "../Table/Table";
import { Transfer } from "../Transfer/Transfer";
import { products } from "../../Data/products";
import { person } from "../../Data/profileInfo";
import { carts } from "../../Data/cart";
import "./Home.css";

//import types
import { ProductProp } from "../../Data/products";

let numberOfSucess = (products: ProductProp[]) => {
  let sucessNum = products.filter(product => product.status === true);
  return sucessNum.length;
};

let numberOfFail = (products: ProductProp[]) => {
  let FailNum = products.filter(product => product.status === false);
  return FailNum.length;
};

function Home() {
  return (
    <React.Fragment>
      <Header person={person} />
      <div className="container-fluid pb-4">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="row justify-content-around">
              <section className="col-md-2 col-11 filter">
                <span>Filter by</span>
                <div className="filter-btns">
                  <button>1D</button>
                  <button className="active">1M</button>
                  <button>1Y</button>
                </div>
              </section>
              <Cart
                cart={carts[0]}
                numOfStatus={numberOfSucess(products)}
                totalNum={products.length}
              />
              <Cart
                cart={carts[1]}
                numOfStatus={numberOfFail(products)}
                totalNum={products.length}
              />
            </div>
            <div className="row">
              <Table products={products} />
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <Transfer person={person} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
