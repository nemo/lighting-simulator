import React from 'react';
import './Grid.css';
import GridLED from './GridLED';

export default class Grid extends React.Component<any, any> {
  state = {
    leds: Array<GridLED>()
  }

  componentDidMount () {
    const leds = []
    const totalLEDs = this.props.size * this.props.size
    for (var index = 0; index < totalLEDs; index++) {
      leds.push(<GridLED key={index} />)
    }

    this.setState({ leds })
  }

  setLED (index : number, rgbObject : any) {
    const led = this.state.leds[index]

    led.setColorRGB(rgbObject.red, rgbObject.green, rgbObject.blue)

    this.setState({
      leds: this.state.leds,
      updated: new Date()
    })
  }

  getDimension () {
    return this.props.size
  }

  // evaluate (jsScript : string) {
  // }

  render () {
    return (
      <div className="grid" style={{
        width: this.props.size * (15 + 10)
      }}>
        {this.state.leds}
      </div>
    );
  }
}
