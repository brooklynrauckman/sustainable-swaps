import React, {useState} from "react";

const Modal = ({isShowing, swapItems, setIsShowing, updateItems}) => { 
  
 const [url, updateUrl] = useState(""); 
  
  const selectedArray = 
  swapItems.filter(function(item){
    return item.selected === true;
  });

  return(
  isShowing === true ?
      <div className="modal">
        <div className="close"
             onClick={() => {setIsShowing(!isShowing)}}   
        >
          <svg className="close-icon" 
               xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </div>
        <h3>
          Your Swaps:
        </h3>
         {
          selectedArray.length ? swapItems.map(item => {
            return item.selected === true 
            ? ( <div className="in-bag" key={item.id}>
                  <div className="swap-item" style={{lineHeight: "1.5rem"}}>
                    <div className="bad">
                         {item.bad} 
                    </div>
                    <div className="good" 
                         style={{fontWeight: "bold", fontSize:"1rem"}}>
                         {item.good} 
                    </div> 
                  </div>
                  <div className="value-and-remove">
                    <span className="swap-value " 
                          style={{float: "none", fontSize: ".8rem"}}> + ${item.cost}/mo</span>
                    <span className="remove"
                          id={item.id}
                          onClick={e => {
                            const makeNewSwaps = selectedArray.map(i => {
                              if (i.id === e.target.id) {
                                i.selected = !i.selected;
                              }
                              return i;
                            });
                            updateItems(makeNewSwaps);
                          }
                          }
                    >
                      <svg
                        className="minus-icon"
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
                        <line x1="8" y1="12" x2="16" y2="12" />
                      </svg>
                    </span>
                  </div>
                </div>) 
            : ("")
          }) : <div><p>No saved swaps.</p>
              <p>Use the search below to explore swaps!</p></div>
        }
        <div className="share">
          <button 
             className="share-button"
             onClick={e => {
                const selectedArray = 
                swapItems.filter(function(item){
                  return item.selected === true;
                });
                const idArray = [];
                selectedArray.forEach(function(item){
                  idArray.push(item.id);
                });
                idArray.join(",");
               const generateUrl = 
               `https://${window.location.hostname}?selectedSwaps=${idArray.join(",")}`;
                updateUrl(generateUrl);
             }}
             >share</button>
        </div>
        <div className="share-link">
          {url.length ? url : ""}
        </div>  
      </div>
      : null
)}; 


export default Modal;