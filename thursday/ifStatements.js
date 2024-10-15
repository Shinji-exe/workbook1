"use strict"

var number = 10; //Number is 10
// var divisableBy = 2;
var remainder = number % 2 ; //Remainder  with number(10) / 2
var isEven = remainder == 0; //isEven asking if remainder which 10 / 2 = to 0 comparing to 0 with the double equal sign

if(isEven) { //isEven in a conditional is checking if it is even which it is because 10 / 2 has a remainder of 0
    console.log("Even")
} else {
    console.log("Odd")
}

if(number > 5) {
    console.log("Number is greater")
}else{
    console.log("Try again")
}

