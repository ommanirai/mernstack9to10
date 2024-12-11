/*
loop in javascript:
1. for
syntax:
for(initialization;condition;increment/decrement){
    body of for
}
// 1. wap(write a program) to print a number from 1 to 10 using for loop

a. initialization
i=1
b. condition
i==10
i<11
i<=10

c. increment
i++

for(i=1;i<=10;i++){
i=1, 1<=10
i=2, 2 <=10
i=10, 10<=10
i=11, 11<=10
    console.log(i)
}
solution:
for (i = 1; i <= 10; i++) {
    console.log(i)
}


task1:
wap to print a number from 10 to 1

task2:
wap to print a multiplicaiton table of 9
9 x 1 = 9
9 x 2 = 18
9 x 10 = 90

for (i = 1; i <= 10; i++) {
    console.log(9 + " x " + i + " = " + i * 9)
}

task3:
wap to print a collection of even number from 1 to 50
for (i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

task4: 
wap to print a collection of odd number from 50 to 1

task5:
wap to print the sum of number from 1 to 10
result: 55

task6:
wap to print factorial of number 5
5 * 4 * 3 * 2 * 1
result: 120


2. while
3. do-while

*/

for (i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}