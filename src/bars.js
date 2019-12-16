import React from "react";

const Bars = props => (
  <div>
    <div className="bars">
        <div className="ease-bar" style={{width:`${props.card.ease}%`}}></div>
        <div className="effect-bar" style={{width:`${props.card.effect}%`}}></div>
    </div>
    <div className="legend">
      <ul>
        <li className="ease-dot">
          <span className="ease">ease of use</span>
        </li>
        <li className="effect-dot">
          <span className="effect">effectiveness</span>
        </li>
      </ul>
    </div>
  </div>
);

export default Bars;