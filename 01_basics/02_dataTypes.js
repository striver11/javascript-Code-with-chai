

/*
Differences in Table Format
Feature	        ||              String	              ||             Number	                  ||              BigInt	              ||             Boolean	            ||            Undefined	                  ||              Null	               ||            Symbol	                  ||        Object
Type	        ||            Primitive	              ||             Primitive	              ||           Primitive	              ||             Primitive	            ||              Primitive	              ||            Primitive	           ||          Primitive	              ||        Non-Primitive (Reference)
Example	        ||             "Hello"	              ||             42                       ||    	12345678901234567890n         ||            	true	            ||          undefined	                  ||              null	               ||           Symbol('desc')	          ||      { name: 'Alice' }
Mutability	    ||           Immutable	              ||            Immutable	              ||            Immutable	              ||               Immutable	        ||           Immutable	                  ||           Immutable	           ||              Immutable	          ||     Mutable
Default Value	||      "" (empty string)	          ||                     0	              ||             0n	                      ||             false	                ||               undefined	              ||               null	               ||               Symbol()	          ||    {} (empty object)
Usage	        ||           Textual data	          ||      Numeric calculations            ||  	Large integers	                  ||    Logical operations	            ||   Undefined variables	              ||   Absence of value	               ||  Unique object keys	              ||Collections, structures
Type Check	    ||   typeof "str" yields "string"     ||    	typeof 42 yields "number"	  ||      typeof 123n yields "bigint"	  ||    typeof true yields "boolean"    ||	typeof undefined yields "undefined"   ||	typeof null yields "object"	   ||   typeof Symbol() yields "symbol"   ||	typeof {} yields "object"
*/


// String

// Represents a sequence of characters.
// Examples: "Hello", 'World', `Template Literal`.

let str = "Hello, World!";
console.log(str); // "Hello, World!"


// Number

// Represents both integer and floating-point numbers.
// Examples: 42, 3.14.

let num = 42;
let floatNum = 3.14;
console.log(num); // 42
console.log(floatNum); // 3.14


// BigInt

// Represents integers with arbitrary precision.
// Examples: 9007199254740991n, -12345678901234567890n.

let bigInt = 123456789012345678901234567890n;
console.log(bigInt); // 123456789012345678901234567890n

// Boolean

// Represents a logical entity with two possible values: true or false.
// Examples: true, false

let isTrue = true;
let isFalse = false;
console.log(isTrue); // true
console.log(isFalse); // false


// Undefined

// Represents a variable that has been declared but not initialized.
// Example: let a; console.log(a); // undefined.
let x;
console.log(x); // undefined


// Null

// Represents an intentional absence of any object value.
// Example: let obj = null;.
let obj = null;
console.log(obj); // null


// Symbol

// Represents a unique and immutable value primarily used as object property keys.
// Example: Symbol('description').

const sym = Symbol('description');
console.log(sym); // Symbol(description)



// Object

// Represents collections of key-value pairs, including arrays and functions.
// Example: { name: 'Alice', age: 25 }

let person = {
    name: "Alice",
    age: 25
};
console.log(person); // { name: 'Alice', age: 25 }
