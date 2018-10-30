import React from 'react';
import PropTypes from 'prop-types';
import {css} from '@nimbos/core';

export default class Label extends React.PureComponent {
  render () {
    const {children, ...othersProps} = this.props;

    let classList = css ('n-entry-label');

    return (
      <label className={classList} {...othersProps}>
        {children}
      </label>
    );
  }
}

Label.propTypes = {
  /** Conteúdo da label. */
  children: PropTypes.oneOfType ([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
    PropTypes.bool,
  ]),

  /** Rótulo para indicar ID. */
  htmlFor: PropTypes.string,
};

Label.defaultProps = {};
