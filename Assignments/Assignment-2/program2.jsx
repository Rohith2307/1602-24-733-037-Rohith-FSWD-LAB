import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    console.log("Clock mounted");

    this.timer = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Clock updated");
  }

  componentWillUnmount() {
    console.log("Clock unmounted");
    clearInterval(this.timer);
  }

  render() {
    return <h2>{this.state.time.toLocaleTimeString()}</h2>;
  }
}

class App extends Component {
  state = { show: true };

  render() {
    return (
      <div>
        <h2>Digital Clock</h2>

        <button
          onClick={() => this.setState({ show: !this.state.show })}
        >
          {this.state.show ? "Hide Clock" : "Show Clock"}
        </button>

        {this.state.show && <Clock />}
      </div>
    );
  }
}

export default App;
