import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@nimbos/core';

function CardBody(_ref) {
  var children = _ref.children,
      className = _ref.className;

  var _className = css('n-card-body', {}, className);

  return React.createElement("div", {
    className: _className,
    children: children
  });
}

CardBody.propTypes = {
  /**  */
  className: PropTypes.string
};
CardBody.defaultProps = {
  className: null
};
export default CardBody;