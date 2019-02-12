"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@nimbos/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CardTitle(_ref) {
  var children = _ref.children,
      className = _ref.className,
      divided = _ref.divided;

  var _className = (0, _core.css)('n-card-title', {
    'n-card-title-divided': divided
  }, className);

  return _react.default.createElement("div", {
    className: _className,
    children: children
  });
}

CardTitle.Right = function CardTitleRight(_ref2) {
  var className = _ref2.className,
      children = _ref2.children;

  var _className = (0, _core.css)('n-card-title-right', className);

  return _react.default.createElement("div", {
    className: _className,
    children: children
  });
};

CardTitle.propTypes = {
  /**  */
  className: _propTypes.default.string,

  /** Adiciona linha inferior no titulo */
  divided: _propTypes.default.bool
};
CardTitle.defaultProps = {
  divided: false,
  className: null
};
var _default = CardTitle;
exports.default = _default;