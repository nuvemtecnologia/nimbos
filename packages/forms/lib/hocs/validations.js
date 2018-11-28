import { validate } from './validate';
export function validations() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  return validate(function (getProps, fieldData) {
    var props = getProps();
    var error = props.error;
    var result = chain(function (fn) {
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