import React from "react";

const Card = props => (
  <div className="card card-container">
    <img className="card-img-top" src={props.image} alt={props.imageTitle} />
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
    </div>
  </div>
);

export default Card;
