import React from 'react';
import './Grid.css';
import GridLED from './GridLED';

export default class Grid extends React.Component<any, any> {
  state = {
    leds: Array<GridLED>()
  }

  setLED (index : number, rgbObject : any) {
    const led = this.state.leds[index]

    led.setColorRGB(rgbObject.r, rgbObject.g, rgbObject.b)
  }

  getDimension () {
    return this.props.size
  }


  reset () {
    for (var index = 0; index < this.state.leds.length; index++) {
      this.state.leds[index].reset()
    }
  }

  render () {
    const totalLEDs = this.props.size * this.props.size
    const leds = []
    for (var index = 0; index < totalLEDs; index++) {
      leds.push(
        <GridLED key={index} ref={ref => {
          if (ref) {

            this.state.leds.push(ref)
          }
        }} />
      )
    }

    return (
      <div className="grid" style={{
        width: this.props.size * (15 + 10)
      }}>
        {leds}
      </div>
    );
  }
}
