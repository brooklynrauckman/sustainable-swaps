import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import initialSwapItems from "./config.js";
import Hero from "./hero.js";
import Search from "./search.js";
import Cards from "./cards.js";
import Sticky from "./sticky.js";

import "./styles.css";

const App = () => {
  const [search, updateSearch] = useState("");
  const [swapItems, updateItems] = useState(initialSwapItems);
  const [isShowing, setIsShowing] = useState(false);
  const [activeTag, updateActiveTag] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let myParam = urlParams.get("selectedSwaps");
    if (myParam) myParam = myParam.split(",");
    else myParam = [];
    const activeItems = swapItems.map(item => {
      if (myParam.includes(item.id)) {
        item.selected = !item.selected;
      }
      return item;
    });
    updateItems(activeItems);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Hero
        isShowing={isShowing}
        setIsShowing={setIsShowing}
        swapItems={swapItems}
        updateItems={updateItems}
      />
      <div className="App">
        <Search updateSearch={updateSearch} swapItems={swapItems} updateActiveTag={updateActiveTag} activeTag={activeTag} />
        <Cards
          search={search}
          swapItems={swapItems}
          updateItems={updateItems}
        />
        <Sticky swapItems={swapItems} />
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
