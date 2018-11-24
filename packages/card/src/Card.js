import React from 'react';
import PropTypes from 'prop-types';
import CardTitle from './CardTitle';
import CardBody from './CardBody';
import { css } from '@nimbos/core';

function Card({ children, className }) {
  const _className = css('n-card', {}, className);

  return <div className={_className} children={children} />;
}

Card.Title = CardTitle;
Card.Body = CardBody;

Card.propTypes = {
  /**  */
  className: PropTypes.string
};

Card.defaultProps = {
  className: null
};
export default Card;
