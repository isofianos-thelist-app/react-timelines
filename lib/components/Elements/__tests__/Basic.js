"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Basic = _interopRequireDefault(require("../Basic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultProps = {
  title: '',
  start: new Date('2017-01-01'),
  end: new Date('2017-02-01'),
  style: {},
  tooltip: '',
  classes: []
};
describe('<Basic />', function () {
  describe('Tooltip', function () {
    var getTooltip = function getTooltip(node) {
      return node.find('.rt-element__tooltip');
    };

    it('renders the tooltip value if it exists', function () {
      var tooltip = 'Test tooltip';

      var props = _objectSpread({}, defaultProps, {
        tooltip: tooltip
      });

      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Basic.default, props));
      expect(getTooltip(wrapper).html()).toMatch('Test tooltip');
    });
    it('handles multiline tooltips', function () {
      var tooltip = 'Test\ntooltip';

      var props = _objectSpread({}, defaultProps, {
        tooltip: tooltip
      });

      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Basic.default, props));
      expect(getTooltip(wrapper).html()).toMatch('Test<br>tooltip');
    });
    it('renders the title, formatted start and end date if the tooltip prop does not exist', function () {
      var tooltip = '';
      var title = 'TEST';
      var start = new Date('2017-03-20');
      var end = new Date('2017-04-15');

      var props = _objectSpread({}, defaultProps, {
        tooltip: tooltip,
        title: title,
        start: start,
        end: end
      });

      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Basic.default, props));
      expect(getTooltip(wrapper).text()).toMatch('TEST');
      expect(getTooltip(wrapper).text()).toMatch('Start 20 Mar');
      expect(getTooltip(wrapper).text()).toMatch('End 15 Apr');
    });
    it('can take an optional list of classnames to add to the parent', function () {
      var props = _objectSpread({}, defaultProps, {
        classes: ['foo', 'bar']
      });

      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Basic.default, props));
      expect(wrapper.find('.rt-element').hasClass('foo')).toBe(true);
      expect(wrapper.find('.rt-element').hasClass('bar')).toBe(true);
    });
  });
  describe('Data set', function () {
    it('should be able to set data-*', function () {
      var props = _objectSpread({}, defaultProps, {
        dataSet: {
          foo: 'boo',
          bar: 'baz'
        }
      });

      var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react.default.createElement(_Basic.default, props));
      expect(wrapper.props()['data-foo']).toEqual('boo');
      expect(wrapper.props()['data-bar']).toEqual('baz');
    });
  });
});