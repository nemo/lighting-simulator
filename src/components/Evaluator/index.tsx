import React from 'react';
import './Evaluator.css'
import pttrns from '../../library/patterns'
import Simulator from '../../library/Simulator'

export default class Evaluator extends React.Component<any, any> {
  state = {
    code: 'return new patterns.snake(simulator)',
    error: null,
    isRunning: false,
    timer: undefined
  }

  onEvaluate = (event : any) => {
    event.preventDefault()
    try {
      this.setState({ error: null })

      const grid = this.props.grid
      const patterns = pttrns
      const simulator = new Simulator(grid)
      let tickSpeed = 20;
      const patternObj = eval(`function parseJS() {${this.state.code}}; parseJS();`)
      if (!patternObj) {
        throw new Error("You didn't return an object.")
      }

      if (!patternObj.next) {
        throw new Error("Pattern object doesn't have a next variable.")
      }

      this.setState({
        timer: setInterval(() => {
          if (!patternObj.next()) {
            clearInterval(this.state.timer)
            this.setState({
              timer: undefined,
              isRunning: false
            })
          }
        }, tickSpeed),
        isRunning: true
      })
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
