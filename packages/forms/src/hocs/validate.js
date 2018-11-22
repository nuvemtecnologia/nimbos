import { lifecycle } from "recompose";

export function validate(namesToRegister, validateFn) {
  if (typeof validateFn == "undefined") {
    validateFn = namesToRegister;
    namesToRegister = props => [props.name];
  }

  return lifecycle({
    componentDidMount() {
      var names = namesToRegister(this.props);
      var fn = validateFn.bind(this, () => this.props);
      fn.onlyField = true;

      this.setState({
        unsubscribe: this.props.formHandlers.subscribe(names, fn)
      });
    },

    componentWillUnmount() {
      if (this.state.unsubscribe) {
        this.state.unsubscribe();
      }
    }
  });
}
