import React from "react";

const Button = (props) => {
  return <button onClick={props.btnHandler}>{props.btnText}</button>;
};
export default Button;
