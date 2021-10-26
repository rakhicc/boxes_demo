import React, { Component } from "react";
import Box from "./Box";

class MainClassComponent extends Component {
  state = {
    persons: [
      { id: 1, name: "Maria", title: "CEO", age: "29" },
      { id: 2, name: "Karin", title: "Developer", age: "29" },
      { id: 3, name: "Rakhi", title: "Designer", age: "25" },
    ],
  };

  changeNamehandler = () => {
    console.log("WOW");
  };
  render() {
    return (
      <main>
        {this.state.persons.map((person) => (
          <Box
            key={person.id}
            name={person.name}
            age={person.age}
            title={person.title}
          />
        ))}

        <button onClick={this.changeNamehandler}>Click me</button>
      </main>
    );
  }
}
export default MainClassComponent;
