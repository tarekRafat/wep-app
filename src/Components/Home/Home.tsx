import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Cart } from "../Cart/Cart";
import { Table } from "../Table/Table";
import { Transfer } from "../Transfer/Transfer";
import { products } from "../../Data/products";
import { person } from "../../Data/profileInfo";
import { carts } from "../../Data/cart";
import "./Home.css";

//import types
import { ProductProp } from "../../Data/products";

function Home() {
  let [active, setActive] = useState();
  let totalNumber = products.length;
  let [filter, setFilter] = useState(products);
  let [totalNum, setTotalNum] = useState(totalNumber);
  let [numbSuccess, setNumSuccess] = useState(numberOfSucess(products));
  let [numbFail, setNumFail] = useState(numberOfFail(products));

  function numberOfSucess(products: ProductProp[]) {
    let sucessNum = products.filter(product => product.status === true);
    return sucessNum.length;
  }

  function numberOfFail(products: ProductProp[]) {
    let FailNum = products.filter(product => product.status === false);
    return FailNum.length;
  }

  let date = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let currentMonth = months[date.getMonth()];
  let currentYear = date.getFullYear();
  const filterByDay = () => {
    let dayBefore = date.getDate() - 1;
    let filteredDay: any = products
      .filter(product => product.day === dayBefore)
      .filter(product => product.month === currentMonth)
      .filter(product => product.year === currentYear);
    setFilter(filteredDay);
    setNumSuccess(numberOfSucess(filteredDay));
    setNumFail(numberOfFail(filteredDay));
    setTotalNum(numberOfFail(filteredDay) + numberOfSucess(filteredDay));
  };

  const filterByMonth = () => {
    let monthBefore = months[date.getMonth() - 1];
    let filteredMonth: any = products
      .filter(product => product.month === monthBefore)
      .filter(product => product.year === currentYear);
    setFilter(filteredMonth);
    setNumSuccess(numberOfSucess(filteredMonth));
    setNumFail(numberOfFail(filteredMonth));
    setTotalNum(numberOfFail(filteredMonth) + numberOfSucess(filteredMonth));
  };

  const filterByyear = () => {
    let yearBefore = date.getFullYear() - 1;
    let filteredYear: any = products.filter(
      product => product.year === yearBefore
    );
    setFilter(filteredYear);
    setNumSuccess(numberOfSucess(filteredYear));
    setNumFail(numberOfFail(filteredYear));
    setTotalNum(numberOfFail(filteredYear) + numberOfSucess(filteredYear));
  };
  //fading in animation
  const props = useSpring({ marginTop: 160, from: { marginTop: 0 } });

  return (
    <React.Fragment>
      <div className="container-fluid pb-4">
        <div className="row">
          <div className="col-lg-8 col-12 table-container">
            <animated.div style={props}>
              <div className="row justify-content-around">
                <div className="col-md-2 col-11 mt-2 filter">
                  <span>Filter by</span>
                  <div className="filter-btns">
                    <button onClick={filterByDay}>1D</button>
                    <button onClick={filterByMonth}>1M</button>
                    <button onClick={filterByyear}>1Y</button>
                  </div>
                </div>
                <Cart
                  cart={carts[0]}
                  numOfStatus={numbSuccess}
                  totalNum={totalNum}
                />
                <Cart
                  cart={carts[1]}
                  numOfStatus={numbFail}
                  totalNum={totalNum}
                />
              </div>
            </animated.div>
            <Table products={filter} />
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
