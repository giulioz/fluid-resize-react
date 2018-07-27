# fluid-resize-react

> Provide a simple way to scale props to fill a container using binary search. Useful for scaling text sizes to fit a container.

[![NPM](https://img.shields.io/npm/v/fluid-resize-react.svg)](https://www.npmjs.com/package/fluid-resize-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![](demo.png)

### Components
- **FixedWidth**: Scale down to fit container width
- **FixedHeight**: Scale down to fit container height
- **FixedSize**: Scale down to fit container width and height

## Install

```bash
npm install --save fluid-resize-react
```

## Usage

```jsx
function App() {
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
```

Pass a render function to a component as child. The component will call the render function passing the current iteration size as parameter.

You can also provide max value, min value and max iterations as props:

```jsx
function App() {
  const renderer = current => (
    <span style={{ fontSize: `${current}px` }}>Test</span>
  );

  const style = {
    overflow: "hidden",
    whiteSpace: "nowrap"
  };

  return (
    <div className="App">
      <FixedWidth maxSteps={10} min={10} max={12} style={{ ...style }}>
        {renderer}
      </FixedWidth>
    </div>
  );
}
```

This components can be used for text as well for any other usages:

```jsx
function App() {
  const renderer = current => (
    <div style={{ display: "flex" }}>
      {new Array(Math.floor(current)).fill(0).map(_ => (
        <div
          style={{
            margin: 3,
            height: "20px",
            width: "20px",
            backgroundColor: "blue"
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="App">
      <FixedWidth
        min={1}
        max={30}
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap"
        }}
      >
        {renderer}
      </FixedWidth>
    </div>
  );
}
```

## License

MIT © [giulioz](https://github.com/giulioz)
