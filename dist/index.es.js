import React from 'react';

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

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FixedWidth.__proto__ || Object.getPrototypeOf(FixedWidth)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      upperBound: _this.props.max,
      lowerBound: _this.props.min,
      current: (_this.props.max + _this.props.min) / 2,
      steps: 0
    }, _this.outer = React.createRef(), _this.inner = React.createRef(), _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(FixedWidth, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.update();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.update();
    }
  }, {
    key: 'update',
    value: function update() {
      var outerRect = this.outer.current.getBoundingClientRect();
      var innerRect = this.inner.current.getBoundingClientRect();

      if (this.state.steps < this.props.maxSteps) {
        if (outerRect.width > innerRect.width) {
          this.setState(function (_ref2) {
            var lowerBound = _ref2.lowerBound,
                upperBound = _ref2.upperBound,
                current = _ref2.current,
                steps = _ref2.steps;
            return {
              lowerBound: current,
              upperBound: upperBound,
              steps: steps + 1
            };
          });
          this.setState(function (_ref3) {
            var lowerBound = _ref3.lowerBound,
                upperBound = _ref3.upperBound;
            return {
              current: (upperBound + lowerBound) / 2
            };
          });
        } else if (outerRect.width < innerRect.width) {
          this.setState(function (_ref4) {
            var lowerBound = _ref4.lowerBound,
                upperBound = _ref4.upperBound,
                current = _ref4.current,
                steps = _ref4.steps;
            return {
              lowerBound: lowerBound,
              upperBound: current,
              steps: steps + 1
            };
          });
          this.setState(function (_ref5) {
            var lowerBound = _ref5.lowerBound,
                upperBound = _ref5.upperBound;
            return {
              current: (upperBound + lowerBound) / 2
            };
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = objectWithoutProperties(_props, ['children']);


      return React.createElement(
        'div',
        _extends({ ref: this.outer }, rest),
        React.createElement(
          'div',
          { style: { display: 'inline-block' }, ref: this.inner },
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
  max: 100
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

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FixedHeight.__proto__ || Object.getPrototypeOf(FixedHeight)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      upperBound: _this.props.max,
      lowerBound: _this.props.min,
      current: (_this.props.max + _this.props.min) / 2,
      steps: 0
    }, _this.outer = React.createRef(), _this.inner = React.createRef(), _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(FixedHeight, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.update();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.update();
    }
  }, {
    key: 'update',
    value: function update() {
      var outerRect = this.outer.current.getBoundingClientRect();
      var innerRect = this.inner.current.getBoundingClientRect();

      if (this.state.steps < this.props.maxSteps) {
        if (outerRect.height > innerRect.height) {
          this.setState(function (_ref2) {
            var lowerBound = _ref2.lowerBound,
                upperBound = _ref2.upperBound,
                current = _ref2.current,
                steps = _ref2.steps;
            return {
              lowerBound: current,
              upperBound: upperBound,
              steps: steps + 1
            };
          });
          this.setState(function (_ref3) {
            var lowerBound = _ref3.lowerBound,
                upperBound = _ref3.upperBound;
            return {
              current: (upperBound + lowerBound) / 2
            };
          });
        } else if (outerRect.height < innerRect.height) {
          this.setState(function (_ref4) {
            var lowerBound = _ref4.lowerBound,
                upperBound = _ref4.upperBound,
                current = _ref4.current,
                steps = _ref4.steps;
            return {
              lowerBound: lowerBound,
              upperBound: current,
              steps: steps + 1
            };
          });
          this.setState(function (_ref5) {
            var lowerBound = _ref5.lowerBound,
                upperBound = _ref5.upperBound;
            return {
              current: (upperBound + lowerBound) / 2
            };
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = objectWithoutProperties(_props, ['children']);


      return React.createElement(
        'div',
        _extends({ ref: this.outer }, rest),
        React.createElement(
          'div',
          { style: { display: 'inline-block' }, ref: this.inner },
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
  max: 100
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

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = FixedSize.__proto__ || Object.getPrototypeOf(FixedSize)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      upperBound: _this.props.max,
      lowerBound: _this.props.min,
      current: (_this.props.max + _this.props.min) / 2,
      steps: 0
    }, _this.outer = React.createRef(), _this.inner = React.createRef(), _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(FixedSize, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.update();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.update();
    }
  }, {
    key: 'update',
    value: function update() {
      var outerRect = this.outer.current.getBoundingClientRect();
      var innerRect = this.inner.current.getBoundingClientRect();

      if (this.state.steps < this.props.maxSteps) {
        if (outerRect.width > innerRect.width && outerRect.height > innerRect.height) {
          this.setState(function (_ref2) {
            var lowerBound = _ref2.lowerBound,
                upperBound = _ref2.upperBound,
                current = _ref2.current,
                steps = _ref2.steps;
            return {
              lowerBound: current,
              upperBound: upperBound,
              steps: steps + 1
            };
          });
          this.setState(function (_ref3) {
            var lowerBound = _ref3.lowerBound,
                upperBound = _ref3.upperBound;
            return {
              current: (upperBound + lowerBound) / 2
            };
          });
        } else if (outerRect.width < innerRect.width || outerRect.height < innerRect.height) {
          this.setState(function (_ref4) {
            var lowerBound = _ref4.lowerBound,
                upperBound = _ref4.upperBound,
                current = _ref4.current,
                steps = _ref4.steps;
            return {
              lowerBound: lowerBound,
              upperBound: current,
              steps: steps + 1
            };
          });
          this.setState(function (_ref5) {
            var lowerBound = _ref5.lowerBound,
                upperBound = _ref5.upperBound;
            return {
              current: (upperBound + lowerBound) / 2
            };
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = objectWithoutProperties(_props, ['children']);


      return React.createElement(
        'div',
        _extends({ ref: this.outer }, rest),
        React.createElement(
          'div',
          { style: { display: 'inline-block' }, ref: this.inner },
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
  max: 100
};

export { FixedWidth, FixedHeight, FixedSize };
//# sourceMappingURL=index.es.js.map
