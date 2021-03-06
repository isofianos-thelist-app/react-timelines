"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Header = _interopRequireDefault(require("../Header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultSticky = {
  isSticky: false,
  sidebarWidth: 0,
  headerHeight: 0
};
var defaultProps = {
  timebar: [],
  sticky: _objectSpread({}, defaultSticky)
};
describe('<Header />', function () {
  it('renders the title for each row', function () {
    var timebar = [{
      id: '1',
      title: 'row-1'
    }, {
      id: '1',
      title: 'row-2'
    }];

    var props = _objectSpread({}, defaultProps, {
      timebar: timebar
    });

    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Header.default, props));
    expect(wrapper.find('.rt-timebar-key').first().text()).toBe('row-1');
    expect(wrapper.find('.rt-timebar-key').last().text()).toBe('row-2');
  });
  it('reserves the space taken up by the header when it is sticky', function () {
    var sticky = _objectSpread({}, defaultSticky, {
      isSticky: true,
      headerHeight: 100
    });

    var props = _objectSpread({}, defaultProps, {
      sticky: sticky
    });

    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Header.default, props));
    expect(wrapper.prop('style')).toEqual({
      paddingTop: 100
    });
  });
  it('does not reserve the space taken up by the header when it is static', function () {
    var sticky = _objectSpread({}, defaultSticky, {
      isSticky: false,
      headerHeight: 100
    });

    var props = _objectSpread({}, defaultProps, {
      sticky: sticky
    });

    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Header.default, props));
    expect(wrapper.prop('style')).toEqual({});
  });
  it('becomes sticky when it receives a sticky prop', function () {
    var sticky = _objectSpread({}, defaultSticky, {
      isSticky: true,
      sidebarWidth: 200
    });

    var props = _objectSpread({}, defaultProps, {
      sticky: sticky
    });

    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Header.default, props));
    expect(wrapper.find('.rt-sidebar__header').hasClass('rt-is-sticky')).toBe(true);
    expect(wrapper.find('.rt-sidebar__header').prop('style')).toEqual({
      width: 200
    });
  });
  it('becomes static when it receives a falsy sticky prop', function () {
    var sticky = _objectSpread({}, defaultSticky, {
      isSticky: false,
      sidebarWidth: 200
    });

    var props = _objectSpread({}, defaultProps, {
      sticky: sticky
    });

    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Header.default, props));
    expect(wrapper.find('.rt-sidebar__header').hasClass('rt-is-sticky')).toBe(false);
    expect(wrapper.find('.rt-sidebar__header').prop('style')).toEqual({});
  });
});