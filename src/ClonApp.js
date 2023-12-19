import React, { Component } from "react";
import Cardlist from "./Cardlist";
import { robots } from "./robots";
import Searchitem from "./Searchitem";

class ClonApp extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchItem: "",
    };
  }

  onChanged = (event) => {
    this.setState({ searchItem: event.target.value });
    // console.log(this.searchItem);
  };

  render() {
    const filterItem = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchItem.toLowerCase());
    });
    return (
      <>
        <Searchitem onChange={this.onChanged} />
        <Cardlist robots={filterItem} />
      </>
    );
  }
}

export default ClonApp;
