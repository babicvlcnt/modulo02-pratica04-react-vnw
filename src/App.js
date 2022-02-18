import "./styles.css";
import React, { Component } from "react";
class Test extends Component {
  soma = (x, y) => {
    return x + y;
  };
  mult = (num) => {
    return 2 * num;
  };
  render() {
    return (
      <div className="container">
        <h1>
          O resultado da soma de 38 e 4 é igual a {this.soma(38, 4)}. O dobro de
          5 é igual a {this.mult(5)}.
        </h1>
      </div>
    );
  }
}
export default Test;
