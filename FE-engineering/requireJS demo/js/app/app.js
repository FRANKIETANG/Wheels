// CMD 规范：
/*
define(function(require,exports,module){
    var blue = require('com/blue')
    var yellow = require('com/yellow')
    var green = require('com/green')
    blue()
    yellow()
    green()
})
*/
// AMD 规范
define(['jquery','com/blue','com/green','com/yellow'],function($,blue,green,yellow){
    blue()
    green()
    yellow()
})