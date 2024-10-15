"use strict"

//Exercise1

//Description: This script tests various numeric
//              conversion techniques
//Author: Jordan Q. Newprogrammer

//ParseInt = whole number example 121
//ParseFloat = numbers with decimals example 121.12
//number = can be a whole number or a float number example 121 or 121.12

var a = " 101.1     ";
console.log(typeof(a));
var b = "55";
console.log(typeof(b));
var c = "402 Stevens";
console.log(typeof(c));
var d = "Number 5    "; //NaN: 
console.log(typeof(d))

var a = parseInt(a) //101
var b = parseInt(b) //55
var c = parseInt(c) //402
var d = parseInt(d) //NaN
console.log(a, typeof(a), b, typeof(b), c, typeof(c), d, typeof(d))

// var a = " 101.1     ";
// console.log(typeof(a));
// var b = "55";
// console.log(typeof(b));
// var c = "402 Stevens";
// console.log(typeof(c));
// var d = "Number 5    "; //NaN: 
// console.log(typeof(d))


// a = parseFloat(a) //101.1 number
// b = parseFloat(b) //55 number
// c = parseFloat(c) //402 number
// d = parseFloat(d) //NaN 
// console.log(a, typeof(a), b, typeof(b), c, typeof(c), d, typeof(d))


// var a = " 101.1     ";
// console.log(typeof(a));
// var b = "55";
// console.log(typeof(b));
// var c = "402 Stevens";
// console.log(typeof(c));
// var d = "Number 5    "; 
// console.log(typeof(d))

// a = Number(a) //101.1
// b = Number(b) //55
// c = Number(c) //NaN
// d = Number(d) //NaN
// console.log(a, typeof(a), b, typeof(b), c, typeof(c), d, typeof(d))


// var a = " 101.1     ";
// console.log(typeof(a));
// var b = "55";
// console.log(typeof(b));
// var c = "402 Stevens";
// console.log(typeof(c));
// var d = "Number 5    "; 
// console.log(typeof(d))

// a = +a
// b = +b
// c = +c
// d = +d

// console.log(a,b,c,d)
