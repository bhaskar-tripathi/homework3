function genPwd() {
    var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var numChars = "0123456789";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var pwdLen = null;
    var pwdCharType = null;
    var pwdCharTypesSel = [];

    while (1 == 1) {
        pwdLen = prompt("Please specify the length (must be between 8 and 128 characters)", "8");

        if (pwdLen != null) {
            if (pwdLen.includes(".") == true || isNaN(pwdLen) == true) {
                alert("Please enter only a number between 8 and 128 without decimal");
            }
            else {
                pwdLen = parseInt(pwdLen);
                break;
            }
        }
        else {
            break;
        }
    }

    if (pwdLen != null) {
        userPrompt("Do you want to use special characters", pwdCharTypesSel, "s");
        userPrompt("Do you want to use Numeric characters", pwdCharTypesSel, "n");
        userPrompt("Do you want to use lowercase characters", pwdCharTypesSel, "l");
        userPrompt("Do you want to use uppercase characters", pwdCharTypesSel, "u");
    }

    if (pwdCharTypesSel.length !== 0){

    
    var randNum = 0;
    var password = null;
    var charSet = null;
    var charTypesToUse = pwdCharTypesSel.slice();  // charTypesToUse will be depleting list. pwdCharTypesSel will be used to randomly select char type

    for (var i = pwdLen; i > 0; i--) {

        // check if the remaining char types to use are less than the password chars left.
        // If less chars left, use the remaining char types sequentially without using random number selection.
        // Otherwise, use random number method
        if (charTypesToUse.length >= i) {
            if (charTypesToUse[0] == "s") charSet = specialChars;
            else if (charTypesToUse[0] == "n") charSet = numChars;
            else if (charTypesToUse[0] == "l") charSet = lowerChars;
            else charSet = upperChars;
            //console.log("Sequece : " + charTypesToUse[0]);
        }
        else {
            // generate random number to select which char type to use
            randNum = Math.floor(Math.random() * (pwdCharTypesSel.length));

            // get the selected char set
            if (pwdCharTypesSel[randNum] == "s") charSet = specialChars;
            else if (pwdCharTypesSel[randNum] == "n") charSet = numChars;
            else if (pwdCharTypesSel[randNum] == "l") charSet = lowerChars;
            else charSet = upperChars;

            // remove the chat type from "charTypeToUse"
            charTypesToUse.pop(pwdCharTypesSel[randNum]);

            //console.log(randNum);
            //console.log("Random : " + pwdCharTypesSel[randNum]);

        };

        randNum = 0; // Initialize the random number variable

        // generate random number to select a particular char of selected char type
        randNum = Math.floor(Math.random() * (charSet.length));

        // get the select char and concatenate with the already selected chars for password
        if (password == null) password = charSet[randNum];
        else password = password + charSet[randNum];

    }
};
    // Update the password in the text area
    if (password != null || password !== "") {
        document.querySelector("#password").textContent = password;
    } 
};


function copyPwd() {
    window.navigator.clipboard.writeText(document.querySelector("#password").textContent).then(function() {
        console.log("clipboard write Successful")
      }, function() {
        console.log("clipboard write failed")
      });

};

function userPrompt(promptText, selections, charType) {
    while (1 == 1) {
        var userInput = prompt(promptText);

        if (userInput != null) {
            if (userInput.toLowerCase() === "yes" || userInput.toLowerCase() === "y") {
                //pwdCharTypesSel[0] = true;
                selections.push(charType);
                break;
            }
            else if (userInput.toLowerCase() === "no" || userInput.toLowerCase() === "n") {
                break;
            }
            else {
                prompt("Please enter valid input (Yes or No)")
            };
        }
        else {
            break;
        }
    }
}
