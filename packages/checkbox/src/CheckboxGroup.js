import React from 'react';
import CheckboxGroupContext from './CheckboxGroupContext';

export default class CheckboxGroup extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange(value, checked) {
    let newValues = [...(this.props.value || [])];

    if (checked) {
      newValues.push(value);
    } else {
      newValues = newValues.filter(x => x != value);
    }

    this.props.onChange(newValues);
  }

  render() {
    const { value, children, name } = this.props;

    return (
      <CheckboxGroupContext.Provider
        value={{ selectedValue: value, changeValue: this.handleCheckboxChange, parentName: name }}
      >
        {children}
      </CheckboxGroupContext.Provider>
    );
  }
}
