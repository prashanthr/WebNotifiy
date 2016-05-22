var chai = require('chai');
var expect = chai.expect;
var notify = require('../../../app/notify');

describe('notifyTests', function() {
  it('notifyInstanceIsValid', function() {
    let notifyInstance = new notify();
    expect(notifyInstance.base.notification).to.not.equal(undefined);
  });
});