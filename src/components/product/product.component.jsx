import React from "react";

import ProductImageGrid from "../product-image-grid/product-image-grid.component";
import ProductInfo from "../product-info/product-info.component";

import "./product.styles.scss";

class Product extends React.Component {
  render() {
    const { name, description, price, sale, images, inventory } =
      this.props.product;
    const productInfo = { name, description, price, sale, inventory };

    return (
      <div className="product container">
        <ProductImageGrid images={images} />
        <ProductInfo details={productInfo} />
      </div>
    );
  }
}
export default Product;
