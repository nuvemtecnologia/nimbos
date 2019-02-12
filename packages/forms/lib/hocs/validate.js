"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = validate;

var _recompose = require("recompose");

function validate(namesToRegister, validateFn) {
  if (typeof validateFn == 'undefined') {
    validateFn = namesToRegister;

    namesToRegister = function namesToRegister(props) {
      return [props.name];
    };
  }

  return (0, _recompose.compose)((0, _recompose.withState)('unsubscribe', 'setUnsubscribe'), (0, _recompose.lifecycle)({
    componentDidMount: function componentDidMount() {
      var _this = this;

      var names = namesToRegister(this.props);
      var fn = validateFn.bind(this, function () {
        return _this.props;
      });
      fn.onlyField = true;
      this.props.setUnsubscribe(this.props.formHandlers.subscribe(names, fn));
    },
    componentWillUnmount: function componentWillUnmount() {
      if (this.props.unsubscribe) {
        this.props.unsubscribe();
      }
    }
  }));
}