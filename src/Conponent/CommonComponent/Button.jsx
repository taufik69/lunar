import React from "react";

const Button = ({ btnstyle, children }) => {
  return (
    <>
      <button className={btnstyle}> {children} </button>
    </>
  );
};

export default Button;
