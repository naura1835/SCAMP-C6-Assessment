import React from "react";

import logo from "../../assets/icon-cart.svg";
import avatar from "../../assets/image-avatar.png";

import "./header.styles.scss";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: ["Collections", "Men", "Women", "About", "Contact"],
      isOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <header className="header container">
        <div className="menu-icon" onClick={this.toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        <h2 className="logo-title">Sneakers</h2>
        <nav className={`menu-items ${this.state.isOpen ? "active" : ""}`}>
          {this.state.menu.map((item, index) => (
            <p className="menu-item" key={index}>
              <a href={`/${item.toLocaleLowerCase()}`}>{item}</a>
            </p>
          ))}
        </nav>
        <div className="cart-icon">
          <img src={logo} alt="wheel cart" />
        </div>
        <div className="profile-icon">
          <img
            src={avatar}
            alt="man with long wavy hair looking cool wearing shades"
          />
        </div>
      </header>
    );
  }
}

export default Header;
