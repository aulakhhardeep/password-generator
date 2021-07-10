// Assignment Code

// Write password to the #password input
var pwLength = function() {
	lengthValue = prompt("Please choose Password Length Between 8 - 128");
	// prompt cannot be empty, cannot be less than 8, cannot be more than 128 and cannot contain text
	while (lengthValue === "" || parseInt(lengthValue) < 8 || parseInt(lengthValue) > 128 || isNaN(parseInt(lengthValue))) {
		lengthValue = prompt("Password Length must be Between 8 - 128");
	}
	console.log("Password length: " + lengthValue);
	return lengthValue;
}

function generatePassword() {
  
  passwordCharacters = "";
  newPassword = "";
	var passwordLength = pwLength(); // Length of Password Requested
	var lowerCase = window.confirm("Do you want to add Lowercase Letters?"); 
	var upperCase = window.confirm("Do you want to add Uppercase Letters?"); 
	var numbers = window.confirm("Do you want to add Numbers?"); 
  var specialChar = window.confirm("Do you want to add Special Characters?");

  if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
    window.alert("Please select at least one password criteria.");
    generatePassword();
  }
  else { 
    if (lowerCase) { //checks if the password requirement is lowerCase and generate a password with lowercase characters
      passwordCharacters = "abcdefghijklmnopqrstuvwxyz";
    }
    if (upperCase) { //checks if the password requirement is uperCase and generate a password with uppercase characters
      passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbers) {//checks if the password requirement is number and generate a password with numbers
      passwordCharacters += "0123456789";
    }
    if (specialChar) {//checks if the password requirement is specialChar and generate a password with special characters
      passwordCharacters += " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }
        
  }
}





var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
