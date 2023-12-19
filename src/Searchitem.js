import React from "react";
import "./Card.css";

const Searchitem = ({ searchange }) => {
  return (
    <div className="input-field">
      <h1>ROBOT-FRIENDS</h1>
      <input
        type="text"
        placeholder="SEARCH FOR ROBOTS"
        onChange={searchange}
      />
    </div>
  );
};

export default Searchitem;
