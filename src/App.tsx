import React from 'react';
import './App.css';

import Grid from './components/Grid'
import Evaluator from './components/Evaluator'

function App () {
  const grid = <Grid size={20} />
  return (
    <div className="App">
      <header className="App-header">
      Light Installation Simulator
      </header>

      <div className='container'>
        {grid}
        <Evaluator grid={grid} />
      </div>
    </div>
  );
}

export default App;
