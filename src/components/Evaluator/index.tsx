import React from 'react';
import './Evaluator.css'

export default class Evaluator extends React.Component<any, any> {
  state = {
    code: '',
    error: null,
    isRunning: false,
    timer: undefined
  }

  onEvaluate = (event : any) => {
    event.preventDefault()
    try {
      this.setState({ error: null })

      const grid = this.props.grid
      const patternObj = eval(`function parseJS() {${this.state.code}}; parseJS();`)
      if (!patternObj) {
        throw new Error("You didn't return an object.")
      }

      if (!patternObj.next) {
        throw new Error("Pattern object doesn't have a next variable.")
      }

      this.setState({
        timer: setInterval(() => patternObj.next(), 500),
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

  render () {
    return (
      <div className="evaluator">
        <div className='evaluator-actions'>
          <button onClick={this.onEvaluate}>
            Run
          </button>

          {this.state.isRunning && (
            <button onClick={this.onStop} className='stop'>
              Stop
            </button>
          )}
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
