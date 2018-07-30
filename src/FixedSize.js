import React from "react";
import PropTypes from "prop-types";

class FixedSize extends React.Component {
  static defaultProps = {
    maxSteps: 10,
    min: 5,
    max: 100,
    delta: 5
  };

  steps = 0;
  lowerBound = this.props.min;
  upperBound = this.props.max;

  state = {
    current: (this.props.max + this.props.min) / 2
  };

  outer = React.createRef();
  inner = React.createRef();

  componentDidMount() {
    window.addEventListener("resize", this.update);
    this.update();
  }

  componentDidUpdate() {
    this.update();
    // this.steps = 0;
    // this.lowerBound = this.props.min;
    // this.upperBound = this.props.max;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.update);
  }

  update = () => {
    const outerRect = this.outer.current.getBoundingClientRect();
    const innerRect = this.inner.current.getBoundingClientRect();

    // console.log(this.steps, Math.abs(innerRect.height - outerRect.height));

    if (
      Math.abs(innerRect.width - outerRect.width) > this.props.delta &&
      Math.abs(innerRect.height - outerRect.height) > this.props.delta &&
      this.steps < this.props.maxSteps
    ) {
      if (outerRect.width > innerRect.width && outerRect.height > innerRect.height) {
        this.lowerBound = this.state.current;
        this.steps++;
        this.setState({
          current: (this.upperBound + this.lowerBound) / 2
        });
      } else if (outerRect.width < innerRect.width || outerRect.height < innerRect.height) {
        this.upperBound = this.state.current;
        this.steps++;
        this.setState({
          current: (this.upperBound + this.lowerBound) / 2
        });
      }
    } else {
      this.steps = 0;
      this.lowerBound = this.props.min;
      this.upperBound = this.props.max;
    }
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <div ref={this.outer} {...rest}>
        <div style={{ display: "inline-block" }} ref={this.inner}>
          {this.props.children(this.state.current)}
        </div>
      </div>
    );
  }
}

FixedSize.propTypes = {
  maxSteps: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  children: PropTypes.element.isRequired
};

export default FixedSize;