import React from "react";

const Sticky = props => {
  const { swapItems } = props;


  const selectedArray = 
  swapItems.filter(function(item){
    return item.selected === true;
  });

  const costArray = [];
  selectedArray.forEach(function(item){
    costArray.push(item.cost);
  });

  const monthlySavings = 
  costArray.reduce(function(accumulator, currentValue, currentIndex, array){
    return accumulator + currentValue;
  }, 0);

  const yearlySavings = monthlySavings * 12;

  return(
  <div className="Sticky">
    <button className="savings-button">${yearlySavings}/yr savings</button>
  </div>
)};

export default Sticky;