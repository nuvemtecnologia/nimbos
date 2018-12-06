import { lifecycle } from "recompose";
export function validate(namesToRegister, validateFn) {
  if (typeof validateFn == "undefined") {
    validateFn = namesToRegister;

    namesToRegister = function namesToRegister(props) {
      return [props.name];
    };
  }

  return lifecycle({
    componentDidMount: function componentDidMount() {
      var _this = this;

      var names = namesToRegister(this.props);
      var fn = validateFn.bind(this, function () {
        return _this.props;
      });
      fn.onlyField = true;
      this.setState({
        unsubscribe: this.props.formHandlers.subscribe(names, fn)
      });
    },
    componentWillUnmount: function componentWillUnmount() {
      if (this.state.unsubscribe) {
        this.state.unsubscribe();
      }
    }
  });
}