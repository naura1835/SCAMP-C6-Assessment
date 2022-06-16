import React from "react";

import Header from "./components/header/header.component";
import Product from "./components/product/product.component";

import { product } from "./data/products.data";

import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = { product };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Product product={this.state.product} />
      </div>
    );
  }
}

export default App;
