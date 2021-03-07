// Assignment Code
var passwordText = document.getElementById("password");
var generateBtn = document.querySelector("#generate");
var LowerOptions = 'abcdefghijklmnopqrstuvwxyz';
var UpperOptions = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var NumberOptions = '0123456789';
var SpecialCharOptions = '!"#$%&()*+,-./:;<=>?@[\]_{|}~';



function generatePassword() {
    // prompt user to select number between 8-128. if they do not choose a number in that range, then call the function again. make sure to store answer length. Return length.
    var length = prompt("Select number between 8-128")
    if (length < 8 || length > 128) {
        alert("Your password needs to be 8-128 characters")
        return;
    }
    if (isNaN(length) === true) {
        alert('incorrect number try again')
        // return generatePassword();

    }
    // prompt user with series of confirm for specific characters
    var confirmLowerOptions = confirm("Click OK if you want lowercase letters in your password")
    var confirmUpperOptions = confirm("Click OK if you want uppercase letters in your password")
    var confirmNumberOptions = confirm("Click OK if you want a number in your password")
    var confirmSpecialCharOptions = confirm("Click OK if you want special characters in your password")

    while (confirmLowerOptions === false && confirmUpperOptions === false && confirmNumberOptions === false && confirmSpecialCharOptions === false) {
        alert("You must choose one parameter");
        var confirmLowerOptions = confirm("Click OK if you want lowercase letters in your password");
        var confirmUpperOptions = confirm("Click OK if you want uppercase letters in your password");
        var confirmNumberOptions = confirm("Click OK if you want a number in your password");
        var confirmSpecialCharOptions = confirm("Click OK if you want special characters in your password");

    }






getRandomPassword(confirmLowerOptions, confirmUpperOptions, confirmNumberOptions, confirmSpecialCharOptions, length);

}; 

function getRandomPassword(lower, upper, number, special, length) {
    var chosenCharacters = "";
    if(lower === true) {
        chosenCharacters = chosenCharacters + LowerOptions;
    }

    if(upper === true) {
        chosenCharacters = chosenCharacters + UpperOptions;
    }
    
    if(number === true) {
        chosenCharacters = chosenCharacters + NumberOptions;
    }

    if(special === true) {
        chosenCharacters = chosenCharacters + SpecialCharOptions;
    }
    console.log(chosenCharacters)
var password = "";
    for( var i = 0; i < length; i++) {
        var random = chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)];
        password =  random + password;
    }
    passwordText.textContent = password;
};


generateBtn.addEventListener("click", generatePassword);
