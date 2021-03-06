"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require(".."));

var _Controls = _interopRequireDefault(require("../components/Controls"));

var _Layout = _interopRequireDefault(require("../components/Layout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultStart = new Date('2010-01-01');
var defaultEnd = new Date('2030-01-01');

var createScaleProps = function createScaleProps() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$start = _ref.start,
      start = _ref$start === void 0 ? defaultStart : _ref$start,
      _ref$end = _ref.end,
      end = _ref$end === void 0 ? defaultEnd : _ref$end,
      _ref$zoom = _ref.zoom,
      zoom = _ref$zoom === void 0 ? 1 : _ref$zoom,
      _ref$zoomMin = _ref.zoomMin,
      zoomMin = _ref$zoomMin === void 0 ? undefined : _ref$zoomMin,
      _ref$zoomMax = _ref.zoomMax,
      zoomMax = _ref$zoomMax === void 0 ? undefined : _ref$zoomMax,
      _ref$minWidth = _ref.minWidth,
      minWidth = _ref$minWidth === void 0 ? undefined : _ref$minWidth;

  return {
    start: start,
    end: end,
    zoom: zoom,
    zoomMin: zoomMin,
    zoomMax: zoomMax,
    minWidth: minWidth
  };
};

var createProps = function createProps() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$now = _ref2.now,
      now = _ref2$now === void 0 ? new Date() : _ref2$now,
      _ref2$scale = _ref2.scale,
      scale = _ref2$scale === void 0 ? createScaleProps() : _ref2$scale,
      _ref2$isOpen = _ref2.isOpen,
      isOpen = _ref2$isOpen === void 0 ? undefined : _ref2$isOpen,
      _ref2$timebar = _ref2.timebar,
      timebar = _ref2$timebar === void 0 ? [] : _ref2$timebar,
      _ref2$tracks = _ref2.tracks,
      tracks = _ref2$tracks === void 0 ? [] : _ref2$tracks,
      _ref2$toggleOpen = _ref2.toggleOpen,
      toggleOpen = _ref2$toggleOpen === void 0 ? jest.fn() : _ref2$toggleOpen,
      _ref2$zoomIn = _ref2.zoomIn,
      zoomIn = _ref2$zoomIn === void 0 ? jest.fn() : _ref2$zoomIn,
      _ref2$zoomOut = _ref2.zoomOut,
      zoomOut = _ref2$zoomOut === void 0 ? jest.fn() : _ref2$zoomOut;

  return {
    now: now,
    scale: scale,
    isOpen: isOpen,
    timebar: timebar,
    tracks: tracks,
    toggleOpen: toggleOpen,
    zoomIn: zoomIn,
    zoomOut: zoomOut
  };
};

describe('<Timeline />', function () {
  describe('Timeline', function () {
    it('renders <Controls />', function () {
      var props = createProps();
      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_.default, props));
      expect(wrapper.find(_Controls.default).exists()).toBe(true);
    });
    it('renders <Layout />', function () {
      var props = createProps();
      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_.default, props));
      expect(wrapper.find(_Layout.default).exists()).toBe(true);
    });
    it('re-renders when zoom changes', function () {
      var props = _objectSpread({}, createProps(), {
        scale: createScaleProps({
          zoom: 1
        })
      });

      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_.default, props));
      expect(wrapper.state('time').zoom).toBe(1);

      var nextProps = _objectSpread({}, props, {
        scale: createScaleProps({
          zoom: 2
        })
      });

      wrapper.setProps(nextProps);
      expect(wrapper.state('time').zoom).toBe(2);
      wrapper.setProps(nextProps);
      expect(wrapper.state('time').zoom).toBe(2);
    });
    it('renders the sidebar open by default', function () {
      var props = createProps();
      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_.default, props));
      expect(wrapper.find(_Layout.default).prop('isOpen')).toBe(true);
    });
  });
});