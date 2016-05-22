var notify = require('../../app/notify');
var notifyInstance = new notify();
notifyInstance.notify('hello!', null, console.log('Notification activated'));