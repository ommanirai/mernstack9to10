/*
function
=> function is reusable block of code which perform specific task
block
{}

syntax:
// declaration
// initialization
function function_Name(){
    body of function
}

// function call
function_Name()


types of function
1. named function
2. function with argument

sytnax:
function function_name(parameter1,parameter2, parameter3, ...){
body of function
}

3. function with return type
4. anynamous(unnamed) function
5. IIFE(immediately invoked functional expression)




*/

// function welcome(){
//     console.log("Hi Sujan,Welcome to vedu!!!")
// }

// function sum(){
//     console.log("hi from sum function")
// }


// welcome()
// welcome()
// welcome()
// welcome()
// welcome()
// sum()


// function welcome(name, address) {
//     // name is parameter
//     console.log("hi " + name + " welcome to " + address)
// }

// welcome("Ram","vedu")
// Ram is argument
// welcome("Sujan", "animax")
// welcome("Hari", "random")
// welcome("Sita", "asdf")



// function welcome(name, address, phone, email, status) {
//     // name is parameter
//     console.log("hi " + name + " welcome to " + address +" phone: "+ phone +" email: "+ email + " status: "+status)
// }

// welcome("Ram", 9234234, "vedu", 'demo@gmail.com', 'active')


function welcome(details) {
    console.log("what comes in details: ", details)
    // name is parameter
    // console.log("hi " + details.name + " welcome to " + details.address + " phone: "+ details.phone +" email: "+ details.email + " status: "+details.status)
}
var d = {
    name: "demo",
    address: "demo",
    phone: 923843,
    email: "dmeo@gmail.com",
    status: "active"
}
var my_details = ['dmeo', 'vedu', 92834234, "abc@gmail.com", 'active']

welcome(d)
// task
// welcome(my_details)