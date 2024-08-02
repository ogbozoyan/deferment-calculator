import React from "react";

function Button({ handleClick, children }) {
  return (
    <button className="btn-primary" onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
