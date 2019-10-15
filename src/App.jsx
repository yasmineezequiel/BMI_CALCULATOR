import React, { Component } from "react";
import DisplayResult from "./Components/DisplayResult";
import MethodSelect from "./Components/MethodSelect";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: "",
      height: "",
      method: "metric"
    };
  }

  methodChange = event => {
    this.setState({ method: event.target.value });
  };



  render() {
    return (
      <div className="main-div">
        <div className="title">BMI Calculator</div>
        <div>
          <MethodSelect
            method={this.state.method}
            onChangeValue={this.methodChange}
          />
        </div>
        <div className="weight-div">
          <label>Weight {this.state.method === 'metric' ? '(kg)' : '(lbs)'}</label>
          <input
            className="input-box"
            name="weight"
            placeholder={this.state.method === 'metric' ? 'kg' : 'lbs'}
            value={this.state.weight}
            onChange={e => this.setState({ weight: e.target.value })}
          />
        </div>

        <div className="height-div">
          <label>Height {this.state.method === 'metric' ? '(cm)' : '(in)'}</label>
          <input
            className="input-box"
            name="height"
            placeholder={this.state.method === 'metric' ? 'cm' : 'in'}
            value={this.state.height}
            onChange={e => this.setState({ height: e.target.value })}
          />
        </div>
        <div className="result-div">
          <div className="result-indicator">Result: </div>
          <DisplayResult
            weight={this.state.weight}
            height={this.state.height}
            method={this.state.method}
          />
        </div>
      </div>
    );
  }
}

export default App;