/*
  ! What is wrong in the above code?
  ^ There is nothing wrong in the below code, but there is code redundancy.
  ^ Also, in real-life scenarios, typically function are not going to be one liner, imagine copying multiple 
  ^ lines of code to multiple places is a very tidious task, Also, if any bug came then we do need to fix it
  ^ in every places. 
 */

const me = {
    talk(){
        return "talking"
    }
}

const you = {
    talk(){
        return "talking"
    }
}

console.log(me.talk())
console.log(you.talk())
console.log("=========================================================")

/*
 * To avoid redundancy, what we can do we can implement inheritance
 * Let's understand the same above example using Inheritance
 & Now using Inheritance we able to negate the redundancy
 & Now What If we need to fix the bug in the function
 ! All together the above complete concept is class based Inheritance. 
*/

class Person{
    talk(){
        return "talking"
    }
}

const me1 = new Person()
const you1 = new Person()

console.log(me1.talk())
console.log(you1.talk())

/*
    ^This without changing the original declaration we still be able to assign a new function to the same
*/
Person.prototype.talk = () => {
    return "New Advance way of talking"
}

console.log("=========================================================")
console.log(me1.talk())
console.log(you1.talk())


/* 

*/