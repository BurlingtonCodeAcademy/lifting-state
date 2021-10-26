import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (evt) => {
    this.props.onTemperatureChange(evt.target.value);
  };

  render() {
    return (
      <fieldset>
        <legend>Enter temperature in {this.props.scale}:</legend>
        <input value={this.props.temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default Calculator;
