import React from "react";

const LearnMore = props => (
  <div className="learn-more">
    <a className="link" href={props.card.link} target="blank">
      <svg
        className="link-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
      </svg>
      <span>Learn More</span>
    </a>
    <span className="swap-value">+ ${props.card.cost}/mo</span>
  </div>
);

export default LearnMore;