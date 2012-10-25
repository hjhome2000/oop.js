/*
 * SuperClass.js
 */

define(["exports"], function(exports) {
	
	function SuperClass(arg) {
		// setting up member variables.
		this.member1 = arg;
		
		return this;
	}
	
	SuperClass.prototype.draw = function(arg1, arg2) {
		
		console.log("SuperClass");
		console.log("arg1 : " + arg1);
		console.log("arg2 : " + arg2);
		console.log("member1 : " + this.member1);
		console.log("----------");
		
	};
	
	// export Class.
	exports.clazz = SuperClass;
	
});