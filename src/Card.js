import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="card-body">
        <img src={`https://robohash.org/${props.id}`} alt="robot" />
        <div className="card-content">
          <h2>{props.name}</h2>
          <p>{props.email}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
