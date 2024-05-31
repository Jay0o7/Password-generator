const passLength = document.getElementById("length-display");
const lowerCase = document.getElementById("Lowercase");
const upperCase = document.getElementById("Uppercase");
const numbers = document.getElementById("Numbers");
const symbols = document.getElementById("Symbols");
const result = document.getElementById("result");

function generator(){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+";
    
    let password = "";
    let passwordChars = "";
    
    if (lowerCase.checked){
        passwordChars += lowercaseChars;
    }
    if (upperCase.checked){
        passwordChars += uppercasseChars;
    }
    if (numbers.checked){
        passwordChars += numberChars;
    }
    if (symbols.checked){
        passwordChars += symbolChars;
    }
    else{
        passwordChars += "";
    }
    
    for(let i = 0 ; i < passLength.value ; i++){
        const random = Math.floor(Math.random() * passwordChars.length);
        password += passwordChars[random];
    }
    result.textContent = password;
}
