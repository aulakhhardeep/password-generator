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
	var passwordLength = pwLength(); // Length of Password Requestd
	var lowerCase = window.confirm("Do you want to add Lowercase Letters?"); // Use Lowercase Letters?
	var upperCase = window.confirm("Do you want to add Uppercase Letters?"); // Use Uppercase Letters?
	var numbers = window.confirm("Do you want to add Numbers?"); // Use Numbers?
  var specialChar = window.confirm("Do you want to add Special Characters?"); // Use Special Characters? 

  if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
    window.alert("Please select at least one password criteria.");
    generatePassword();
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
