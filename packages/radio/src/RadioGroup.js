import React from 'react';
import RadioGroupContext from './RadioGroupContext';

export default class RadioGroup extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  handleRadioChange(value) {
    this.props.onChange(value);
  }

  render() {
    const { value, children, name, mapItemProps } = this.props;

    return (
      <RadioGroupContext.Provider
        value={{ selectedValue: value, changeValue: this.handleRadioChange, parentName: name, mapItemProps }}
      >
        {children}
      </RadioGroupContext.Provider>
    );
  }
}
