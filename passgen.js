var passLengthRange = document.querySelector("#passLengthRange");
var passLength = document.querySelector("#passLength");

var capitalLettersCheck = document.querySelector("#capitalLettersCheck");
var smallLetterCheck = document.querySelector("#smallLetterCheck");
var numbersCheck = document.querySelector("#numbersCheck");
var symbolsCheck = document.querySelector("#symbolsCheck");
var submitPass = document.querySelector("#submitPass");
var passBox = document.querySelector("#passBox");
var copyPass = document.querySelector("#copyPass");

passLengthRange.addEventListener("input", () => {
    passLength.innerHTML = passLengthRange.value;
});

function passwordGenerator(passwordLength) {
    let allCapitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let allSmallLetter = "abcdefghijklmnopqrstuvwxyz";
    let allNumbers = "1234567890";
    let allSymbols = "!@#$%^&*_-";
    let allChars = "";

    // we can use if else statement or we can use ternery operator

    if (capitalLettersCheck.checked) {
        allChars += allCapitalLetters;
    }
    if (smallLetterCheck.checked) {
        allChars += allSmallLetter;
    }
    if (numbersCheck.checked) {
        allChars += allNumbers;
    }

    // allChars = allChars + capitalLettersCheck.checked ? allCapitalLetters : "";
    // allChars += smallLetterCheck.checked ? allSmallLetter : "";
    // allChars += numbersCheck.checked ? allNumbers : "";
    allChars += symbolsCheck.checked ? allSymbols : "";

    let finalPassword = "";
    for (i = 0; i < passwordLength; i++) {
        var random = allChars.charAt(Math.floor(Math.random() * allChars.length));
        finalPassword = finalPassword + random;
    }

    passBox.value = finalPassword;
};

submitPass.addEventListener("click", () => {
    var passwordLength = passLengthRange.value;
    passwordGenerator(passwordLength);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        var passwordLength = passLengthRange.value;
        passwordGenerator(passwordLength);
    }
});

copyPass.addEventListener("click", () => {
    if (passBox.value != "" || passBox.value.length >= 1) {
        navigator.clipboard.writeText(passBox.value);
        copyPass.innerHTML = "check";
        copyPass.title = "Password Copied";

        var byTushar = document.querySelector("#byTushar");

        byTushar.innerHTML = "Password Copied!";


        setTimeout(() => {
            copyPass.innerHTML = "content_copy";
            copyPass.title = "";
            byTushar.innerHTML = "by Tushar";

        }, 500)
    } else {
        alert("Please generate a password before copying.")
    }
});











































// console.log("connected");


// var passLength = prompt("length of password");

// function passwordGenerator(passLength) {
//     var pass = [];

//     lowercase_alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//     var lowAlphabet = Math.floor(Math.random() * lowercase_alphabets.length);
//     for (i = 0; i < passLength; i++) {
//         var lowerAlpha = lowercase_alphabets[lowAlphabet];
//     }

//     uppercase_alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//     var upAlphabet = Math.floor(Math.random() * uppercase_alphabets.length);
//     var upperAlpha = uppercase_alphabets[upAlphabet];


//     special_symbols = ['!', '@', '#', '$', '%', '&', '?'];
//     var symb = Math.floor(Math.random() * special_symbols.length);
//     var symbol = special_symbols[symb];

//     var numbers = Math.floor((Math.random() * 10));

//     console.log(lowerAlpha);
//     console.log(upperAlpha);
//     console.log(symbol);
//     console.log(numbers);

//     var mixPass = [lowerAlpha, upperAlpha, symbol, numbers];

//     var symbolPassword = [];

//     for (i = 0; i < passLength; i++) {
//         var rand = Math.floor((Math.random() * mixPass.length));
//         symbolPassword.push(mixPass[rand]);
//     }

//     console.log(symbolPassword);
//     console.log(symbolPassword.join(''));
// }

// passwordGenerator(passLength);

// function copyPassword() {
//     var copyText = document.getElementById("password");
//     copyText.select();
//     document.execCommand("copy");  
//   }