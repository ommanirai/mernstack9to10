/*
application data:
var, const , let, function


scope:
=> scope is accessibility of application data
type:
1. global scope
2. functional/local scope
3. block scope


*/
// var a;
// console.log(a)
// var a = 234;
// console.log(a)

// 1. global scope
// declare in outermost layer
// accessible within a file
// var data = "sujan"

// console.log(data)
// function hi() {
//     console.log("Data is: ", data)
//     function result() {
//         console.log("data from inner function: ", data)
//     }

//     result()
// }

// hi()



/*
2. functional/local scope
=> declare within a function
=> accessible within a function
=> var maintain functional scope

*/
// data = "sujan"
// function hi(name, address) {
//     var a = 23423;
//     // here, name, address and a is functional/local scope
//     console.log("hi ", name, ' welcome to ', address)
//     console.log("data is: ", a)
// }
// hi("Ram", "Vedu")
// console.log(a)

/*
3. block scope
*/
var greetingText = "hello"
if (greetingText) {
    let greetingText = "hi"
    console.log("from if block: " + greetingText) // hi
}
else {
    let greetingText = "namaste"
    console.log("from else block " + greetingText)
}

console.log(greetingText)