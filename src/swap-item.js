import React from "react";

const SwapItem = props => (
      <h3 className="swap-item">
      <div className="bad">{props.card.bad}</div>
      <div>{props.card.good}</div>
      </h3>
);

export default SwapItem;
