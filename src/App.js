import React, { Component } from "react";
// Reusable Botton Component
import ButtonComponent from "./ButtonComponent";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  // Button Click handler Function
  handleClick() {
    setTimeout(() => alert("Yahooo! Click happened"), 5000);
  }
  render() {
    return <ButtonComponent handleClick={this.handleClick} />;
  }
}
