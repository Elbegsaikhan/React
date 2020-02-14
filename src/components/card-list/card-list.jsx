import React from "react";
import "./style.css";

export const CardList = props => (
  <div className="card-list">
    {props.robots.map(el => (
      <div key={el.id}>{el.email}</div>
    ))}
  </div>
);
