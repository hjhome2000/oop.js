/*
 * SubClass.js
 */

define(["exports", 
				"example/SuperClass"], function(exports, SuperClass) {
	
	function SubClass() {
		// call super constructor.
		SuperClass.clazz.call(this, "member1");
		
		return this;
	}
	
	// Inherit from SuperClass
	SubClass.prototype = Object.create(SuperClass.clazz.prototype);
	
	SubClass.prototype.draw = function(arg1) {
		// super method call
		SuperClass.clazz.prototype.draw.call(this, arg1, "arg2");
		
		console.log("SubClass");
		console.log("arg1 : " + arg1);
		console.log("--------");
	};
	
	/*
	 * Require.js supports 'exports' function.
	 * its function is resolving circular dependency.
	 * 
	 * if you use 'return SubClass' statement instead of 'exports',
	 * its module will be misfunction or undefined.
	 */
	exports.clazz = SubClass;
	
});