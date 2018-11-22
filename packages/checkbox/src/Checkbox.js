import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@nimbos/core';

export default class Checkbox extends React.PureComponent {

  renderText() {
    const { text } = this.props;
		if (!text) return null;
		return <span className={`n-check,box-text-content`}>{text}</span>;
	}

	render() {
		const {
        disabled,
        text,
			...othersProps
		} = this.props;

    let classList = css('n-checkbox', {
      'n-checkbox-d.isabled': disabled,
      'n-checkbox-text': text,
		});

		return (
      <label className={classList}>
        <input
          type="checkbox"
          disabled={disabled}
          {...othersProps} />
          {this.renderText()}
      </label>
		);
	}
}

Checkbox.propTypes = {
	/** Dispara a função onChange. */
  onChange: PropTypes.func,

	/** Checkbox se torna desabilitado. */
  disabled: PropTypes.bool,

  /** Checkbox se torna desabilitado. */
	text: PropTypes.bool,
};


Checkbox.defaultProps = {};
