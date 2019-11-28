function genPwd() {
    var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var numChars = "0123456789";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var pwdLen = null;
    var pwdCharType1 = null;
    var pwdCharUsageSwitch = [false, false, false, false];
    var yesNoCheck = ["yes", "y", "no", "n"]

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

    while (1 == 1) {
        pwdCharType1 = prompt("Do you want to use special characters");

        if (pwdCharType1 != null) {
            if (yesNoCheck.indexOf(pwdCharType1.toLowerCase()) < 0) prompt("Please enter valid input (Yes or No)");
            else if (pwdCharType1.toLowerCase() === "yes" || pwdCharType1.toLowerCase() === "y") {
                pwdCharUsageSwitch[0] = true;
                break;
            }
        }
        else {
            break;
        }
    }

    while (1 == 1) {
        pwdCharType1 = prompt("Do you want to use Numeric characters");

        if (pwdCharType1 != null) {
            if (yesNoCheck.indexOf(pwdCharType1.toLowerCase()) < 0) prompt("Please enter valid input (Yes or No)");
            else if (pwdCharType1.toLowerCase() === "yes" || pwdCharType1.toLowerCase() === "y") {
                pwdCharUsageSwitch[1] = true;
                break;
            }
        }
        else {
            break;
        }
    }

    while (1 == 1) {
        pwdCharType1 = prompt("Do you want to use lowercase characters");

        if (pwdCharType1 != null) {
            if (yesNoCheck.indexOf(pwdCharType1.toLowerCase()) < 0) prompt("Please enter valid input (Yes or No)");
            else if (pwdCharType1.toLowerCase() === "yes" || pwdCharType1.toLowerCase() === "y") {
                pwdCharUsageSwitch[2] = true;
                break;
            }
        }
        else {
            break;
        }
    }

    while (1 == 1) {
        pwdCharType1 = prompt("Do you want to use uppercase characters");

        if (pwdCharType1 != null) {
            if (yesNoCheck.indexOf(pwdCharType1.toLowerCase()) < 0) prompt("Please enter valid input (Yes or No)");
            else if (pwdCharType1.toLowerCase() === "yes" || pwdCharType1.toLowerCase() === "y") {
                pwdCharUsageSwitch[3] = true;
                break;
            }
        }
        else {
            break;
        }
    }



    console.log(pwdLen);
    console.log(pwdCharUsageSwitch);

};

function copyPwd() {

};

