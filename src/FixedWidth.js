import React from 'react';

class FixedWidth extends React.Component {
  static defaultProps = {
    maxSteps: 10,
    min: 5,
    max: 100
  };

  state = {
    upperBound: this.props.max,
    lowerBound: this.props.min,
    current: (this.props.max + this.props.min) / 2,
    steps: 0
  };

  outer = React.createRef();
  inner = React.createRef();

  componentDidMount() {
    this.update();
  }

  componentDidUpdate() {
    this.update();
  }

  update() {
    const outerRect = this.outer.current.getBoundingClientRect();
    const innerRect = this.inner.current.getBoundingClientRect();

    if (this.state.steps < this.props.maxSteps) {
      if (outerRect.width > innerRect.width) {
        this.setState(({ lowerBound, upperBound, current, steps }) => ({
          lowerBound: current,
          upperBound: upperBound,
          steps: steps + 1
        }));
        this.setState(({ lowerBound, upperBound }) => ({
          current: (upperBound + lowerBound) / 2
        }));
      } else if (outerRect.width < innerRect.width) {
        this.setState(({ lowerBound, upperBound, current, steps }) => ({
          lowerBound: lowerBound,
          upperBound: current,
          steps: steps + 1
        }));
        this.setState(({ lowerBound, upperBound }) => ({
          current: (upperBound + lowerBound) / 2
        }));
      }
    }
  }

  render() {
    const { children, ...rest } = this.props;

    return (
      <div ref={this.outer} {...rest}>
        <div style={{ display: 'inline-block' }} ref={this.inner}>
          {this.props.children(this.state.current)}
        </div>
      </div>
    );
  }
}

export default FixedWidth;
