/*
// notificationBase.jsx
// Notification class that wraps the Notification API
// https://developer.mozilla.org/en-US/docs/Web/API/notification
// Prashanth R

*/
class NotificationBase {
    private notification;
    constructor(){
    	this.initialize();
    }

    private initialize(){
    	let notificationsSupported = this.areNotificationsSupported();
    	if(notificationsSupported) {
    		if(!this.hasPermissionBeenGranted()) {
    			this.requestPermission();
    		}
    	}
    }

    //Checks if browser supports notifications
    public areNotificationsSupported() : boolean {
    	let isSupported = true;
    	if (!("Notification" in window)) {
	    console.warn("This browser does not support desktop notifications");
	  	isSupported = false;
	  }
	  return isSupported;
    }

    public requestPermission() {
    	Notification.requestPermission(function (permission) {
      	   	return permission;
    	});
    }

    public getPermission() {
    	return Notification.permission;
    }

    public hasPermissionBeenGranted() : boolean {
    	return Notification.permission === "granted";
    }

    public notify(title, options?) {
    	this.notifcation = new Notification(title, options);
    }
}