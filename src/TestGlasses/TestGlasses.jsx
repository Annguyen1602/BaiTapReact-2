import React, { Component } from "react";
import "../assets/style.css";

export default class TestGlasses extends Component {
  state = {
    imgSrc: "./img/glassesImage/v1.png",
  };
  render() {
    return (
      <div className="test-glasses ">
        <div className="overlay" style={{ background: "rgba(0,0,0,0.3)" }}>
          <div className="header ">
            <nav
              className="navbar navbar-expand-sm navbar-dark "
              style={{ background: "rgba(0,0,0,0.7)" }}
            >
              <h1 className="text-white text-center w-100">
                TRY GLASSES APP ONLINE
              </h1>
            </nav>
          </div>
          <div className="container py-5">
            <div className="row">
              <div className="col-6 img-left text-center">
                <img
                  src="./img/glassesImage/model.jpg"
                  alt="..."
                  height={400}
                />
                <img src={this.state.imgSrc} alt="..." className="try" />
              </div>
              <div className="col-6 img-left text-center">
                <img
                  src="./img/glassesImage/model.jpg"
                  alt="..."
                  height={400}
                />
              </div>
            </div>
            <div className="bg-light p-5 mt-5">
              <div className="row">
                <div className="col-2 my-2">
                  <button
                    onClick={() => {
                      this.setState({
                        imgSrc: "./img/glassesImage/v1.png",
                      });
                    }}
                  >
                    <img
                      src="./img/glassesImage/g1.jpg"
                      alt="..."
                      height={100}
                      width={150}
                    />
                  </button>
                </div>
                <div className="col-2 my-2">
                  <button onClick={() => {
                      this.setState({
                        imgSrc: "./img/glassesImage/v2.png",
                      });
                    }}>
                    <img
                      src="./img/glassesImage/g2.jpg"
                      alt="..."
                      height={100}
                      width={150}
                    />
                  </button>
                </div>
                <div className="col-2 my-2">
                  <button onClick={() => {
                      this.setState({
                        imgSrc: "./img/glassesImage/v3.png",
                      });
                    }}>
                    <img
                      src="./img/glassesImage/g3.jpg"
                      alt="..."
                      height={100}
                      width={150}
                    />
                  </button>
                </div>
                <div className="col-2 my-2">
                  <button onClick={() => {
                      this.setState({
                        imgSrc: "./img/glassesImage/v4.png",
                      });
                    }}>
                    <img
                      src="./img/glassesImage/g4.jpg"
                      alt="..."
                      height={100}
                      width={150}
                    />
                  </button>
                </div>
                <div className="col-2 my-2">
                  <button onClick={() => {
                      this.setState({
                        imgSrc: "./img/glassesImage/v5.png",
                      });
                    }}>
                    <img
                      src="./img/glassesImage/g5.jpg"
                      alt="..."
                      height={100}
                      width={150}
                    />
                  </button>
                </div>
                <div className="col-2 my-2">
                  <button onClick={() => {
                      this.setState({
                        imgSrc: "./img/glassesImage/v6.png",
                      });
                    }}>
                    <img
                      src="./img/glassesImage/g6.jpg"
                      alt="..."
                      height={100}
                      width={150}
                    />
                  </button>
                </div>
                <div className="col-2 my-2">
                  <button onClick={() => {
                      this.setState({
                        imgSrc: "./img/glassesImage/v7.png",
                      });
                    }}>
                    <img
                      src="./img/glassesImage/g7.jpg"
                      alt="..."
                      height={100}
                      width={150}
                    />
                  </button>
                </div>
                <div className="col-2 my-2">
                  <button onClick={() => {
                      this.setState({
                        imgSrc: "./img/glassesImage/v8.png",
                      });
                    }}>
                    <img
                      src="./img/glassesImage/g8.jpg"
                      alt="..."
                      height={100}
                      width={150}
                    />
                  </button>
                </div>
                <div className="col-2 my-2">
                  <button onClick={() => {
                      this.setState({
                        imgSrc: "./img/glassesImage/v9.png",
                      });
                    }}>
                    <img
                      src="./img/glassesImage/g9.jpg"
                      alt="..."
                      height={100}
                      width={150}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
