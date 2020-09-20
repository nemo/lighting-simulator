import React from 'react';
import './Evaluator.css'
import Simulator from '../../library/Simulator'
import Color from '../../library/Color'

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
      const config = eval(`function parseJS() { return ${this.state.code}}; parseJS();`)
      if (!config) {
        throw new Error("You didn't return an object.")
      }

      if (!config) {
        throw new Error("You didn't return an object.")
      }

      if (!config.sequence) {
        throw new Error("You didn't include a sequence.")
      }

      const execute = (index : number) => {
        if (index >= config.sequence.length) {
          if (config.loop) { execute(0) }
          return
        }

        const step = config.sequence[index]

        console.log(`Executing Step #${index}.`)
        if (!step) {
          throw new Error(`Bad step [${index}]: NULL step.`)
        }

        if (!step.actions) {
          throw new Error(`Bad step [${index}]: No actions provided.`)
        }

        // execute current step
        step.actions.forEach((action : any, actionIndex : number) => {
          if (!(action.x >= 0)) {
            throw new Error(`Bad step [${index}]: Bad x coorindate in action at index [${actionIndex}].`)
          }

          if (!(action.y >= 0)) {
            throw new Error(`Bad step [${index}]: Bad y coorindate in action at index [${actionIndex}].`)
          }

          if (!action.color) {
            throw new Error(`Bad step [${index}]: No color in action at index [${actionIndex}].`)
          }

          console.log(`-> Action: ${actionIndex}. [${action.x}, ${action.y}] -> rgb(${action.color.r}, ${action.color.g}, ${action.color.b})`)
          simulator.setLED(action.x, action.y, new Color(action.color.r, action.color.g, action.color.b))
        })

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

        <textarea
          onChange={(event) => this.setState({ code: event.target.value })}
          value={this.state.code}
          rows={20}
        />

        <p>{this.state.error}</p>
      </div>
    );
  }
}
