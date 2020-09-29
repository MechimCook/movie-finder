import React from "react";
const Scroll = ({ collapsed, children, addedStyle}) => {
// creates scrol wrapper for horizontal scrolling
  return (
    <div>
      <div className={`scroller-wrapper ${addedStyle}`} >
        <div className="scroller">
          {children}
        </div>
      </div>
    </div>
  );
};
export default Scroll;
