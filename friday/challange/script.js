const numberOneInput = document.getElementById("numberOneInput")
const numberTwoInput = document.getElementById("numberTwoInput")
const display = document.getElementById("display")

function add(){
let numberOneField = Number(numberOneInput.value);
let numberTwoField = Number(numberTwoInput.value);

let total = numberOneField + numberTwoField;

display.value = "added: " + total
}

function subtract(){
    let numberOneField = Number(numberOneInput.value);
let numberTwoField = Number(numberTwoInput.value);

let total = numberOneField - numberTwoField;

display.innerText = "added: " + total
}

function multiply(){
    let numberOneField = Number(numberOneInput.value);
let numberTwoField = Number(numberTwoInput.value);

let total = numberOneField * numberTwoField;

display.innerText = "added: " + total
}

function divide(){
    let numberOneField = parseFloat(numberOneInput.value);
let numberTwoField = parseFloat(numberTwoInput.value);

let total = numberOneField / numberTwoField;

display.innerText = "added: " + total.toFixed(2)
}

const history = []

