var s = "hello world!"  // A String

var world = s.substring(s.indexOf(" ")+1, s.length); // Use string properties

var s = "test"; // Start with string value
s.len = 4;			// Set a property on it
var t = s.len;	// Now query the propery

/*

JS objects are composite values: they are a collection of properties 
or named values.

We refer to the value of a property using . notation.  When the value of a 
property is a function, we call it a method.  

*/

/*

When you run this code, the value of t is undefined.

The second line of code creates a temporary String object, sets its 
len property to 4, and then discards that object.

The third line creates a new String object from the original string
value and then tries to read the len property.  

This property does not exist, and the expression evaluates 
to undefined.

This code demonstrates that string, numbers, and boolean values
behave like objects when you try to read the value of a property
(or method) from them.

But if you attempt to set the value of a property, that attempt is 
silently ignored: the change is made on temporary object and does 
not persist.



*/