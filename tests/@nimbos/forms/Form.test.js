/* global TestRenderer, React, expect */

import Form from '../../../packages/forms/src/Form';
import formContext from '../../../packages/forms/src/helpers/form-context';

describe('Form component', () => {
  test('Should render empty', () => {
    let tree = TestRenderer.create(<Form />).toJSON();

    expect(tree).to.matchSnapshot();
  });

  test('Should render with child', () => {
    let tree = TestRenderer.create(
      <Form>
        <h1>I`m child</h1>
      </Form>
    ).toJSON();

    expect(tree).to.matchSnapshot();
  });

  test('Should render with context data', () => {
    let tree = TestRenderer.create(
      <Form values={{ foo: 'Value 1', bar: 'Value 2' }} errors={{ foo: 'I`m a error' }}>
        <formContext.Consumer>{data => <h1>{data.foo.value}</h1>}</formContext.Consumer>
      </Form>
    ).toJSON();

    expect(tree).to.matchSnapshot();
  });
});
