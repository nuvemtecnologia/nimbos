import React from "react";
import RadioGroupContext from "./RadioGroupContext";

export default class RadioGroup extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  handleRadioChange(value, checked) {
    let newValues = [...(this.props.value || [])];

    if (checked) {
      newValues.push(value);
    } else {
      newValues = newValues.filter(x => x != value);
    }

    this.props.onChange(newValues);
  }

  render() {
    const { value, children } = this.props;

    return (
      <RadioGroupContext.Provider
        value={{ selectedValue: value, changeValue: this.handleRadioChange }}
      >
        {children}
      </RadioGroupContext.Provider>
    );
  }
}
