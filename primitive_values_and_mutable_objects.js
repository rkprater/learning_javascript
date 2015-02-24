var s = "hello"; // Start with lowercase text

s.toUpperCase();  // Returns "HELLO", but doesn't alter s

s  // => "hello" : the original string has not changed

/*

There is a fundamental difference in JS between primitive values (undefined, null, 
boolean, numbers, and strings).

Object: including arrays, and functions.  Primitives are immutable: there is no
way to change or mutate a primitive value.

Primitives are also compared by value:  two values are the same only if they 
have the same value.  

*/