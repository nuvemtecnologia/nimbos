'use strict';
import flatten from 'flat';
import compile from 'string-template/compile';

const _countProperties = [ 'count', 'number', 'size', '0', 'length', 'items' ];
const _languageSet = {};
const _defaultLang = 'pt-BR';
let _currentLang = 'pt-BR';

_languageSet[_defaultLang] = new Map();

function countProperty(data) {
	return _countProperties.filter((x) => x in data)[0];
}

function i18n(key, ...data) {
	if (key instanceof Array) {
		key = key[0];
	}

	if (typeof data[0] == 'object' || data[0] instanceof Array) {
		data = data[0];
	}
	const langMap = _currentLang in _languageSet ? _languageSet[_currentLang] : _languageSet[_defaultLang];

	if (langMap.has(key)) {
		var fn = langMap.get(key);

		if (fn instanceof Array) {
			const property = countProperty(data);
			const count = +data[property] || 0;
			const index = Math.min(count, fn.length - 1) || 0;

			return fn[index](data);
		}

		return fn(data);
	}

	return key;
}

i18n.reset = function() {
	const keys = Object.keys(_languageSet);
	_currentLang = _defaultLang;
	for (var key of keys) {
		_languageSet[key].clear();
		delete _languageSet[key];
	}
};

i18n.lang = function(lang) {
	_currentLang = lang;
};

i18n.register = function(lang, keys) {
	if (lang in _languageSet === false) {
		_languageSet[lang] = new Map();
	}

	const langMap = _languageSet[lang];

	keys = flatten(keys, { safe: true });

	Object.entries(keys).forEach(([ key, value ]) => {
		if (value instanceof Array) {
			const translates = value.map((v) => compile(v, true));
			value = translates;
			langMap.set(key, value);

			return;
		}
		langMap.set(key, compile(value, true));
	});
};

export default i18n;
