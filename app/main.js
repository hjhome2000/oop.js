/*
 * main.js
 */

define(["example/SubClass"], function(SubClass) {
	
	var object = new SubClass.clazz("string", 1234);
	
	object.draw("this string putting into arg1");
	
});