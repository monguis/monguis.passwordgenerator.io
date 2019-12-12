


var SpeCharArray = ["!", "#", "$", "'", "%", "&", '"', "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "\""]
var NumCharArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var LowCharArray = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var UprCharArray = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
var passwordLength = 0;
var generatedpassword = "";


passgen();

function passgen() {
    passwordLength = 0;
    generatedpassword = "";
    var count = 0;
    passwordLength = prompt("How many characters do you want your password to have? (8-128 characters allowed)");

    var auxarray = [];

    if ((passwordLength >= 8) && (passwordLength < 129)) {
        if (confirm("would you like to have Special Characters")) {
            auxarray.push(1)
        }
        if (confirm("would you like to have Numeric Characters")) {
            auxarray.push(2)
        }
        if (confirm("would you like to have Lowercase Characters")) {
            auxarray.push(3)
        }
        if (confirm("would you like to have Uppercase Characters")) {
            auxarray.push(4)
        }
        if (auxarray.length !== 0) {
            console.log("llegue al if")
            for (var i = 0; i < passwordLength; i++) {
                switch (auxarray[Math.floor(auxarray.length * Math.random())]) {
                    case 1:
                        console.log(generatedpassword += SpeCharArray[Math.floor(SpeCharArray.length * Math.random())])
                        break;
                    case 2:
                        console.log(generatedpassword += NumCharArray[Math.floor(NumCharArray.length * Math.random())])
                        break;
                    case 3:
                        console.log(generatedpassword += LowCharArray[Math.floor(LowCharArray.length * Math.random())])
                        break;
                    case 4:
                        console.log(generatedpassword += UprCharArray[Math.floor(UprCharArray.length * Math.random())])
                        break;
                }

            }
            console.log(generatedpassword);

        } else {
            alert("We can't build this password");
        }
    } else {
        alert("Please use a valid number")
    }
}