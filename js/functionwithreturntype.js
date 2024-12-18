function sum(n1, n2) {
    // name is parameter
    var result = n1 + n2;
    // console.log("sum of tow number is: ", result)
    // console.log("the sum of n1 and n2 is: ", result)

    // return n1 + n2;
    return result;
}
// var final_result = sum(23, 123)
// console.log("sum is: ", final_result)
// var a = sum(12, 23)
// console.log("the sum of two number is; ", a)


function displayDeails(){
    var fruits = ['kiwi', 'papaya', 'apple']
    var veg = {
        veg1: "potato",
        veg2: "tomato",
        veg3:"carrot"
    }

     
    return {
        a:fruits,
        b:veg
    }
    // return [veg, fruits]
    // return fruits
    // console.log("hi")
}
var det = displayDeails()
console.log("details of carrot is: ",det.b.veg3)
console.log("details is: ",det.a[2])