import React from "react";

import { FixedSize, FixedHeight, FixedWidth } from "fluid-resize-react";

export default function App() {
  const renderer = current => (
    <span style={{ fontSize: `${current}px` }}>
      Lorem ipsum dolor sit amet sed adipiscitur sit adipiscitur a very big
      heading that im writing
    </span>
  );

  const style = {
    overflow: "hidden",
    outline: "1px solid red",
    whiteSpace: "nowrap"
  };

  return (
    <div className="App">
      <FixedSize style={{ ...style, width: 500, height: 50 }}>
        {renderer}
      </FixedSize>
      <FixedHeight style={{ ...style, height: 100 }}>{renderer}</FixedHeight>
      <FixedWidth style={{ ...style, width: 500 }}>{renderer}</FixedWidth>
      <FixedWidth style={{ ...style, width: 300 }}>{renderer}</FixedWidth>
      <FixedWidth style={{ ...style, width: 200 }}>{renderer}</FixedWidth>
    </div>
  );
}
