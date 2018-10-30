 import sum from './sum';
 import {expect}  from 'chai';
 import sinon from 'sinon';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).to.equal(3);
});

// exemplo com callback
test('adds 1 + 2 to equal 3 com callback', () => {
  const callback = sinon.fake();
  expect(sum(1, 2, callback)).to.equal(3);
  expect(callback.getCall(0).args[0]).to.equal(3);
});
