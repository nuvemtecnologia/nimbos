import React from 'react';
import debounce from 'debounce';

function update(props, name, updates) {
  props.formHandlers.appendField(name, updates);
}

export function debounceFieldProperty(delayMs = 150, stateName = 'value', onChangeName = 'onChange') {
  return Component =>
    class extends React.PureComponent {
      constructor(props) {
        super(props);
        this.state = { [stateName]: null };
        this.update = debounce(update, delayMs);
      }

      componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
          this.setState({ [stateName]: this.props.value });
        }
      }

      handleChange = value => {
        const { name } = this.props;
        this.setState(() => {
          this.update(this.props, name, { [stateName]: value });
          return {
            value
          };
        });
      };

      render() {
        const extraProps = {};

        extraProps[stateName] = this.state[stateName];
        extraProps[onChangeName] = this.handleChange;

        return <Component {...this.props} {...extraProps} />;
      }
    };
}
