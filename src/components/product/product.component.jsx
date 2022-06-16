import React from "react";

import ProductImageGrid from "../product-image-grid/product-image-grid.component";

import "./product.styles.scss";

class Product extends React.Component {
  render() {
    const { images } = this.props.product;
    return (
      <div className="product container">
        <ProductImageGrid images={images} />
      </div>
    );
  }
}
export default Product;
