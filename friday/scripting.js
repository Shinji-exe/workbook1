

const greet = document.getElementById("greet")
const nameInput = document.getElementById("nameInput")
const namePlacement = document.getElementById("namePlacement")

greet.innerText = "Hello"

function showName(){
    let name = nameInput.value;
    namePlacement.innerText = "Hello " +  name
}