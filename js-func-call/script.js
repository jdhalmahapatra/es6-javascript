const addOepration = {
    add: function(){
        return this.a + this.b
    }
}

const intNumber = {
    a : 10,
    b : 20
}
console.log(addOepration.add.call(intNumber))

const floatNumber = {
    a: 5.6,
    b: 7.88
}
console.log(addOepration.add.call(floatNumber))

//^ Let's try to understand it in more details.
//^ what we can do we can create a generic method and pass the operation type

const mathOperation = {
    calc: function(operationType){
        switch (operationType){
            case "+":
                return this.a + this.b
            case "-":
                return this.a - this.b
            default:
                break;

        }
    }
}

const numberOne = {
    a: 100,
    b: 200,
}

const numberTwo = {
    a: 50,
    b: 32,
}

console.log(mathOperation.calc.call(numberOne, "+"))
console.log(mathOperation.calc.call(numberTwo, "-"))

//^ Let's understand this with one more example
//^ How we can use call() method in other way
//& You see here in this example we are passing multiple parameters

const person = {
    firstName: 'Jyotiraditya',
    lastName: 'Dhalmahapatra',
    getFullName: function(){
        console.log(`Outer: ${this.firstName} ${this.lastName}`)
        let address = function (city, state, zipcode){
            console.log(`Inner: ${this.firstName} ${this.lastName}. 
                        He is from ${city}, ${state}. 
                        Pincode - ${zipcode}
                        `)
        }.call(this, 'Bhubaneswar', 'Odisha', '751024')
    }
}
person.getFullName()
 