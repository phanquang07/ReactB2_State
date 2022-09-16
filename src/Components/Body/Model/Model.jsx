import React, { Component } from "react";
import modelImg from "../../assets/img/model.jpg";

export default class Model extends Component {
  render() {
    return (
      <div className="row justify-content-center my-3">
        <div className="col-4" style={styleImg}>
          <img className="img-fluid" src={modelImg} alt="" />
        </div>
      </div>
    );
  }
}
