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
	var scope = 'Hello Pilgrim!';  // Didn't declare local variable, just changed global variable value.
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