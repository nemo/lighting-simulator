import React from 'react';

export default class GridLED extends React.Component<any, any> {
  state = {
    red: 219,
    green: 0,
    blue: 174
  }

  setColorRGB (red : number, green : number, blue : number) {
    this.setState({
      red, green, blue
    })
  }

  reset () {
    this.setColorRGB(219, 0, 174)
  }

  render () {
    const color = `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`

    return (
      <div className="grid-led" style={{
        backgroundColor: color,
        borderColor: color,
        boxShadow: `0px 0px 15px ${color}`
      }}></div>
    );
  }
}
