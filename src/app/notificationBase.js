/*
// Notification class that wraps the Notification API
// https://developer.mozilla.org/en-US/docs/Web/API/notification
// Prashanth R
*/
module.exports = function notificationBase() {
	this.notification = null;

	this.areNotificationsSupported = function() {
    	var isSupported = false;
    	if(window) {
            if (!("Notification" in window)) {
            console.warn("This browser does not support desktop notifications");
            isSupported = false;
          } else {
            console.log("Notifications are supported");
            isSupported = true;
          }
        }
	    return isSupported;
    }

    this.requestPermission = function() {
    	Notification.requestPermission(function (permission) {
      	   	return permission;
    	});
    }

    this.getPermission = function() {
    	return Notification.permission;
    }

    this.hasPermissionBeenGranted = function() {
    	return Notification.permission === "granted";
    }

    //initialize
    if(this.areNotificationsSupported()) {
        if(!this.hasPermissionBeenGranted()) {
            this.requestPermission();
        }
    }
}