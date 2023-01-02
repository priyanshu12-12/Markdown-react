import React, { Component } from "react";
import "./style.css";
import "./component1";
export default class component2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="render" id="previewer">
          <div className="preview">
            <h3 className="preview2">Preview</h3>
          </div>
          <h4 className="result">{this.props.input}</h4>
        </div>
      </div>
    );
  }
}
