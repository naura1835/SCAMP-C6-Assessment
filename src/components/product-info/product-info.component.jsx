import React from "react";

import plusSign from "../../assets/icon-plus.svg";
import minusSign from "../../assets/icon-minus.svg";

import "./product-info.styles.scss";

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 0 };
  }
  increaseItem = (stock) => {
    if (this.state.quantity === stock) return;
    this.setState(() => ({
      quantity: this.state.quantity + 1,
    }));
  };
  decreaseItem = () => {
    if (this.state.quantity === 0) return;
    this.setState(() => ({
      quantity: this.state.quantity - 1,
    }));
  };
  render() {
    const { name, description, price, sale, inventory } = this.props.details;

    return (
      <div className="product-info">
        <p className="product-info__subtitle">sneaker company</p>
        <h2 className="product-info__title">{name}</h2>
        <p className="product-info__description">{description}</p>
        <div className="product-info__pricing">
          <h2 className="sale-price">
            {sale ? `$${price * sale}.00` : `$${price}.00`}
          </h2>
          {sale ? (
            <div className="sale-percent">
              <p>{`${sale * 100}%`}</p>
            </div>
          ) : null}
          {sale ? <p className="actual-price">{`$${price}.00`}</p> : null}
        </div>
        <div className="add-to-cart">
          <div className="add-to-cart__quantity">
            <button className="quantity--decrease" onClick={this.decreaseItem}>
              <img src={minusSign} alt="minus sign" />
            </button>
            <p className="quantity">{this.state.quantity}</p>
            <button
              className="quantity--increase"
              onClick={this.increaseItem.bind(this, inventory)}
            >
              <img src={plusSign} alt="plus sign" />
            </button>
          </div>
          <button className="add-to-cart__btn">
            <div className="cart"></div>
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default ProductInfo;
