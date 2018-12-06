'use strict';

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import flatten from 'flat';
import compile from 'string-template/compile';
var _countProperties = ['count', 'number', 'size', '0', 'length', 'items'];
var _languageSet = {};
var _defaultLang = 'pt-BR';
var _currentLang = 'pt-BR';
_languageSet[_defaultLang] = new Map();

function countProperty(data) {
  return _countProperties.filter(function (x) {
    return x in data;
  })[0];
}

function i18n(key) {
  for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    data[_key - 1] = arguments[_key];
  }

  if (key instanceof Array) {
    key = key[0];
  }

  if (_typeof(data[0]) == 'object' || data[0] instanceof Array) {
    data = data[0];
  }

  var langMap = _currentLang in _languageSet ? _languageSet[_currentLang] : _languageSet[_defaultLang];

  if (langMap.has(key)) {
    var fn = langMap.get(key);

    if (fn instanceof Array) {
      var property = countProperty(data);
      var count = +data[property] || 0;
      var index = Math.min(count, fn.length - 1) || 0;
      return fn[index](data);
    }

    return fn(data);
  }

  return key;
}

i18n.reset = function () {
  var keys = Object.keys(_languageSet);
  _currentLang = _defaultLang;

  for (var _i = 0; _i < keys.length; _i++) {
    var key = keys[_i];

    _languageSet[key].clear();

    delete _languageSet[key];
  }
};

i18n.lang = function (lang) {
  _currentLang = lang;
};

i18n.register = function (lang, keys) {
  if (lang in _languageSet === false) {
    _languageSet[lang] = new Map();
  }

  var langMap = _languageSet[lang];
  keys = flatten(keys, {
    safe: true
  });
  Object.entries(keys).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (value instanceof Array) {
      var translates = value.map(function (v) {
        return compile(v, true);
      });
      value = translates;
      langMap.set(key, value);
      return;
    }

    langMap.set(key, compile(value, true));
  });
};

export default i18n;