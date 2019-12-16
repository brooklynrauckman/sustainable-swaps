/* Swap Card */

import React from "react";
import SwapItem from "./swap-item.js";
import Bars from "./bars.js";
import LearnMore from "./learn-more.js";
import Plus from "./plus.js";

const Swaps = props => (
  <div className="Swaps">
    <SwapItem {...props} />
    <Bars {...props} />
    <LearnMore {...props} />
    <Plus {...props} />
  </div>
);

export default Swaps;
