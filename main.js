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