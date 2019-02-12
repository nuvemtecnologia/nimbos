import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@nimbos/core';

function CardTitle(_ref) {
  var children = _ref.children,
      className = _ref.className,
      divided = _ref.divided;

  var _className = css('n-card-title', {
    'n-card-title-divided': divided
  }, className);

  return React.createElement("div", {
    className: _className,
    children: children
  });
}

CardTitle.Right = function CardTitleRight(_ref2) {
  var className = _ref2.className,
      children = _ref2.children;

  var _className = css('n-card-title-right', className);

  return React.createElement("div", {
    className: _className,
    children: children
  });
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