var scope = "global"; // variable scope is global 

function checkscope() {
	var scope = 'local';  // Declare local variable with the same name
	document.write(scope); 
}
checkscope();

// Notes - If you declare a local variable or function param with the same name as a global var, you effectively hide the global variable.

/*

Variable Scope

The scope of a variable is the region of your program in which it is defined.  

Global variable - A global variable has a global scope; it is defined everywhere in your JS code.  

Local variable - On the other hand, variables declared within a function are defined only within 
the body of the function. They are local variables and have local scope.

Function parameters - also count as local variables and are defined only within the body of the function


*/

scope = 'global';  // Declared a global variable

function checkscope() {
	scope = 'local';  // Didn't declare local variable, just changed global variable value.
	document.write(scope);
	myscope = 'local';  // Implicitly declares a new global variable
	document.write(myscope);
}
checkscope();
document.write(scope);
document.write(myscope);

/*

You can get away with not using var keyword when declaring global variables, but you must 
always use var to declare local variables

*/

var scope = 'global variable scope';  // Declared the var scope, this is global.

function checkscope() {
	var scope = 'local variable scope';  // Declared a local variable on scope
	document.write(scope);
	function nested() {
		var scope = 'nested local variable' // Nested function with local variable
		document.write(scope);
	}
	nested();  // Prints "nested local variable"
}
checkscope(); // Prints "local variable scope"

/*

Functions do not know what variables are defined in the global scope or what they are being used for.

var scope = 'global variable scope';  // Declared the var scope, this is global.

function checkscope() {
	var scope;  // Declared a local variable on scope
	document.write(scope);
	function nested() {
		var scope = 'nested local variable' // Nested function with local variable
		document.write(scope);
	}
	nested();  // Prints "nested local variable"
}
checkscope(); // Prints "undefined"


If a function uses a global variable instead of a local one, it runs the risk of changing a value on which some 
part of the program relies.

Avoiding this problem is simple:  declare all variables with var!

*/
