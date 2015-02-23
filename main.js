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