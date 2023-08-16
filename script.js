//Generating a Password
const passwordBox = document.getElementById("password");
const lenght = 12;

const upperCase = "ABCDEFGHIKLMNOPQRSTVXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+><?}{";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(lenght > password.length){
        password += allChars[Math.floor(Math.random() * symbol.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

//Checking Password
var pass = document.getElementById("passw");
var msg = document.getElementById("message");
var str = document.getElementById("strenght");

pass.addEventListener('input', () => {
    if(pass.value.length > 0){
        msg.style.display = "block"
    }
    else{
        msg.style.display = "none"
    }

    if(pass.value.length < 4){
        str.innerHTML = "weak";
    }
    else if(pass.value.length >= 4 && pass.value.length < 8){
        str.innerHTML = "medium";
    }
    else if(pass.value.length >= 8){
        str.innerHTML = "strong";
    }
})
