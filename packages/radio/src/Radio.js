import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@nimbos/core';
import RadioGroupContext from './RadioGroupContext';
import RadioGroup from './RadioGroup';

export default class Radio extends React.PureComponent {
  renderText() {
    const { text } = this.props;
    if (!text) return null;
    return <span className={`n-radio-text-content`}>{text}</span>;
  }

  render() {
    const { disabled, text, children, value, ...othersProps } = this.props;
    const { selectedValue, changeValue, parentName, mapItemProps } = this.context;

    const checked = selectedValue == value;

    const classList = css('n-radio', {
      'n-radio-disabled': disabled,
      'n-radio-text': text
    });

    return (
      <label className={classList}>
        <input
          type="radio"
          disabled={disabled}
          value={value}
          onClick={() => changeValue(value)}
          onChange={() => {}}
          checked={checked}
          data-test-id={`radio-${parentName || 'unique'}-${value}`}
          {...(mapItemProps || (() => ({})))(this.props)}
          {...othersProps}
        />
        {this.renderText()}
      </label>
    );
  }
}

Radio.contextType = RadioGroupContext;

Radio.propTypes = {
  /** Dispara a função onChange. */
  onChange: PropTypes.func,

  /** Radio se torna desabilitado. */
  disabled: PropTypes.bool,

  /** Label para o Radio. */
  text: PropTypes.string
};

Radio.Group = RadioGroup;

Radio.defaultProps = {};
