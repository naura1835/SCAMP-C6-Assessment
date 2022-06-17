import React from "react";

import previous from "../../assets/icon-previous.svg";
import next from "../../assets/icon-next.svg";

import "./product-image-grid.styles.scss";

class ProductImageGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
  }

  handleNext = () => {
    const { currentIndex } = this.state;

    this.setState(() => ({
      currentIndex: currentIndex + 1,
    }));
    if (currentIndex === 3) this.setState({ currentIndex: 0 });
  };

  handlePrevious = () => {
    const { currentIndex } = this.state;

    if (currentIndex === 0) {
      this.setState(() => ({ currentIndex: 3 }));
      return;
    }
    this.setState(() => ({
      currentIndex: currentIndex - 1,
    }));
  };

  changeImage = (index) => {
    this.setState({ currentIndex: index });
  };

  render() {
    const { currentIndex } = this.state;
    const images = this.props.images;

    return (
      <div className="image-grid">
        <div className="image-grid__image">
          <img
            src={images[currentIndex].imageURL}
            alt={images[currentIndex].altText}
          />
        </div>
        <div className="btn--previous" onClick={this.handlePrevious}>
          <img src={previous} alt="previous-arrow" />
        </div>
        <div className="btn--next" onClick={this.handleNext}>
          <img src={next} alt="next-arrow" />
        </div>
        <div className="image-grid__thumbnails">
          {images.map(({ imageURL, altText }, index) => (
            <div
              key={index}
              data-index={index}
              className={`thumbnail ${currentIndex === index ? "active" : ""}`}
              onClick={this.changeImage.bind(this, index)}
            >
              <img src={imageURL} alt={altText} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default ProductImageGrid;
