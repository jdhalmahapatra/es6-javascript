//^ Declare two objects
//^ Using Object Literal

//* Veichle Object
const veichle = {
    type:"Car",
    noOfWheels: 4,
    drivingSide: "right"
}

//* Car Object
const car = {
    maker: "Ford",
    brand: "Figo Aspire",
    color: "Ruby Red"
}

//^ using Prototype I can add properties and methods to the object
//& Property added
car.__proto__.engineType = "diesel"

//& Method added
car.__proto__.getDetails = function(){
    return `${this.maker}
            ${this.brand}
            ${this.color}
            ${this.engineType}
            `
}

//^ Let's understand the Proptype Inheirtance
veichle.__proto__ = car
console.log(veichle.maker)
console.log(veichle.brand)
console.log(veichle.engineType)
console.log(veichle.getDetails())
console.log(veichle.type)


//^ Now let's undestand the above concpet using constructor function (CF)
//^ let's make it more generic by creating a parameterized CF

function Veichle (type, noOfWheels, drivingSide){
    this.type = type
    this.noOfWheels = noOfWheels
    this.drivingSide = drivingSide
}

function Car (maker, brand, color){
    this.maker = maker
    this.brand = brand
    this.color = color

}

//* Create the instance of two Constructor function
const v = new Veichle("Car", 4, "right")
const c = new Car("Jeep", "Compas", "black")

//* Adding new properties & Methods in the Car
c.seatingCapacity = 7
c.engineType = "diesel"

//* Add Methods
c.getDetails = function(){
    return `${this.maker}
            ${this.brand}
            ${this.color}
            ${this.seatingCapacity}
            ${this.engineType}`
}

console.log(c.engineType)
console.log(c.seatingCapacity)
console.log(c.maker)

//* Apply Prototype Inheritance
v.__proto__ = c
console.log(v.getDetails())
console.log(v.type)
console.log(v.noOfWheels)
console.log(v.drivingSide)


