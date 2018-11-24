import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@nimbos/core';

function CardTitle({ children, className, divided }) {
  const _className = css(
    'n-card-title',
    {
      'n-card-title-divided': divided
    },
    className
  );

  return <div className={_className} children={children} />;
}

CardTitle.Right = function CardTitleRight({ className, children }) {
  const _className = css('n-card-title-right', className);

  return <div className={_className} children={children} />;
};

CardTitle.propTypes = {
  /**  */
  className: PropTypes.string,
  /** Adiciona linha inferior no titulo */
  divided: PropTypes.bool
};

CardTitle.defaultProps = {
  divided: false,
  className: null
};

export default CardTitle;
