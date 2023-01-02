import React, { Component } from "react";
import "./style.css";
import Component2 from "./component2";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: " "
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <div>
        <div className="box">
          <div className="editor">
            <h3 id="#editor">Editor</h3>
          </div>
          <textarea
            rows="10"
            cols="70"
            onChange={this.handleChange}
            value={this.state.input}
            className="text"
          ></textarea>
        </div>
        <Component2 input={this.state.input} />
      </div>
    );
  }
}
