import React from "react";
import "./styles.css";

const Select = props => (
  <select
    className="select"
    id={props.id}
    name={props.name}
    onChange={props.onChange}
  >
    {props.children}
  </select>
);

export default Select;