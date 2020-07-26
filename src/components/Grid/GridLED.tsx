import React from 'react';

export default class GridLED extends React.Component<any, any> {
  state = {
    red: 'DB',
    green: '00',
    blue: 'AE'
  }

  setColorRGB (red : string, green : string, blue : string) {
    this.setState({
      red, green, blue
    })
  }

  render () {
    const colorHex = `#${this.state.red}${this.state.green}${this.state.blue}`
    return (
      <div className="grid-led" style={{
        backgroundColor: colorHex,
        borderColor: colorHex,
        boxShadow: `0px 0px 15px ${colorHex}`
      }}></div>
    );
  }
}
