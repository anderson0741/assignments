import React, { Component } from 'react'

export default class Menu extends Component {
  getInitialState() {
    return {
      visible: false
    }
  }
  show() {
    this.setState({ visible: true });
    document.addEventListener("click", this.hide.bind(this));
  }
  hide() {
    document.removeEventListener("click", this.hide.bind(this));
    this.setState({ visible: false });
  }
  render() {
    return (
      <div className="menu">
        <div className={(this.state.visible ? "visible " : "") + this.props.alignment}>{this.props.children}</div>
      </div>
    )
  }
}

