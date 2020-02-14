import React, { Component } from "react";
import "./styles.css";
import { Cardlist } from "./components/card-list/card-list";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ robots: data }));
  }

  render() {
    return (
      <div className="App">
        <h1>Роботуудын хайлт</h1>
        <Cardlist robots={this.state.robots} />
     
      </div>
    );
  }
}
