import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@nimbos/core';
import Label from './Label';

export default class Text extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleIcon(icon, onClick, orientation = 'right') {
    if (!icon) return;
    const classIcon = css(
      'n-entry-icon',
      orientation,
      {
        'n-entry-icon-clicable': onClick
      },
      icon
    );
    return <span onClick={onClick} className={classIcon} />;
  }

  renderInput() {
    const {
      children,
      placeholder,
      label,
      width,
      iconRight,
      iconLeft,
      className,
      onIconRightClick,
      onIconLeftClick,
      inputRef,
      ...othersProps
    } = this.props;

    const classInput = css('n-entry', className);

    let Element = 'input';

    if (othersProps.type == 'textarea') {
      Element = 'textarea';
    }

    return (
      <span>
        <Element
          className={classInput}
          placeholder={placeholder}
          id={this.props.id || `input-${this.props.name}`}
          ref={inputRef}
          {...othersProps}
        />
        {this.handleIcon(iconLeft, onIconLeftClick, 'left')}
        {this.handleIcon(iconRight, onIconRightClick, 'right')}
      </span>
    );
  }

  render() {
    const classRoot = css('n-entry-root');

    const classContainer = css('n-entry-container', {
      'n-input-icon-left': this.props.iconLeft,
      'n-input-icon-right': this.props.iconRight
    });

    const { label, width } = this.props;

    if ('label' in this.props) {
      return (
        <div className={classRoot} style={{ width }}>
          <Label htmlFor={this.props.id || `input-${this.props.name}`}>{label}</Label>
          <div className={classContainer}>{this.renderInput()}</div>
        </div>
      );
    } else {
      return (
        <div style={{ width, boxSizing: 'border-box' }} className={classRoot}>
          {this.renderInput()}
        </div>
      );
    }
  }
}

Text.propTypes = {
  /** Rótulo do input. */
  label: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.node]),
  /** Placeholder do input. */
  placeholder: PropTypes.string,

  /** Input desabilitado. */
  disabled: PropTypes.bool,

  /** Tamanho horizontal do input. */
  width: PropTypes.string,

  /** Ícone no entry a esquerda. */
  iconLeft: PropTypes.string,

  /** Ícone no entry a direita. */
  iconRight: PropTypes.string
};

Text.defaultProps = {
  width: '100%'
};
