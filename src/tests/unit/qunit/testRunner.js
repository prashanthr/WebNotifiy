var qunit = require("qunitjs");
var path = require("path");
var src = __dirname + "../../";
qunit.run({
    code : src + "/app/notify.js",
    tests : src + "/tests/tests.js"
});