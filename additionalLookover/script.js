"use strict"

const displayGreeting = document.getElementById("displayGreeting")
const personInput = document.getElementById("nameOfPerson")
const greeting = document.getElementById('greetings')

function greetThePerson(){
    let personField = String(personInput.value)

    displayGreeting.innerText = "Hello " + personField;
}