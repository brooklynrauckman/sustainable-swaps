import React from "react";
import Modal from "./modal.js";


const Hero = ({isShowing, setIsShowing, swapItems, updateItems}) => (
  <div className="hero-wrapper">
    <div className="Hero">
    <Modal
        isShowing={isShowing}
        swapItems={swapItems}
        setIsShowing={setIsShowing}
        updateItems={updateItems}
        />
        <div className="bag"
           onClick={() => {setIsShowing(!isShowing)}}
        >
        <svg
          className="bag-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="25"
          height="25"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
        </svg>
      </div>
      <div className="title">
        <h3 className="name">Sustainable Swaps</h3>
        <h1 className="tagline">
          <div>Swap your habits</div>
          <div>live simply.</div>
        </h1>
      </div>
    </div>
  </div>
);

export default Hero;
