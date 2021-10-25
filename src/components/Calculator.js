import React from 'react'

class Calculator extends  React.Component{

  setTemp = (evt) => {
    let tempType = this.props.type

    this.props.stateUpdater({
      temperature: evt.target.value,
      scale: tempType[0]
    })
  }

  render() {
    return (
      <form>
        <label>Please enter temperature in {this.props.type}<input value={this.props.temperature} type="number" onChange={this.setTemp} /></label>
      </form>
    )
  }
}

export default Calculator