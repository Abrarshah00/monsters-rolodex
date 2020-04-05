import React from "react";

import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h2 className="card-name"> {props.monster.name}</h2>
    <p className="card-email"> {props.monster.email} </p>
  </div>
);
