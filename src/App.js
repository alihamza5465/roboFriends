// import React, { Component } from "react";
// import Cardlist from "./Cardlist";
// import Searchitem from "./Searchitem";
// import { robots } from "./robots";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       robots: robots,
//       searchfield: "",
//     };
//   }
//   onSearchfields = (event) => {
//     this.setState({ searchfield: event.target.value });
//   };

//   render() {
//     const filteredRobots = this.state.robots.filter((robot) => {
//       return robot.name
//         .toLowerCase()
//         .includes(this.state.searchfield.toLowerCase());
//     });
//     return (
//       <div>
//         <Searchitem searchange={this.onSearchfields} />
//         <Cardlist robots={filteredRobots} />
//       </div>
//     );
//   }
// }

// export default App;
