(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
// Notification class that wraps the Notification API
// https://developer.mozilla.org/en-US/docs/Web/API/notification
// Prashanth R
*/
module.exports = function notificationBase() {
	this.notification = null;

	this.areNotificationsSupported = function() {
    	let isSupported = false;
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
},{}],2:[function(require,module,exports){
var notificationBase = require('./notificationBase.js');
module.exports = function notify() {
	this.base = new notificationBase();
	this.notify = function(title, options) {
		this.base.notification = new Notification(title, options);
	}
}
},{"./notificationBase.js":1}],3:[function(require,module,exports){
var notify = require('../../app/notify');
var notifyInstance = new notify();
notifyInstance.notify('hello!', null, console.log('Notification activated'));
},{"../../app/notify":2}]},{},[3]);
