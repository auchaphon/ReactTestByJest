import React, { Component } from "react";

class index extends Component {
  render() {
    return (
      <div>
        <h1 id="header">{this.props.header}</h1>
        <p id="body">{this.props.body}</p>
      </div>
    );
  }
}

export default index;
