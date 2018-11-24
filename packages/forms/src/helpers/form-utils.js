import uniq from 'lodash.uniq';
import concat from 'lodash.concat';
import { shallowEqual } from 'recompose';
export function notEmpty(value) {
  return typeof value !== 'undefined';
}

export function unwrapFormData(data) {
  const values = {};
  const errors = {};
  const touched = {};
  const fields = {};

  for (let name in data) {
    if (notEmpty(data[name].value)) values[name] = data[name].value;
    if (notEmpty(data[name].error)) errors[name] = data[name].error;
    if (notEmpty(data[name].touched)) touched[name] = data[name].touched;
    if (notEmpty(data[name].field)) fields[name] = data[name].field;
  }

  return {
    values,
    errors,
    touched,
    fields
  };
}

export function wrapFormData(props) {
  const { values = {}, errors = {}, touched = {}, fields = {} } = props;

  let data = {};

  const names = uniq(
    concat(Object.keys(values || {}), Object.keys(errors || {}), Object.keys(touched || {}), Object.keys(fields || {}))
  );

  for (let name of names) {
    data[name] = {};
    if (notEmpty(values[name])) data[name].value = values[name];
    if (notEmpty(errors[name])) data[name].error = errors[name];
    if (notEmpty(touched[name])) data[name].touched = touched[name];
    if (notEmpty(fields[name])) data[name].field = fields[name];
  }

  return data;
}
export function mapFormSimpleProps(props) {
  const { data, onChange, ...p } = props;

  const rawData = wrapFormData(data);
  const rawOnChange = data => unwrapFormData(data);

  return { ...p, data: rawData, onChange: rawOnChange };
}
export function mapFormProps(props) {
  const {
    values,
    errors,
    touched,
    fields,
    onChangeValues,
    onChangeErrors,
    onChangeTouched,
    onChangeFields,
    ...p
  } = props;
  const arg = { values, errors, touched, fields };
  const events = {
    onChangeValues,
    onChangeErrors,
    onChangeTouched,
    onChangeFields
  };
  const data = wrapFormData(arg);
  const onChange = onFormChange(arg, events);
  return { ...p, data, onChange };
}

export function onFormChange(prevData, events) {
  return data => {
    var nextData = unwrapFormData(data);

    if (!shallowEqual(prevData.values || {}, nextData.values || {})) {
      events.onChangeValues(nextData.values);
    }
    if (!shallowEqual(prevData.errors || {}, nextData.errors || {})) {
      events.onChangeErrors(nextData.errors);
    }
    if (!shallowEqual(prevData.touched || {}, nextData.touched || {})) {
      events.onChangeTouched(nextData.touched);
    }
    if (!shallowEqual(prevData.fields || {}, nextData.fields || {})) {
      events.onChangeFields(nextData.fields);
    }
  };
}
