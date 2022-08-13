/*
  ^ Example of this keyword, let's extend it to understand it for bind()
 */

 const operation = {
    a: 20,
    b: 10,
    add: function(){
        console.log(this.a + this.b) 
        console.log(`Outer:  a= ${this.a} b= ${this.b}`)
        //var that = this   //Here I have decalred a variable and assign this to it.
        let print = function(){
            //Now I can use that to access the object properties inside the Inner function
            //Which is not falling in the object scope
            console.log(`Inner: a = ${this.a} b=${this.b}`)
        }.bind(this)
        print()
    }
 }

 let value = {
    __proto__: operation
 }
 console.log(value.add())


 /*
 ! You can pass any context to the bind() method. context should be your first argument of the bind() method. 
 ! Whatever is passed as the context, the ‘this’ keyword inside inner function, starts pointing to the passed context.
 ^ Here we have passed this keyword as context, as we know inside an object this refers to the objects
 & But let's say If I have defined these few variables as a Window object, then passing Windows as context
 & Will print the value of Winows Object. 
 
 * So Basically what you are going to pass as context in the bind(), it will start pointing to that context
 */

 window.interest = 5
 window.principal = 20000
 window.time = 2

 let interestCauluation = {
    interest: 8.5,
    principal: 1000,
    time: 2,
    emi: function() {
        let value = (this.interest * this.principal * this.time)/100
        console.log(value)
        console.log(`Outer: Interest ${this.interest} 
                        Principal: ${this.principal}
                        Time period: ${this.time}`)
        let print = function(name) {
            console.log(`Innter: Interest ${this.interest} 
                        Principal: ${this.principal}
                        Time period: ${this.time}
                        Borrower: ${name}`)
        }.bind(window, 'Ram') //
        print()
    }
 }

 let result = {
    __proto__: interestCauluation
 }

 console.log(result.emi())


 /*
  & Another example on bind() function
 */

let company = {
    name: "AArete",
    empFullName: function(){
        console.log(this.name)
    }
}

let member = {
    name: "Jyotiraditya Dhalmahapatra"
}

let employeeName = company.empFullName.bind(member)
console.log(employeeName())
