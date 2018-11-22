/* eslint-disable no-unused-expressions */
/* global TestRenderer, React, expect, sinon */

import { wrapFormData, unwrapFormData, onFormChange } from '../../../packages/forms/src/helpers/form-utils';

describe('Form Utils', () => {
  describe('# (un)wrapFormData', () => {
    test('wrapFormData should trasverse the object', () => {
      const data = wrapFormData({
        values: { foo: 'Value 1' },
        errors: { baz: 'i`m a error! 👻' }
      });

      expect(data).to.be.deep.equal({
        foo: {
          value: 'Value 1'
        },
        baz: {
          error: 'i`m a error! 👻'
        }
      });
    });

    test('unwrapFormData should reverse the object transversed', () => {
      const data = unwrapFormData({
        foo: {
          value: 'Value 1'
        },
        baz: {
          error: 'i`m a error! 👻'
        }
      });

      expect(data).to.be.deep.equal({
        values: { foo: 'Value 1' },
        errors: { baz: 'i`m a error! 👻' },
        touched: {},
        fields: {}
      });
    });
  });

  describe('# onFormChange', () => {
    let _events;
    let _prev;
    let _next;

    beforeEach(() => {
      _prev = { values: { foo: 'value 1' } };
      _next = wrapFormData({ values: { foo: 'value 2' } });

      _events = {
        onChangeValues: sinon.fake(),
        onChangeErrors: sinon.fake(),
        onChangeTouched: sinon.fake(),
        onChangeFields: sinon.fake()
      };
    });
    test('onFormChange should emit onChangeValues on any values change', () => {
      const onChange = onFormChange(_prev, _events);

      onChange(_next);

      expect(_events.onChangeValues).to.be.called;
    });

    test('onFormChange should emit onChangeErrors on any errors change', () => {
      const onChange = onFormChange(_prev, _events);
      _next.foo.value = 'value 1';
      _next.foo.error = 'i`m a error';

      onChange(_next);

      expect(_events.onChangeErrors).to.be.called;
    });

    test('onFormChange should emit onChangeTouched on any touched change', () => {
      const onChange = onFormChange(_prev, _events);
      _next.foo.value = 'value 1';
      _next.foo.touched = true;

      onChange(_next);

      expect(_events.onChangeTouched).to.be.called;
    });

    test('onFormChange should emit onChangeFields on any fields change', () => {
      const onChange = onFormChange(_prev, _events);
      _next.foo.value = 'value 1';
      _next.foo.field = { required: true };

      onChange(_next);

      expect(_events.onChangeFields).to.be.called;
    });

    test('onFormChange should not emit others events, only onChangeValues on any values change', () => {
      const onChange = onFormChange(_prev, _events);

      onChange(_next);

      expect(_events.onChangeErrors).not.to.be.called;
      expect(_events.onChangeTouched).not.to.be.called;
      expect(_events.onChangeFields).not.to.be.called;
    });

    test('onFormChange should not emit others events, only onChangeErrors on any errors change', () => {
      const onChange = onFormChange(_prev, _events);
      _next.foo.value = 'value 1';
      _next.foo.error = 'i`m a error';

      onChange(_next);

      expect(_events.onChangeValues).not.to.be.called;
      expect(_events.onChangeTouched).not.to.be.called;
      expect(_events.onChangeFields).not.to.be.called;
    });

    test('onFormChange should not emit others events, only onChangeTouched on any touched change', () => {
      const onChange = onFormChange(_prev, _events);
      _next.foo.value = 'value 1';
      _next.foo.touched = true;

      onChange(_next);

      expect(_events.onChangeValues).not.to.be.called;
      expect(_events.onChangeErrors).not.to.be.called;
      expect(_events.onChangeFields).not.to.be.called;
    });

    test('onFormChange should not emit others events, only onChangeFields on any fields change', () => {
      const onChange = onFormChange(_prev, _events);
      _next.foo.value = 'value 1';
      _next.foo.field = { required: true };

      onChange(_next);

      expect(_events.onChangeValues).not.to.be.called;
      expect(_events.onChangeErrors).not.to.be.called;
      expect(_events.onChangeTouched).not.to.be.called;
    });
  });
});
