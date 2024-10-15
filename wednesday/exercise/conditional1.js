"use strict"
 var payRate = 17.30;
 var overtimeMultiplier = 1.5;
 var hours = 45;
 var regularHours = 40;
var grossPay = 0;
grossPay = payRate * hours;
var overtimePayRate = payRate * overtimeMultiplier;



if(hours > regularHours){
    var overtimeHours = hours - regularHours;
grossPay = (payRate * regularHours) + (overtimePayRate * overtimeHours);
console.log(grossPay.toFixed(2))
}else{
    console.log("No overtime dude")
}

