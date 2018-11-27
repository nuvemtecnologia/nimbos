import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@nimbos/core';

export default class Datepicker extends React.PureComponent {

  renderText() {
    const { text } = this.props;
    if (!text) return null;
    return <span className={`n-datepicker-text-content`}>{text}</span>;
  }

  render() {
    const { disabled, text, children, value, ...othersProps } = this.props;

    const classList = css('n-datepicker', {
      'n-datepicker-disabled': disabled,
      'n-datepicker-text': text
    });

    return (
      <label className={classList}>
        {this.renderText()}
        <input
          className='n-datepicker-input'
          type="date"
          disabled={disabled}
          value={value}
          {...othersProps}
        />

      </label>
    );
  }
}

Datepicker.propTypes = {
  /** Dispara a função onChange. */
  onChange: PropTypes.func,

  /** Datepicker se torna desabilitado. */
  disabled: PropTypes.bool,

  /** Label para o datepicker. */
  text: PropTypes.bool
};


