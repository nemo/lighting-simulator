import React from 'react';
import Papa from 'papaparse'
import './Evaluator.css'
import Simulator from '../../library/Simulator'
import Color from '../../library/Color'
import example from '../../animations/example.csv'

export default class Evaluator extends React.Component<any, any> {
  state = {
    code: '{}',
    error: null,
    isRunning: false,
    timer: undefined
  }

  onEvaluate = (event : any) => {
    event.preventDefault()
    try {
      this.setState({ error: null })

      const grid = this.props.grid
      const simulator = new Simulator(grid)
      const { data } = Papa.parse(example, { header: true })
      const config = {
        loop: false
      }

      console.log('data', data)

      const execute = (index : number) => {
        if (index >= data.length) {
          if (config.loop) { execute(0) }
          return
        }

        const stepObj: AnimationStepObj = data[index] as AnimationStepObj
        if (Object.keys(stepObj).length < 6) { return }

        const step : AnimationStep = {
          x: parseInt(stepObj.x),
          y: parseInt(stepObj.y),
          r: parseInt(stepObj.r),
          g: parseInt(stepObj.g),
          b: parseInt(stepObj.b),
          delta: parseInt(stepObj.delta)
        }

        console.log(`Executing Step #${index}`, step)
        if (!step) {
          throw new Error(`Bad step [${index}]: NULL step.`)
        }

        // execute current step
        if (!(step.x >= 0)) {
          throw new Error(`Bad step [${index}]: Bad x coorindate.`)
        }

        if (!(step.y >= 0)) {
          throw new Error(`Bad step [${index}]: Bad y coorindate.`)
        }

        console.log(`-> Action: ${index}. [${step.x}, ${step.y}] -> rgb(${step.r}, ${step.g}, ${step.b})`)
        simulator.setLED(step.x, step.y, new Color(step.r, step.g, step.b))

        // execute next step
        this.setState({
          timer: setTimeout(() => execute(index + 1), step.delta),
          isRunning: true
        })
      }

      this.setState({
        isRunning: true
      })
      execute(0)

    } catch (e) {
      this.setState({
        error: e.message
      })
    }
  }

  onStop = (event : any) => {
    event.preventDefault()

    clearInterval(this.state.timer)
    this.setState({
      timer: undefined,
      isRunning: false
    })
  }

  onReset = (event : any) => {
    event.preventDefault()

    this.props.grid.reset()
  }

  render () {
    return (
      <div className="evaluator">
        <div className='evaluator-actions'>
          {!this.state.isRunning && (
            <button onClick={this.onEvaluate} className='run'>
              Run
            </button>
          )}

          {this.state.isRunning && (
            <button onClick={this.onStop} className='stop'>
              Stop
            </button>
          )}

          <button onClick={this.onReset} className='reset'>
            Reset
          </button>
        </div>
        <p>{this.state.error}</p>
      </div>
    );
  }
}
