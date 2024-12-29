// scope
/*
application data
var
let
const
function()


=> scope is accessibility of application data
type:
1. global scope
2. functional/local scope
3. block scope

*/
// var email;
// console.log(email)
// var email = "demo@gmail.com"
// console.log(email)
// var a = 12
// function welcome(name, address) {
//     var a = 23;
//     console.log(a) // 23
//     console.log(name, address)
// }
// welcome("ram", "vedu")
// console.log(a)
// console.log(name, address)
// var, let,
// var b = 23;
// let b = 23
// b = 23


var greetingText = "hello"
if (true) {
    let greetingText = "hi"
    console.log(greetingText)
}
else {
    let greetingText = "bye"
    console.log(greetingText)
}
console.log(greetingText)