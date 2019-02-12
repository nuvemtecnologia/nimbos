"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validations = validations;

var _validate = require("./validate");

var _ramda = require("ramda");

function validations() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  return (0, _validate.validate)(function (getProps, fieldData) {
    var props = getProps();
    var error = props.error;
    var result = (0, _ramda.chain)(function (fn) {
      return fn(props, fieldData);
    }, items);
    var errorResult = result.filter(function (x) {
      return x;
    }).map(function (e) {
      return {
        error: e
      };
    })[0];
    if (errorResult) return errorResult;

    if (error) {
      return {
        error: null
      };
    }

    return null;
  });
}