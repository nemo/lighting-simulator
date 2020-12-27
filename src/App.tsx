import React from 'react';
import './App.css';

import Grid from './components/Grid'
import Evaluator from './components/Evaluator'

class App extends React.Component<any, any> {
  _grid : any

  state = {
    grid: null
  }

  constructor (props : any) {
    super(props)

    this._grid = undefined
  }

  componentDidMount () {
    console.log(this.refs)

    this.setState({
      grid: this._grid
    })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
        Light Installation Simulator
        </header>

        <div className='container'>
          <Grid size={40} ref={(grid) => { this._grid = grid }} />
        </div>
        <div className='container'>
          <Evaluator grid={this.state.grid} />
        </div>
      </div>
    );
  }

}

export default App;
