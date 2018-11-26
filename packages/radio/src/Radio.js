import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@nimbos/core';

export default class Radio extends React.PureComponent {

  renderText() {
    const { text } = this.props;
		if (!text) return null;
		return <span className={`n-radio-text-content`}>{text}</span>;
	}

	render() {
		const {
        disabled,
        text,
			...othersProps
		} = this.props;

    let classList = css('n-radio', {
      'n-radio-disabled': disabled,
      'n-radio-text': text,
		});

		return (
      <label className={classList}>
        <input
          type="radio"
          disabled={disabled}
          {...othersProps} />
          {this.renderText()}
      </label>
		);
	}
}

Radio.propTypes = {
	/** Dispara a função onChange. */
  onChange: PropTypes.func,

	/** Radio se torna desabilitado. */
  disabled: PropTypes.bool,

  /** Radio se torna desabilitado. */
	text: PropTypes.bool,
};


Radio.defaultProps = {};
