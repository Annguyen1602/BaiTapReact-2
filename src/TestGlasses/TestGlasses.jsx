import React, { Component } from "react";
import "../assets/style.css";

const data = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./img/glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./img/glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./img/glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./img/glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./img/glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./img/glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./img/glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./img/glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./img/glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class TestGlasses extends Component {
  renderGlassesList = () => {
    return data.map((glasses, index) => {
      return (
        <div className="col-2 my-2" key={index}>
          <button
            onClick={() => {
              this.changeGlasses(glasses);
            }}
          >
            <img src={glasses.url} alt="..." height={80} width={120} />
          </button>
        </div>
      );
    });
  };

  changeGlasses = (newGlasses) => {
    this.setState({
      glassCurrent: newGlasses,
    });
  };

  state = {
    glassCurrent: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
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
                <div className="cover">
                  <img
                    src="./img/glassesImage/model.jpg"
                    alt="..."
                    height={400}
                  />
                  <div
                    className="info px-2 "
                    style={{ background: "rgba(248,169,58,0.5)" }}
                  >
                    <h3 className="text-primary mt-2">
                      {this.state.glassCurrent.name}
                    </h3>
                    <span className="text-danger">
                      Price: {this.state.glassCurrent.price}
                    </span>
                    <p className="text-white fw-bold">
                      {this.state.glassCurrent.desc}
                    </p>
                  </div>
                </div>
                <img
                  src={this.state.glassCurrent.url}
                  alt="..."
                  className="try"
                />
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
              <div className="row">{this.renderGlassesList()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
