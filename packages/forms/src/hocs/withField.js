import { FormDataConsumer, FormHandlerConsumer } from '../helpers/form-context';
import { fromRenderProps, compose, mapProps, setDisplayName, wrapDisplayName, pure } from 'recompose';
export const withFormDataContext = fromRenderProps(FormDataConsumer, data => ({
  formData: data
}));
export const withFormHandlersContext = fromRenderProps(FormHandlerConsumer, handlers => ({ formHandlers: handlers }));

export const mapDataToField = mapProps(function(props) {
  const { formData, ...p } = props;

  if (props.name) {
    return { ...p, ...formData[props.name] };
  }

  return props;
});

export function withField(withHandlers = true, ...extraHocs) {
  return component => {
    const hocs = [];

    if (withHandlers) {
      hocs.push(withFormHandlersContext);
    }

    hocs.push(withFormDataContext);

    hocs.push(mapDataToField);

    hocs.push(pure);

    hocs.push(...extraHocs);

    return compose(...hocs)(component);
  };
}
