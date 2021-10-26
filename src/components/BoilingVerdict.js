import React from "react";

class BoilingVerdict extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(typeof this.props.celsius);
    if (parseInt(this.props.celsius) >= 100) {
      return (
        <h4>
          It <i>will</i> boil
        </h4>
      );
    } else {
      return (
        <h4>
          It <i>won't</i> boil
        </h4>
      );
    }
  }
}

export default BoilingVerdict;
