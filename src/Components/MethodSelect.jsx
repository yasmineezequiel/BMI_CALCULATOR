import React from "react";
import "../App.css";

function MethodSelect(props) {
  return (
    <>
      <div>
      <label>Method</label>
        <select className="method-selector" name="method" id="method" onChange={props.onChangeValue} value={props.method}>
          <option value="metric">Metric</option>
          <option value="imperial">Imperial</option>
        </select>
      </div>
    </>
  );
}
export default MethodSelect;