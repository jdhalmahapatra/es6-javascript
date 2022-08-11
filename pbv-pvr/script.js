//Pass By value (All the Primitives like integer, float, double, boolean etc.)
var a = 5
var b = a
a = 10

console.log(a);
console.log(b);

console.log("===========================================================")

//Pass By reference
var person = {
    name: "Jyotiraditya",
    email: "jd@gmail.com",
    age: 34
}

var person1 = person
//So lets say If I change any value of a variable in the person object, 
//then it will change in the person1 as well. 
//The reason person is a reference type and it will pass to another variable as a reference.
//So the conclusion is it is not chnaging the underlying primitives, array or object
//It is just pointing to the new value of variable
person.age = 25
person.city="Bhubaneswar"


//But incase of chaging the property of object or array referenced by a variable in our case it is person, 
//then it does not affect in the earlier assigned person1
//Next, the value of the variable 'person' is entirely changed. 
//Thus, the variable 'person' now points to a completely different value. 
//This does not result in any change in the value contained in the variable 'person1'.
//
person = {
    gender: "male",
    qualification: "B.Tech",
    occupation: "IT Engineer",
    id: "85851853996"
}

console.log(person)
console.log(person1)

console.log("===========================================================")
//Now lets understand all the concept using some function
//Pass By Value

var myName = "Smith"
const show = (x) =>{
 console.log(x);
 x= "Amit";
 console.log(x)
}
show(myName)
console.log(myName)

//In the above example, you clearly see that even after changing the name inside the method
//It didn't change the original declared variable, why is so? becasue here in the above example
//the parameter is being passed as Value. So when try to change the inner value it didn't affect the other one
console.log("===========================================================")

//Now let's understand the Pass By Reference using a function
const display = (x) =>{
    console.log(x.name)
    x.name = "Amit"
    console.log(x.name)
}
let user = {
    name: "Smith"
}
display(user)
console.log(user.name)

console.log("===========================================================")

//Now let's try to understand it using an Array
let animal = ["Tiger", "Lion", "Bear"]
let newAnimal = animal
const showAnimalData = (x) => {
    x.forEach(element => {
        console.log(element)
    });
    console.log("===========================================================")
    x.push("Elephant")
    x.forEach(element => {
        console.log(element)
    });
}
showAnimalData(newAnimal)
console.log("===========================================================")
animal.forEach(element => {
    console.log(element)
})

