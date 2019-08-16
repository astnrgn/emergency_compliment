import React, { Component } from "react";

class Hello extends Component {
  constructor() {
    super();
    this.state = {
      name: "Keene"
    };
  }
  render() {
    return (
      <div>
        <h1>Hello{this.state.name}</h1>
      </div>
    );
  }
}

export default Hello;
