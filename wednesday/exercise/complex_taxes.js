"use strict";

var payRate = 17.3;

var overtimeMultiplier = 1.5;
var hours = 45;
var regularHours = 40;
var grossPay = 0;
grossPay = payRate * hours;
var overtimePayRate = payRate * overtimeMultiplier;
var annualGrossPay = grossPay * 52;
var martialStatus = "single";
var taxhold = parseFloat((grossPay * 0.15).toFixed(2));
var netPay = grossPay - taxhold;

console.log("Annual pay " + annualGrossPay.toFixed(2));

if (hours > regularHours) {
  var overtimeHours = hours - regularHours;
  console.log(overtimeHours);
  grossPay = (payRate * regularHours) + (overtimePayRate * overtimeHours);
  console.log(grossPay.toFixed(2));
} else {
  grossPay;
  console.log("No overtime dude");
  grossPay = regularHours * payRate;
}

if (annualGrossPay < 12000) {
  //annualGrossPay * .05
  console.log((annualGrossPay * 0.05).toFixed(2));
} else if (annualGrossPay > 12000 && annualGrossPay < 24999.99) {
  //annualGrossPay * .10
  console.log((annualGrossPay * 0.1).toFixed(2));
} else if (annualGrossPay >= 25000 && annualGrossPay <= 74999.99) {
  //  var taxhold =  (grossPay * .15).toFixed(2)
  //     console.log(taxhold)
  // console.log((grossPay * .15).toFixed(2))
  console.log(
    `You worked ${hours} hours this period. Because you earned $${payRate.toFixed(
      2
    )} per hour, your gross pay is $${grossPay}. Your filing status is ${martialStatus} Your tax withholding is ${taxhold} and your net pay is ${netPay}`
  );
} else {
  // annualGrossPay * .20
  console.log((annualGrossPay * 0.2).toFixed(2));
}
