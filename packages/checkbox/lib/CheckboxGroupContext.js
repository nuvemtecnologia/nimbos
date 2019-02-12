"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = exports.Cosumer = exports.default = void 0;

var _react = require("react");

var context = (0, _react.createContext)({});
var _default = context;
exports.default = _default;
var Cosumer = context.Cosumer,
    Provider = context.Provider;
exports.Provider = Provider;
exports.Cosumer = Cosumer;