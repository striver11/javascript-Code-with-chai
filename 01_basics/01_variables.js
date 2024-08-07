


// Feature	           ||           var	                           ||               let	                         ||          const

// Scope	           ||   Function-scoped	                       ||           Block-scoped                     ||       Block-scoped
// Re-declaration	   ||  Allowed within the same scope	       ||  Not allowed within the same scope	     ||  Not allowed within the same scope
// Re-assignment	   ||       Allowed                            ||            	Allowed	                     ||   Not allowed (must be initialized)
// Initialization	   || Can be declared without initialization   ||   	Must be initialized upon declaration ||  	Must be initialized
//  TemporalDead Zone  ||Does not have a temporal dead zone        ||           Has a temporal dead zone	     ||     Has a temporal dead zone



/*
please don't use var only use let and const due to the scope issue
*/

console.log("+++++++++++++++++  var example ++++++++++++++++++++++++++")
function exampleVar() {
    console.log(x); // undefined
    var x = 10;
    if (true) {
        var x = 20; // same variable, function-scoped
        console.log(x); // 20
    }
    console.log(x); // 20
}
exampleVar();



console.log("-----------------------------  let example -------------------------------")
function exampleLet() {
    //console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 10;
    if (true) {
        let x = 20; // different variable, block-scoped
        console.log(x); // 20
    }
    console.log(x); // 10
}
exampleLet();


console.log("*******************************  const example  ****************************")
function exampleConst() {
   // console.log(x); // ReferenceError: Cannot access 'x' before initialization
    const x = 10;
    if (true) {
        const x = 20; // different variable, block-scoped
        console.log(x); // 20
    }
    console.log(x); // 10
}
exampleConst();

// Example with object
const obj = { key: 'value' };
obj.key = 'newValue'; // Allowed
// obj = {}; // TypeError: Assignment to constant variable.




console.log("#########################  not defined ####################")
var a;
console.log(a);
let b;
console.log(b)



console.log("&&&&&&&&&&&&&&&&&&&&&&&&&  no datatype like var or let but we can use it javascript &&&&&&&&&&&&&&&")
variable="Hello";
console.log(variable);