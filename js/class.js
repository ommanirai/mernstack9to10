// wap to check whether a number is prime or not

// 7
// divisible by self and 1
// 1 to 7
// divisibleCount = 2
// var n =Number(prompt("enter number to check prime or not"))



// solution
// var n = 99
// var divisibleCount = 0
// for(i=1;i<=n;i++){
//     // i=1 to 7
//     if(n%i==0){
//         divisibleCount++
//     }
// }

// if(divisibleCount==2){
//     console.log(n +" is prime number")
// }
// else{
//     console.log(n + " is composite number")
// }


// task 1:
// wap to print the collection of fibonacci series upto user count
// 0,1,1,2,3, 5, 8, 13, 21, 34, 55

// hint
// var n1 = 0
// var n2 = 1
// var next = n1 + n2
// console.log(next)
// n1 = n2
// n2 = next


/*
initialization
condition
increment/decrement

2. while
syntax:

initialization;
while(codition){
    body of while loop
    increment/decrement
}


3. do while
syntax:
initializaiton
do{
    body of do while
    increment/decrement
}while(condition)

*/
var i = 1
// while(i<=10){
//     console.log(i)
//     i++
// }

do{
    console.log(i)
    i++
}while(i<=10)
