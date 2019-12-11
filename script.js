


var SCharacterArray = ["!", "#", "$", "'", "%", "&", '"', "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "\""]
var passwordLength = 0;

passgen();

function passgen() {

    if (!((passwordLength >= 8) && (passwordLength < 129))) {
        passwordLength = prompt("How many characters do you want your password to have? (8-128 characters allowed)");
    }

    if (((passwordLength >= 8) && (passwordLength < 129))) {
        confirm("would you like to have Special Characters");
        confirm("would you like to have NumericCharacters");
        confirm("would you like to have Lowercase Characters");
        confirm("would you like to have Uppercase Characters");
    }else{
        alert("Please use a valid number")
    }
}