import React, { Component } from "react";
import Box from "./Box";

class MainClassComponent extends Component {
  state = {
    persons: [
      { name: "Maria", title: "CEO", age: "29" },
      { name: "Karin", title: "Developer", age: "29" },
      { name: "Rakhi", title: "Designer", age: "25" },
    ],
  };

  changeNamehandler = () => {
    console.log("WOW");
  };
  render() {
    return (
      <main>
        <Box
          name={this.state.persons[0].name}
          title={this.state.persons[0].title}
          age={this.state.persons[0].age}
        />
        <Box
          name={this.state.persons[1].name}
          title={this.state.persons[1].title}
          age={this.state.persons[1].age}
        />
        <Box
          name={this.state.persons[2].name}
          title={this.state.persons[2].title}
          age={this.state.persons[2].age}
        />
        <button onClick={this.changeNamehandler}>Click me</button>
      </main>
    );
  }
}
export default MainClassComponent;
