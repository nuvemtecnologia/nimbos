"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormHandlerProvider = exports.FormHandlerConsumer = exports.FormDataProvider = exports.FormDataConsumer = exports.formHandlerContext = exports.formDataContext = void 0;

var _react = require("react");

var formDataContext = (0, _react.createContext)();
exports.formDataContext = formDataContext;
var formHandlerContext = (0, _react.createContext)();
exports.formHandlerContext = formHandlerContext;
var FormDataConsumer = formDataContext.Consumer;
exports.FormDataConsumer = FormDataConsumer;
var FormDataProvider = formDataContext.Provider;
exports.FormDataProvider = FormDataProvider;
var FormHandlerConsumer = formHandlerContext.Consumer;
exports.FormHandlerConsumer = FormHandlerConsumer;
var FormHandlerProvider = formHandlerContext.Provider;
exports.FormHandlerProvider = FormHandlerProvider;