/* Swap Card Grid */

import React from "react";
import Swaps from "./swaps.js";

const Cards = props => {
  const { search, swapItems } = props;
  return (
    <div className="Cards">
      {swapItems.map(item => {
        return item.good.includes(search.toLowerCase()) ||
          item.bad.includes(search.toLowerCase()) ||
          item.tag === search 
           ? (
          <div
            className={item.selected === true ? "card selected" : "card"}
            key={item.id}
            id="card"
          >
            <Swaps card={item} {...props} />
          </div>
        ) : 
          ""
        ;
      })}
    </div>
  );
};

export default Cards;
