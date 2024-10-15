
"use strict"

// assets - liabilites
var assets = 3000;
var liabilites = 1750
var profit;
profit = assets - liabilites;

console.log(profit)

console.log("Your net-worth is " + profit)

/////

var length = 30;
var width = 25;
var area = length * width;
console.log(area)

console.log("The area of the retangle is " + area)

/////

var food = 20.45;
var tipPercentage = .15;
var totalCostAmount = food + tipAmount;
var tipAmount = food * tipPercentage
tipAmount = Math.round(tipAmount)
console.log(tipAmount)

console.log("The tip on a $" + food + " food bill is $" + tipAmount.toFixed(2))

var food1 = 30
var tip = 10
var totalCost = food1 / tip;
console.log(totalCost)

//////////





////////////////

//Area of Circle

var radius = 5

// var pi = 3.14159265359

var perimeter = 2 * Math.PI * radius;

var area = Math.PI * Math.pow(radius, 2)

console.log("Area: " + area)
console.log("Perimeter: " + perimeter)

////////////////////////////
//Rule of 72 Exercise

var numberInterest = 72;
var interestRate = .04;
var savingsAccount = 54000;

var accountDivide = savingsAccount * interestRate;

var years = numberInterest / accountDivide;

years = years.toFixed(2)

var divi = numberInterest / (interestRate * 100); 

console.log(divi);

var amounts = 0;
var principal = 50000;
var numberOfCompound = 12;
var timesInYears = years



console.log("At a " + (interestRate * 100) + "% interest rate" + " your savings account will be worth " + numberInterest +" in " + divi + " years")