"use strict";

// Wait until the DOM is fully loaded
// window.onload = init;

// function init(){

const principle = document.getElementById("payRateInput");
const monthlyInterestRate = document.getElementById("interestRateInput");
const numberOFMonth = document.getElementById("monthInput");
const calculation = document.getElementById("calculate");
const mortgageDiv = document.getElementById("mortgageAmount");

const numberAndSigns = document.getElementById("numberAndSigns");

/////////////////

function mortgage() {
  let payFieldValue = parseFloat(principle.value);
  let interestFieldValue = parseFloat(monthlyInterestRate.value);
  let monthFieldValue = parseInt(numberOFMonth.value);
  
 
   

  mortgageDiv.innerText = "Please enter your savings, loan and durations";

  if (isNaN(payFieldValue) || isNaN(interestFieldValue) || isNaN(monthFieldValue)) {
    mortgageDiv.innerText = "Please input a valid number";
  } else {
    let monthsRate = interestFieldValue / 100 / 12;
    let mortgageRating = (payFieldValue * monthsRate) / (1 - Math.pow(1 + monthsRate, -monthFieldValue));

    let total = 0.00
    for(let i = 0; i < monthFieldValue; i++){
        let sum = payFieldValue * monthsRate;
        total += sum;
        let paymentPrincipal = mortgageRating - sum;
        payFieldValue - paymentPrincipal
       }


    //    let ratings = payFieldValue + interestFieldValue + monthFieldValue

    mortgageDiv.innerText = "Your monthly payment will be: $" + mortgageRating.toFixed(2) + "Total interest paid $ " + total.toFixed(2);
  }
}

function fvc(){
    const amountInput = document.getElementById('amountInput')
    const rateInput = document.getElementById('rateInput')
    const periodInput = document.getElementById('periodInput')
    const futureValueDisplay = document.getElementById("futureValueDisplay")



    let presentValueInputField = Number(amountInput.value)
     let rateInputField = Number(rateInput.value)
      let yearlyPeriodInputField = Number(periodInput.value)

      //                           yearly/annual
      let convert = rateInputField / 100 / 1;

      if(isNaN(presentValueInputField) || isNaN(rateInputField) || isNaN(yearlyPeriodInputField)){
       futureValueDisplay.innerText = "Please input your numbers in all three inputs!"
      }else{

    //   let futureTotalValue =  presentValueInputField * Math.pow((1 +  convert), yearlyPeriodInputField);
//      FV:Future Value  =      PV               times
    let futureTotalValue =  presentValueInputField * (1 +  convert)**yearlyPeriodInputField;

      let totalInterest = 0.00;
      for(let i = 0; i < yearlyPeriodInputField; i++){
          let sum = presentValueInputField * periodInput;
          totalInterest = totalInterest += sum;
          let paymentPrincipal = futureTotalValue + sum;
          presentValueInputField + paymentPrincipal;
      }

      futureValueDisplay.innerText = futureTotalValue.toFixed(2) + totalInterest.toFixed(2);
      }
}

function fvMonthly(){
    const amountInput = document.getElementById('amountInput')
    const rateInput = document.getElementById('rateInput')
    const periodInput = document.getElementById('periodInput')
    const futureValueDisplay = document.getElementById("futureValueDisplay")



    let presentValueInputField = Number(amountInput.value)
     let rateInputField = Number(rateInput.value)
      let yearlyPeriodInputField = Number(periodInput.value)

      //                           yearly/annual
      let convert = rateInputField / 100 / 12;

      if(isNaN(presentValueInputField) || isNaN(rateInputField) || isNaN(yearlyPeriodInputField)){
       futureValueDisplay.innerText = "Please input your numbers in all three inputs!"
      }else{

    //   let futureTotalValue =  presentValueInputField * Math.pow((1 +  convert), yearlyPeriodInputField);
//      FV:Future Value  =      PV               times
    let futureTotalValue =  presentValueInputField * (1 +  convert)**yearlyPeriodInputField;

      let totalInterest = 0.00;
      for(let i = 0; i < yearlyPeriodInputField; i++){
          let sum = presentValueInputField * periodInput;
          totalInterest = totalInterest += sum;
          let paymentPrincipal = futureTotalValue + sum;
          presentValueInputField + paymentPrincipal;
      }

      futureValueDisplay.innerText = futureTotalValue.toFixed(2) + totalInterest.toFixed(2);
      }
}

function fvDaily(){
    const amountInput = document.getElementById('amountInput')
    const rateInput = document.getElementById('rateInput')
    const periodInput = document.getElementById('periodInput')
    const futureValueDisplay = document.getElementById("futureValueDisplay")



    let presentValueInputField = Number(amountInput.value)
     let rateInputField = Number(rateInput.value)
      let yearlyPeriodInputField = Number(periodInput.value)

      //                           yearly/annual
      let convert = rateInputField / 100 / 365;

      if(isNaN(presentValueInputField) || isNaN(rateInputField) || isNaN(yearlyPeriodInputField)){
       futureValueDisplay.innerText = "Please input your numbers in all three inputs!"
      }else{

    //   let futureTotalValue =  presentValueInputField * Math.pow((1 +  convert), yearlyPeriodInputField);
//      FV:Future Value  =      PV               times
    let futureTotalValue =  presentValueInputField * (1 +  convert)**yearlyPeriodInputField;

      let totalInterest = 0.00;
      for(let i = 0; i < yearlyPeriodInputField; i++){
          let sum = presentValueInputField * periodInput;
          totalInterest = totalInterest += sum;
          let paymentPrincipal = futureTotalValue + sum;
          presentValueInputField + paymentPrincipal;
      }

      futureValueDisplay.innerText = futureTotalValue.toFixed(2) + totalInterest.toFixed(2);
      }
}