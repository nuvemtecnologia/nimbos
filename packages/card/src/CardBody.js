import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@nimbos/core';

function CardBody({ children, className }) {
  const _className = css('n-card-body', {}, className);

  return <div className={_className} children={children} />;
}

CardBody.propTypes = {
  /**  */
  className: PropTypes.string
};

CardBody.defaultProps = {
  className: null
};
export default CardBody;
