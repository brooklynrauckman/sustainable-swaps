import React from "react";
import searchTags from "./search-tags.js";

const Search = props => {
  const { updateSearch, activeTag, updateActiveTag } = props;

  return (
    <div className="Search">
      <input
        type="text"
        className="search"
        placeholder="Explore our swaps..."
        onKeyUp={e => updateSearch(e.target.value)
        }
      />
      <div className="tag-container">
        {searchTags.map(item => {
          return <button 
                  className={`search-tag ${activeTag === item.tag ? "filter" : ""}`}
                  id={item.tag}
                  key={item.id}
                  onClick={ e => {
                    if (activeTag === e.target.id) 
                    {updateActiveTag("");
                    updateSearch("");}
                    else{
                      updateSearch(e.target.id);
                      updateActiveTag(e.target.id);
                    }
                  }}
                  >{item.tag}
                  </button>;
        })}
      </div>
    </div>
  );
};

export default Search;
