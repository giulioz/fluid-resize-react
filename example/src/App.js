import React from "react";

import { FixedSize, FixedHeight, FixedWidth } from "fluid-resize-react";

export default class App extends React.Component {
  state = {
    value: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(({ value }) => ({ value: value + 1 }));
    }, 50);
  }

  render() {
    const rendererCounter = current => (
      <span style={{ fontSize: `${current}px` }}>{this.state.value}</span>
    );

    const rendererText = current => (
      <span style={{ fontSize: `${current}px` }}>
        A very big heading lorem inpsum dolor sit amet
      </span>
    );

    const rendererBoxes = current => (
      <div style={{ display: "flex" }}>
        {new Array(Math.floor(current))
          .fill(0)
          .map(() => (
            <div style={{ margin: 10, width: 30, height: 30, backgroundColor: "blue" }} />
          ))}
      </div>
    );

    const style = {
      overflow: "hidden",
      outline: "1px solid red",
      whiteSpace: "nowrap"
    };

    return (
      <div className="App">
        <FixedWidth style={{ ...style, width: 80 }}>
          {rendererCounter}
        </FixedWidth>
        <FixedHeight style={{ ...style, height: 80 }}>
          {rendererCounter}
        </FixedHeight>
        <FixedSize style={{ ...style, width: 500, height: 50 }}>
          {rendererText}
        </FixedSize>
        <FixedWidth style={{ ...style, width: "100%" }}>
          {rendererText}
        </FixedWidth>
        <FixedWidth min={1} max={50} delta={30} style={{ ...style, width: "100%" }}>
          {rendererBoxes}
        </FixedWidth>
      </div>
    );
  }
}
