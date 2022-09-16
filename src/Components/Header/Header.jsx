import React, { Component } from "react";

const styleHeader = {
  height: "54px",
  color: "#fff",
  backgroundColor: "rgba(0,0,0,0.6)",
  textAlign: "center",
};

const styleHeding = {
  fontSize: "26px",
  lineHeight: "54px",
}

export default class Header extends Component {
  render() {
    return (
      <header style={styleHeader}>
        <div className="container">
          <h1 style={styleHeding}>TRY GLASSES APP ONLINE</h1>
        </div>
      </header>
    );
  }
}
