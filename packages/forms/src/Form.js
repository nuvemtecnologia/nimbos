import React, { PureComponent } from 'react';
import { mapProps, setDisplayName, compose } from 'recompose';
import { FormDataProvider, FormHandlerProvider } from './helpers/form-context';
import { mapFormProps } from './helpers/form-utils';

class FormComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listeners: { '*': [] }
    };

    this.setField = this.setField.bind(this);
    this.appendField = this.appendField.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.handlers = {
      setField: this.setField,
      appendField: this.appendField,
      subscribe: this.subscribe
    };
    this.initialized = false;
    this.queueValidations = [];
  }

  subscribe(names, fn) {
    var names = [].concat(names);
    var unsubscribes = [];

    var listeners = this.state.listeners;

    for (let name of names) {
      listeners[name] = listeners[name] || [];
      listeners[name].push(fn);
      unsubscribes.push(listeners => {
        listeners[name] = listeners[name].filter(x => x != fn);
        return listeners;
      });
    }

    return () => {
      this.setState(() => {
        let listeners = this.state.listeners;
        for (let uns in unsubscribes) {
          listeners = uns(listeners);
        }
        return {
          listeners
        };
      });
    };
  }

  setField(name, fieldData, validate = true) {
    const { data, onChange } = this.props;

    console.log('setField', name, fieldData);

    const newData = {
      ...data,
      [name]: fieldData
    };

    onChange(newData);

    if (validate) {
      this.validate(name, newData);
    }
  }

  validate(name, data) {
    let listeners = this.state.listeners[name] || [];
    listeners = listeners.concat(this.state.listeners['*'] || []);
    let updateFields = {};
    let result = null;
    let setField = key => (updateFields[key] = true);

    for (let listener of listeners) {
      if (listener.onlyField) {
        result = listener(name, data[name] || {});
        if (result) {
          updateFields[name] = true;
          data = { ...data, [name]: { ...data[name], ...result } };
        }
      } else {
        result = listener(name, data || {});
        if (result) {
          Object.keys(result).forEach(setField);
          data = { ...data, ...result };
        }
      }
    }

    updateFields = Object.keys(updateFields);

    if (updateFields.length) {
      updateFields.filter(key => data[key]).forEach(key => this.setField(key, data[key], false));
    }

    return data;
  }

  componentDidMount() {
    let data = this.props.data;

    for (let name in this.state.listeners) {
      data = this.validate(name, data);
    }

    this.props.onChange(data);
  }

  appendField(name, fieldData) {
    const { data } = this.props;

    const originalFieldData = data[name] || {};
    this.setField(name, { ...originalFieldData, ...fieldData });
  }

  render() {
    const { data, children } = this.props;

    return (
      <FormHandlerProvider value={this.handlers}>
        <FormDataProvider value={data}>{children}</FormDataProvider>
      </FormHandlerProvider>
    );
  }
}

export const FormHash = setDisplayName('FormHash')(FormComponent);
export const Form = mapProps(mapFormProps)(FormComponent);
export const FormSimple = compose(
  setDisplayName('FormSimple'),
  mapProps(mapFormSimpleProps)
)(FormComponent);
