


var SCharacterArray = ["!", "#", "$", "'", "%", "&", '"', "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "\""]
var NCharacterArray = ["1","2","3","4","5","6","7","8","9","0"];
var LcharacterArray = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var UCharcaterArray = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
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