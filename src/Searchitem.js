import React from "react";
import "./Card.css";

const Searchitem = ({ onChange }) => {
  return (
    <div className="input-field">
      <h1>ROBOT-FRIENDS</h1>
      <input type="text" placeholder="SEARCH FOR ROBOTS" onChange={onChange} />
    </div>
  );
};

export default Searchitem;
