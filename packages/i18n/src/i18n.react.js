import i18n from './i18n';

function I18n(props) {
	const { chilren: key, params, ...vars } = props;

	return i18n(key.trim(), params || vars);
}

export default I18n;
