import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@nimbos/core';

export default class Button extends React.PureComponent {
  renderIcon(position) {
    const { icon, iconRight } = this.props;
    if (!icon) return null;
    if (position == 'right' && !iconRight) return null;
    if (position == 'left' && iconRight) return null;
    return <span className={`n-btn-icon-element ${icon}`} />;
  }

  renderText() {
    const { children } = this.props;
    if (!children) return null;
    return <span className={`n-btn-text-content`} children={children} />;
  }

  render() {
    const {
      children,
      flavor,

      outlined,
      flat,
      testName,
      testPrefix,
      icon,
      iconRight,
      withIconBackground,
      ...othersProps
    } = this.props;
    let props = othersProps;
    let classList = css('n-btn', {
      [`n-btn-${flavor}`]: !!flavor,
      'n-btn-outlined': outlined,
      'n-btn-flat': flat,
      'n-btn-icon': icon,
      'n-btn-icon-right': iconRight,
      'with-icon-background': withIconBackground
    });

    if (!children) {
      classList += ' n-btn-childrenless';
    }

    if (testName) {
      props = {
        ...othersProps,
        testName: testName,
        'data-test-id': `${testPrefix}-${testName}`
      };
    }

    return (
      <button className={classList} {...props}>
        {this.renderIcon('left')}
        {this.renderText()}
        {this.renderIcon('right')}
      </button>
    );
  }
}

Button.propTypes = {
  /** Conteudo do botão. */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.node]),

  /** Dispara a função onClick. */
  onClick: PropTypes.func,

  /** Estilo de intenção do botão. */
  flavor: PropTypes.oneOfType([PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info'])]),

  /** Botão se torna desabilitado. */
  disabled: PropTypes.bool,

  /** Botão se torna estilo flat. */
  flat: PropTypes.bool,

  /** Botão se torna estilo outlined. */
  outlined: PropTypes.bool,

  /** Botão usa ícone. */
  icon: PropTypes.string,

  /** Ícone no lado direito do botão. */
  iconRight: PropTypes.bool,

  testPrefix: PropTypes.string,

  testName: PropTypes.string
};

Button.defaultProps = {
  testPrefix: 'button'
};
