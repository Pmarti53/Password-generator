// Assignment Code
var passwordText = document.getElementById("password");
var generateBtn = document.querySelector("#generate");
var length;
var LowerOptions = ['abcdefghijklmnopqrstuvwxyz'];
var UpperOptions = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var NumberOptions = ['0123456789'];
var SpecialCharOptions = ['!"#$%&()*+,-./:;<=>?@[\]_{|}~'];

var confirmLength = "";
var confirmLowerOptions;
var confirmUpperOptions;
var confirmNumberOptions;
var confrimSpecialCharOptions;

//TODO declare your function

function generatePassword() {
    // prompt user to select number between 8-128. if they do not choose a number in that range, then call the function again. make sure to store answer length. Return length.
    var length = prompt("Select number between 8-128")
    if (length < 8 || length > 128) {
        alert("Your password needs to be 8-128 characters")
        return;
    }
    if (isNaN(length) === true) {
        alert('incorrect number try again')
        return;

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

    var passwordCharacters = []

    while (passwordCharacters.length < length) {

        if (confirmLowerOptions) {
            passwordCharacters = passwordCharacters.concat(getRandomLower())
        }

        if (confirmUpperOptions) {
            passwordCharacters = passwordCharacters.concat(getRandomUpper())
        }

        if (confirmNumberOptions) {
            passwordCharacters = passwordCharacters.concat(getRandomNumber())
        }

        if (confirmSpecialCharOptions) {
            passwordCharacters = passwordCharacters.concat(getRandomChar())
        }
        if (passwordCharacters.length > length) {
            passwordCharacters.slice(0).length;
        }
    }
    console.log(passwordCharacters)

};


















generateBtn.addEventListener("click", generatePassword);
