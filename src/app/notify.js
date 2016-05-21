var notificationBase = require('./notificationBase.js');
module.exports = function Notify() {
	this.base = new notificationBase();
	this.notify = function(title, options) {
		this.base.notification = new Notification(title, options);
	}
}