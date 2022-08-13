/*
! Object Declaration
^ Here I am declaring a person object, with few attributes
*/

const person = {
    //Basic Object declaration with attributes
    name: "Jyotiraditya",
    age: 34,
    phone: "9663659623",
    email: "jyotiradityad@icloud.com",
    //Declare an object inside object
    gadgets:{
        laptop: "Mac Book Pro M2 Processor 2022 Edition",
        mobile: "iPhone 12",
        watch: "Apple Watch Series 7"
    },
    //Add Array of objects Inside an object
    friends:[
        {
            name: "Sohan",
            city: "Pune"
        },
        {
            name: "Janaki",
            city: "Chandigarh"
        },
        {
            name: "Arun",
            city: "Berhampur"
        }
    ]
}

/*
! Let's try to access the Object properties
*/
// * Name, Email, Phone, Age
console.log(person.name)
console.log(person.email)
console.log(person.phone)
console.log(person.age)

// * Accessing object inside an object
let personGadgetDetail = person.gadgets
console.log(personGadgetDetail.laptop)
console.log(personGadgetDetail.mobile)
console.log(personGadgetDetail.watch)

// * Accessing array of objects inside an object
let personFriendsDetails = person.friends
personFriendsDetails.forEach(e => {
    console.log(e.name  + ", " + e.city) 
})


/*
 ! Looping thorough properties of object
 ^ We also can loop through the above object just we need to update the logic
 ^ as the object structure is little complex than the below one
*/
let newPerson = {
    name: "Priyanka",
    age: 34,
    city: "Pune"
}
let details = ""
for (let x in newPerson){
    details += newPerson[x]
}
console.log(details)

/*
   ! add new properties to existing object
   * let's add new Properties to Person object, declared at Top
*/

person.gender = "Male",
person.nationality = "Indian"

console.log(`${person.name} is a ${person.gender} and he is an ${person.nationality}`)

/*
   ! Delete  properties from an existing object
   * let's delete a properties from Person object, declared at Top
*/
delete person.age //delete person["age"]
console.log(person.age)

/*
 ! JavaScript Object Method
*/
let employee = {
    name: "Virat",
    age: 34,
    department: "Dev",
    band: "4A",
    getEmployeeDetails: function(){
        return `${this.name} aged ${this.age} from ${this.department} department of band ${this.band}`
    }
}

console.log(employee.getEmployeeDetails())

// * Adding Methods to JavaScirpt Object
employee.promotion = function(){
    return `${this.name} got promoted to band 3B`
}

console.log(employee.promotion())

/*
 ! Let's learn about Object.values()
 ^ Here I am converting the Person object
*/

const p = Object.values(person)
console.log(p)

/*
 ! Let's learn about JSON.Stringify()
 ^ Here I am converting the Person object
*/
const myStr = JSON.stringify(person)
console.log(myStr)

//* If you need any specific value you can ask for that while converting to string.
//* Let's say required name of the Person

const q = JSON.stringify(person["name"])
console.log(q)

//!----------------------------------------------------------------------!//
//!----------------------------------------------------------------------!//
//^----------------------JavaScript Object Accessors---------------------^//
//!----------------------------------------------------------------------!//
//!----------------------------------------------------------------------!//

//& Getter Accessors example
const staff = {
    sname: "Vinod",
    age: 25,
    daprtMent: "IT",
    get name(){
        return this.sname
    }
}
console.log(staff.name)

//& Setter Accessors example
const residentsDetails = {
    name:"",
    flatNo:"",
    societyName:"Roseland Rhythm",

    set ownerName(ownerName){
        this.name = ownerName
    },
    get ownerName(){
        return this.name
    },
    
    set houseDetails(flatNo){
        this.flatNo = flatNo
    },
    get houseDetails(){
        return this.flatNo
    }
}

const a = {
    __proto__: residentsDetails
}

a.ownerName = "MS Dhoni"
a.houseDetails = "G1-301"

console.log(a.ownerName)
console.log(a.houseDetails)
console.log(a.societyName)

//!----------------------------------------------------------------------!//
//!----------------------------------------------------------------------!//
//^--------------------JavaScript Constructor Function-------------------^//
//!----------------------------------------------------------------------!//
//!----------------------------------------------------------------------!//

//& Basics of Contructor function
// * Declaring a Constructor Function
function Player1 () {
    this.name = "Rohit Sharma"
    this.age = 35
    this.playingStyle = "Right handed batter"
}

// * Creating an Object of Constructor Function
const player1 = new Player1()
console.log(player1.name)
console.log(player1.age)
console.log(player1.playingStyle)

//& Constructor function with parameters

//* Let's modify the above method slightly
function Player (name, age, playingStyle) {
    this.name = name
    this.age = age
    this.playingStyle = playingStyle
}

const player2 = new Player("Virat Kohli", 33, "Right hand batter")
const player3 = new Player("Jaspreet Bumrah", 30, "Right hand bowler")



console.log(player2.name)
console.log(player2.age)
console.log(player2.playingStyle)


console.log(player3.name)
console.log(player3.age)
console.log(player3.playingStyle)

//& Add Property and method to the constructor function
// * Let's modify(add few peroperties) to the player2 instance
player2.isCaptain = true
player2.franchiseTeam = ["RCB", "Sydeney Thunder"]

console.log(player2.isCaptain)
console.log(player2.franchiseTeam)

//* adding methods to Player2 instance
player2.details = function(){
    return `${this.name}
            ${this.age}
            ${this.playingStyle}
            ${this.isCaptain}
            ${this.franchiseTeam}
            `
}

console.log(player2.details())

//* there is an another way you can add methods to an object, here is player2
Object.defineProperty(player2, "playerDetails", {
    get: function(){
        return `Created by object accessors, Object.defineProperty()
            ${this.name}
            ${this.age}
            ${this.playingStyle}
            ${this.isCaptain}
            ${this.franchiseTeam}
            `
    }
})
console.log(player2.playerDetails)

