import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@nimbos/core';
import CheckboxGroupContext from './CheckboxGroupContext';
import CheckboxGroup from './CheckboxGroup';

export default class Checkbox extends React.PureComponent {
  renderText() {
    const { text } = this.props;
    if (!text) return null;
    return <span className={`n-checkbox-text-content`}>{text}</span>;
  }

  render() {
    const { disabled, text, children, ...othersProps } = this.props;
    const { selectedValue, changeValue } = this.context;

    const currentValues = selectedValue || [];
    const checked = currentValues.includes(value);

    const classList = css('n-checkbox', {
      'n-checkbox-disabled': disabled,
      'n-checkbox-text': text
    });

    return (
      <label className={classList}>
        <input
          type="checkbox"
          disabled={disabled}
          value={value}
          onClick={() => changeValue(value, !checked)}
          {...othersProps}
        />
        {this.renderText()}
      </label>
    );
  }
}

Checkbox.contextType = CheckboxGroupContext;

Checkbox.propTypes = {
  /** Dispara a função onChange. */
  onChange: PropTypes.func,

  /** Checkbox se torna desabilitado. */
  disabled: PropTypes.bool,

  /** Label para o Checkbox. */
  text: PropTypes.bool
};

Checkbox.Group = CheckboxGroup;

Checkbox.defaultProps = {};
