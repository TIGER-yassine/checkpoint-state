import React, { Component } from "react";

export default class FootballPlayer extends Component {
  state = {
    name: "Chris Bumstead",
    imgURL:
      "https://cbum.store/wp-content/uploads/2021/12/flat750x075f-pad750x1000f8f8f8-6.jpg",
    wiki: "Bumstead was born and raised in Ottawa, Ontario. He was involved in multiple sports in high school, including fencing, football, baseball, basketball, and hockey. He started weightlifting at the age of 14, and between the ninth and twelfth grade, he went from 170 to 225 pounds, growing his legs the most. After building what he thought was a good physique, Bumstead met his first coach, professional bodybuilder Iain Valliere, who was dating his sister. On October 19, 2022, Chris and Iain formally announced they will no longer be working together in order to focus on their own Mr. Olympia shows.",
    mso: 4,
    cont: 0,
    memory: null,
  };
  showDT = (number) => {
    alert(`He has won Mr. Olympia ${number} times`);
  };
  componentDidMount() {
    this.setState({
      memory: setInterval(() => this.inc(), 1000),
    });
  }

  inc = () => {
    this.setState({ cont: this.state.cont + 1 });
  };
  componentWillUnmount() {
    clearInterval(this.state.memory);
  }
  render(showDT) {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <img src={this.state.imgURL} alt="img" height={400} />
        <p>{this.state.wiki}</p>
        <button onClick={() => this.showDT(this.state.mso)}>
          mister olympia
        </button>
        <p>{this.state.cont}</p>
      </div>
    );
  }
}
