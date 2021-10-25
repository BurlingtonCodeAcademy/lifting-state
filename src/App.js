import React from "react";
import BoilingVerdict from "./components/BoilingVerdict.js";
import Calculator from "./components/Calculator.js";

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0,
      scale: 'c'
    };
  }

  render() {
    return (
      <div>
        <BoilingVerdict celsius={this.state.scale === "f" ? toCelsius(this.state.temperature) : this.state.temperature} />
        <Calculator
          stateUpdater={this.setState}
          temperature={this.state.scale === "f" ? toCelsius(this.state.temperature) : this.state.temperature}
          type={'celsius'}
          convert={this.state.scale}
        />
        <Calculator
          stateUpdater={this.setState}
          type={'fahrenheit'}
          temperature={this.state.scale === 'c' ? toFahrenheit(this.state.temperature) : this.state.temperature}
          convert={this.state.scale}
        />
      </div>
    );
  }
}

export default App;
