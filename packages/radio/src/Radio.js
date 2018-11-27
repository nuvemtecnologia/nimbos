import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@nimbos/core';
import { RadioGroupContext } from "./RadioGroupContext";

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
        value,
        children,
			...othersProps
    } = this.props;
    console.log(this.props);

    let classList = css('n-radio', {
      'n-radio-disabled': disabled,
      'n-radio-text': text,
    });

    const { selectedValue, changeValue } = this.context;

    const currentValues = selectedValue || [];
    const checked = currentValues.includes(value);

		return (
      <label className={classList}>
        <input
          type="radio"
          checked={checked}
          value={value}
          disabled={disabled}
          {...othersProps} />
          {this.renderText(text)}
      </label>
		);
	}
}

Radio.propTypes = {
	/** Dispara a função onChange. */
  onChange: PropTypes.func,

	/** Radio se torna desabilitado. */
  disabled: PropTypes.bool,

  /** Texto do radio. */
  text: PropTypes.bool,

  /** Radio se torna selecionado. */
  checked: PropTypes.bool,

};


Radio.defaultProps = {};

Radio.contextType = RadioGroupContext;
