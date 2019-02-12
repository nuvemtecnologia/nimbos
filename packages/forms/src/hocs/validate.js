import { lifecycle, compose, withState } from 'recompose';

export function validate(namesToRegister, validateFn) {
  if (typeof validateFn == 'undefined') {
    validateFn = namesToRegister;
    namesToRegister = props => [props.name];
  }

  return compose(
    withState('unsubscribe', 'setUnsubscribe'),
    lifecycle({
      componentDidMount() {
        var names = namesToRegister(this.props);
        var fn = validateFn.bind(this, () => this.props);
        fn.onlyField = true;

        this.props.setUnsubscribe(this.props.formHandlers.subscribe(names, fn));
      },

      componentWillUnmount() {
        if (this.props.unsubscribe) {
          this.props.unsubscribe();
        }
      }
    })
  );
}
