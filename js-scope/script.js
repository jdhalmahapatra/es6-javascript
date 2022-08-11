/*
    * Scope provides code security and helps to debug the code faster and efficiently *
    ! There are two types of Scopes in JavaScript !
        ? 1. Local Scope 
        ? 2. Global Scope
    ^ Local Scope - Anything inside a function is a local scope
    ^ Global Scope - Anything that is outside the function is global scope
*/

/**
 * ~ Let's understand the local scope with an example ~
 */
let x = 10;
const showNumber = (num) =>{
    let x = 20;
    num = x;
    console.log(num);
} 

showNumber(x)
console.log(x)

console.log("=========================================================")

/**
 * ~ Let's understand the Global scope with an example ~
 */
let a = 12

const displayNumber = (num) => {
    a = num * num;
    console.log(num)
    console.log(a)
}

displayNumber(a)
console.log("After assigning new values to a")
console.log(a)

/**
 * ^Some more advance concept
 */

const foo = () => {
    let z = 10;
    bar()
}

const bar = () => {
    console.log(z);
}

foo()

//The above code will throw error, even though bar() is being called inside the function foo(). 
//Because the compiler will treat this two function as two separate function and variable z is the local
//to the function foo. But trying to print the value in the function bar