var a = 3.14; // Declare and initialize a variable
var b = a; // Copy the variable's value to a new variable
a = 4; // Modify the value of the original variable
alert(b) // Displays 3.14; the copy has not changed

var a = [1,2,3]; // Initialize a variable to refer to an array
var b = a; // Copy that reference into a new variable
a[0] = 99; // Modify the array using original reference
aler(b); // Display the changed array [99,2,3] using the new reference