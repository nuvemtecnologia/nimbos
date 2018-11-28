import { validate } from './validate';

export function validations(...items) {
  return validate((getProps, fieldData) => {
    const props = getProps();
    const { error } = props;

    const result = chain(fn => fn(props, fieldData), items);

    const errorResult = result.filter(x => x).map(e => ({ error: e }))[0];
    if (errorResult) return errorResult;

    if (error) {
      return { error: null };
    }
    return null;
  });
}
