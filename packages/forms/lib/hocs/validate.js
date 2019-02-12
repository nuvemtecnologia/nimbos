import { lifecycle, compose, withState } from 'recompose';
export function validate(namesToRegister, validateFn) {
  if (typeof validateFn == 'undefined') {
    validateFn = namesToRegister;

    namesToRegister = function namesToRegister(props) {
      return [props.name];
    };
  }

  return compose(withState('unsubscribe', 'setUnsubscribe'), lifecycle({
    componentDidMount: function componentDidMount() {
      var _this = this;

      var names = namesToRegister(this.props);
      var fn = validateFn.bind(this, function () {
        return _this.props;
      });
      fn.onlyField = true;
      this.props.setUnsubscribe(this.props.formHandlers.subscribe(names, fn));
    },
    componentWillUnmount: function componentWillUnmount() {
      if (this.props.unsubscribe) {
        this.props.unsubscribe();
      }
    }
  }));
}