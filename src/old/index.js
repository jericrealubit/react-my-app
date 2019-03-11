import React, { Component } from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Jeric", age: 41 },
      { name: "Clairec", age: 40 },
      { name: "Kirby", age: 6 }
    ]
  };

  switchNameHandler = newName => {
    //console.log("Was clicked!");
    //this.state.persons[0].name = "YoieZev";
    this.setState({
      persons: [
        { name: newName, age: 1 },
        { name: "Clairec", age: 40 },
        { name: "Kirby", age: 6 }
      ]
    });
  };

  nameChnagedHandler = event => {
    this.setState({
      persons: [
        { name: "Jeric", age: 41 },
        { name: event.target.value, age: 40 },
        { name: "Kirby", age: 6 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="person">
        <button
          style={style}
          onClick={() => this.switchNameHandler("Kirby Rhys")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Rhys Kirby")}
          changed={this.nameChnagedHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<App />, document.querySelector("#root"));
