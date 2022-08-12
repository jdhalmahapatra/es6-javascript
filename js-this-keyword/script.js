  /*
   ^ this in a Method
  */
   const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  console.log(person.fullName())

  /*
    ^ this Alone
  */

    let x = this
    console.log(x)

  /*
    & In Strict Mode, when this is used alone
  */
    "use strict";
    let a = this
    console.log(a)

/*
 ^ this in a function (default)
*/
function show(){
    return this;
}
console.log(show())

/*
 ^ this in a function (strict mode)
*/

"use strict";
function myFunction() {
  return this;
}
console.log(myFunction())


/*
 Example of this keyword
 * Example 1
 */

 const operation = {
    a: 20,
    b: 10,
    add: function(){
        let res = this.a + this.b
        console.log(`Summation of two numbers ${this.a} and ${this.b} is ${res}`)
        let print = function(){
            console.log(`a = ${this.a} b=${this.b}`)
        }
        print()
    }
 }

 let value = {
    __proto__: operation
 }
 console.log(value.add())

 /*
   * Example 2
  */
 let employee = {
    office:'AArete',
    location:'Pune',
    set: function (name){
        this.name = name
    },
    get:function(){
        return this.name
    }
}

employee.set('Jyotiraditya')
console.log(employee.get()) // It will print Jyotiraditya