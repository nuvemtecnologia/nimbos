"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@nimbos/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CardBody(_ref) {
  var children = _ref.children,
      className = _ref.className;

  var _className = (0, _core.css)('n-card-body', {}, className);

  return _react.default.createElement("div", {
    className: _className,
    children: children
  });
}

CardBody.propTypes = {
  /**  */
  className: _propTypes.default.string
};
CardBody.defaultProps = {
  className: null
};
var _default = CardBody;
exports.default = _default;