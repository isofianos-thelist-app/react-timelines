"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formatDate = require("../../../utils/formatDate");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PointerMarker = function PointerMarker(_ref) {
  var time = _ref.time,
      date = _ref.date,
      visible = _ref.visible,
      highlighted = _ref.highlighted;
  return /*#__PURE__*/_react.default.createElement(_.default, {
    modifier: "pointer",
    x: time.toX(date),
    visible: visible,
    highlighted: highlighted
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("strong", null, (0, _formatDate.getDayMonth)(date)))));
};

PointerMarker.propTypes = {
  time: _propTypes.default.shape({
    toX: _propTypes.default.func.isRequired
  }).isRequired,
  date: _propTypes.default.instanceOf(Date).isRequired,
  visible: _propTypes.default.bool,
  highlighted: _propTypes.default.bool
};
var _default = PointerMarker;
exports.default = _default;