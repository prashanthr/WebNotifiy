//https://www.npmjs.com/package/mocha-jsdom
var jsdom = require('mocha-jsdom')
var chai = require('chai');
var expect = chai.expect;
var notify = require('../../../app/notify');
 
describe('notifyTests', function () {
 
  jsdom();
 
  it('notifyInstanceIsValid', function () {
  	var notifyInstance = new notify();
    var notification = notifyInstance.base.notification;
    expect(notification).to.not.equal(undefined);
  	expect(notifyInstance).to.be.ok;
  })
 
})