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




    
















generateBtn.addEventListener("click", generatePassword);

