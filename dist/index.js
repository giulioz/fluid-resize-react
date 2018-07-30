'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var FixedWidth = function (_React$Component) {
  inherits(FixedWidth, _React$Component);

  function FixedWidth() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, FixedWidth);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FixedWidth.__proto__ || Object.getPrototypeOf(FixedWidth)).call.apply(_ref, [this].concat(args))), _this), _this.steps = 0, _this.lowerBound = _this.props.min, _this.upperBound = _this.props.max, _this.state = {
      current: (_this.props.max + _this.props.min) / 2
    }, _this.outer = React.createRef(), _this.inner = React.createRef(), _this.update = function () {
      var outerRect = _this.outer.current.getBoundingClientRect();
      var innerRect = _this.inner.current.getBoundingClientRect();

      // console.log(this.steps, Math.abs(innerRect.width - outerRect.width));

      if (Math.abs(innerRect.width - outerRect.width) > _this.props.delta && _this.steps < _this.props.maxSteps) {
        if (outerRect.width > innerRect.width) {
          _this.lowerBound = _this.state.current;
          _this.steps++;
          _this.setState({
            current: (_this.upperBound + _this.lowerBound) / 2
          });
        } else if (outerRect.width < innerRect.width) {
          _this.upperBound = _this.state.current;
          _this.steps++;
          _this.setState({
            current: (_this.upperBound + _this.lowerBound) / 2
          });
        }
      } else {
        _this.steps = 0;
        _this.lowerBound = _this.props.min;
        _this.upperBound = _this.props.max;
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(FixedWidth, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("resize", this.update);
      this.update();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.update();
      // this.steps = 0;
      // this.lowerBound = this.props.min;
      // this.upperBound = this.props.max;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.update);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = objectWithoutProperties(_props, ["children"]);


      return React.createElement(
        "div",
        _extends({ ref: this.outer }, rest),
        React.createElement(
          "div",
          { style: { display: "inline-block" }, ref: this.inner },
          this.props.children(this.state.current)
        )
      );
    }
  }]);
  return FixedWidth;
}(React.Component);

FixedWidth.defaultProps = {
  maxSteps: 10,
  min: 5,
  max: 100,
  delta: 5
};


FixedWidth.propTypes = {
  maxSteps: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  children: PropTypes.element.isRequired
};

var FixedHeight = function (_React$Component) {
  inherits(FixedHeight, _React$Component);

  function FixedHeight() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, FixedHeight);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FixedHeight.__proto__ || Object.getPrototypeOf(FixedHeight)).call.apply(_ref, [this].concat(args))), _this), _this.steps = 0, _this.lowerBound = _this.props.min, _this.upperBound = _this.props.max, _this.state = {
      current: (_this.props.max + _this.props.min) / 2
    }, _this.outer = React.createRef(), _this.inner = React.createRef(), _this.update = function () {
      var outerRect = _this.outer.current.getBoundingClientRect();
      var innerRect = _this.inner.current.getBoundingClientRect();

      // console.log(this.steps, Math.abs(innerRect.height - outerRect.height));

      if (Math.abs(innerRect.height - outerRect.height) > _this.props.delta && _this.steps < _this.props.maxSteps) {
        if (outerRect.height > innerRect.height) {
          _this.lowerBound = _this.state.current;
          _this.steps++;
          _this.setState({
            current: (_this.upperBound + _this.lowerBound) / 2
          });
        } else if (outerRect.height < innerRect.height) {
          _this.upperBound = _this.state.current;
          _this.steps++;
          _this.setState({
            current: (_this.upperBound + _this.lowerBound) / 2
          });
        }
      } else {
        _this.steps = 0;
        _this.lowerBound = _this.props.min;
        _this.upperBound = _this.props.max;
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(FixedHeight, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("resize", this.update);
      this.update();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.update();
      // this.steps = 0;
      // this.lowerBound = this.props.min;
      // this.upperBound = this.props.max;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.update);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = objectWithoutProperties(_props, ["children"]);


      return React.createElement(
        "div",
        _extends({ ref: this.outer }, rest),
        React.createElement(
          "div",
          { style: { display: "inline-block" }, ref: this.inner },
          this.props.children(this.state.current)
        )
      );
    }
  }]);
  return FixedHeight;
}(React.Component);

FixedHeight.defaultProps = {
  maxSteps: 10,
  min: 5,
  max: 100,
  delta: 5
};


FixedHeight.propTypes = {
  maxSteps: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  children: PropTypes.element.isRequired
};

var FixedSize = function (_React$Component) {
  inherits(FixedSize, _React$Component);

  function FixedSize() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, FixedSize);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FixedSize.__proto__ || Object.getPrototypeOf(FixedSize)).call.apply(_ref, [this].concat(args))), _this), _this.steps = 0, _this.lowerBound = _this.props.min, _this.upperBound = _this.props.max, _this.state = {
      current: (_this.props.max + _this.props.min) / 2
    }, _this.outer = React.createRef(), _this.inner = React.createRef(), _this.update = function () {
      var outerRect = _this.outer.current.getBoundingClientRect();
      var innerRect = _this.inner.current.getBoundingClientRect();

      // console.log(this.steps, Math.abs(innerRect.height - outerRect.height));

      if (Math.abs(innerRect.width - outerRect.width) > _this.props.delta && Math.abs(innerRect.height - outerRect.height) > _this.props.delta && _this.steps < _this.props.maxSteps) {
        if (outerRect.width > innerRect.width && outerRect.height > innerRect.height) {
          _this.lowerBound = _this.state.current;
          _this.steps++;
          _this.setState({
            current: (_this.upperBound + _this.lowerBound) / 2
          });
        } else if (outerRect.width < innerRect.width || outerRect.height < innerRect.height) {
          _this.upperBound = _this.state.current;
          _this.steps++;
          _this.setState({
            current: (_this.upperBound + _this.lowerBound) / 2
          });
        }
      } else {
        _this.steps = 0;
        _this.lowerBound = _this.props.min;
        _this.upperBound = _this.props.max;
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(FixedSize, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("resize", this.update);
      this.update();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.update();
      // this.steps = 0;
      // this.lowerBound = this.props.min;
      // this.upperBound = this.props.max;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.update);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = objectWithoutProperties(_props, ["children"]);


      return React.createElement(
        "div",
        _extends({ ref: this.outer }, rest),
        React.createElement(
          "div",
          { style: { display: "inline-block" }, ref: this.inner },
          this.props.children(this.state.current)
        )
      );
    }
  }]);
  return FixedSize;
}(React.Component);

FixedSize.defaultProps = {
  maxSteps: 10,
  min: 5,
  max: 100,
  delta: 5
};


FixedSize.propTypes = {
  maxSteps: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  children: PropTypes.element.isRequired
};

exports.FixedWidth = FixedWidth;
exports.FixedHeight = FixedHeight;
exports.FixedSize = FixedSize;
//# sourceMappingURL=index.js.map
