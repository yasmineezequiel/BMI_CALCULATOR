import React, { Component } from 'react';
import DisplayResult from './Components/displayResult';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: ''
    }
  }

  render() {
    return (
      <div>
        <h1>BMI Converter</h1>
          <div>
            <label>weight(kg)</label>
            <input name="weight" value={this.state.weight} onChange={ (e) => this.setState({ weight: e.target.value })} />
          </div>

          <div>
            <label>height(cm)</label>
            <input name="height" value={this.state.height} onChange={ (e) => this.setState({ height: e.target.value})} />
          </div>
          
          <div>
            <select id="method">
              <option value="metric">metric</option>
              <option value="imperial">Imperial</option>
            </select>
          </div>

          <DisplayResult
            weight={this.state.weight}
            height={this.state.height}
          />
      </div>
    );
  }
}

export default App;
