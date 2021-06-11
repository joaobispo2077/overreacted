import { Component } from "react";

export class Button extends Component {

  render() {
    const { text, onClick } = this.props;
    return (
      <button onClick={onClick}>{text}</button>
    )
  }
}