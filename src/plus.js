import React from "react";

const Plus = props => {
  const { updateItems, swapItems } = props;
  return (
    <div
      className="plus"
      id={props.card.id}
      onClick={e => {
        const makeNewSwaps = swapItems.map(item => {
          if (item.id === e.target.id) {
            item.selected = !item.selected;
          }
          return item;
        });
        updateItems(makeNewSwaps);
      }}
    >
      <svg
        className="plus-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="gray"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line className="minus" x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    </div>
  );
};

export default Plus;
