const passwordBox = document.getElementById("input-id");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "qwertyuioplkjhgfdsazxcvbnm";
const number = '123456789';
const symbol = '@$*/.';

const allChars = upperCase + lowerCase + number + symbol ;

function createPassword (){
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function Copytext(){
    const text = document.querySelector("#input-id");
    text.select();
    navigator.clipboard.writeText(text.value);
    alert("Password Copy Sucessfully")
}


