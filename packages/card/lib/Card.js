"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CardTitle = _interopRequireDefault(require("./CardTitle"));

var _CardBody = _interopRequireDefault(require("./CardBody"));

var _core = require("@nimbos/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Card(_ref) {
  var children = _ref.children,
      className = _ref.className;

  var _className = (0, _core.css)('n-card', {}, className);

  return _react.default.createElement("div", {
    className: _className,
    children: children
  });
}

Card.Title = _CardTitle.default;
Card.Body = _CardBody.default;
Card.propTypes = {
  /**  */
  className: _propTypes.default.string
};
Card.defaultProps = {
  className: null
};
var _default = Card;
exports.default = _default;