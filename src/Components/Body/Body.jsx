import React, { Component } from "react";

const styleImg = {
  maxWidth: "240px",
};

export default class Body extends Component {
  state = {
    price: 30,
    name: "GUCCI G8850U",
    url: "./img/v1.png",
    desc: "Brown",
  };

  changeColor = (color, name, price, desc) => {
    this.setState({
      url: `./img/v${color}.png`,
      name: `${name}`,
      price: `${price}`,
      desc: `${desc}`,
    });
  };

  render() {
    return (
      <>
        <div className="row justify-content-center my-3">
          <div className="col-4" style={styleImg}>
            <div className="model">
              <img className="img-fluid" src={"./img/model.jpg"} alt="" />
              <div className="glass-view">
                <img className="img-fluid" src={this.state.url} alt="" />
              </div>
              <div className="glass-detail">
                <p className="glass-name">{this.state.name}</p>
                <p className="glass-price">Price: {this.state.price}$</p>
                <p className="glass-desc">Desc: {this.state.desc}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="glass-list row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 my-5">
          <div className="glass-img">
            <img
              className="img-fluid"
              src="./img/v1.png"
              alt=""
              onClick={() => {
                this.changeColor("1", "GUCCI G8850U", 30, "Brown");
              }}
            />
          </div>
          <div className="glass-img">
            <img
              className="img-fluid"
              src="./img/v2.png"
              alt=""
              onClick={() => {
                this.changeColor("2", "GUCCI G8759H", 50, "America Flag");
              }}
            />
          </div>
          <div className="glass-img">
            <img
              className="img-fluid"
              src="./img/v3.png"
              alt=""
              onClick={() => {
                this.changeColor("3", "DIOR D6700HQ", 30, "Charcoal blue");
              }}
            />
          </div>
          <div className="glass-img">
            <img
              className="img-fluid"
              src="./img/v4.png"
              alt=""
              onClick={() => {
                this.changeColor("4", "DIOR D6005U", 70, "Red");
              }}
            />
          </div>
          <div className="glass-img">
            <img
              className="img-fluid"
              src="./img/v5.png"
              alt=""
              onClick={() => {
                this.changeColor("5", "PRADA P8750", 40, "Yellow");
              }}
            />
          </div>
          <div className="glass-img">
            <img
              className="img-fluid"
              src="./img/v6.png"
              alt=""
              onClick={() => {
                this.changeColor("6", "PRADA P9700", 60, "Violet");
              }}
            />
          </div>
          <div className="glass-img">
            <img
              className="img-fluid"
              src="./img/v7.png"
              alt=""
              onClick={() => {
                this.changeColor("7", "FENDI F8750", 80, "Brown 2");
              }}
            />
          </div>
          <div className="glass-img">
            <img
              className="img-fluid"
              src="./img/v8.png"
              alt=""
              onClick={() => {
                this.changeColor("8", "FENDI F8500", 100, "Pink");
              }}
            />
          </div>
          <div className="glass-img">
            <img
              className="img-fluid"
              src="./img/v9.png"
              alt=""
              onClick={() => {
                this.changeColor("9", "FENDI F4300", 60, "Blue");
              }}
            />
          </div>
        </div>
      </>
    );
  }
}
