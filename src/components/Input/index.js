import React from "react";
import "./styles.css";

const Input = props => (
  <input
    type="text"
    className="input"
    id={props.id}
    placeholder={props.label}
    value={props.value}
    onChange={props.onChange}
  />
);

export default Input;