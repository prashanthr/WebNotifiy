console.log('testing...');
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var notify = require('../../app/notify');

describe('notify', function() {
  it('notifyTest', function() {
    let notifyInstance = new notify();
    expect(notifyInstance.base.notification).to.not.equal();
  });
});