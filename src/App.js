import "./App.css";
import React, { Component } from "react";
import FootballPlayer from "./components/FootballPlayer";

export default class App extends Component {
  state = {
    show: false,
  };
  showreact = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="App">
        <button onClick={() => this.showreact()}>
          {this.state.show ? "Hide" : "Show"}
        </button>
        {this.state.show ? <FootballPlayer /> : null}
      </div>
    );
  }
}
