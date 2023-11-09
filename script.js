// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()";

function generatePassword() {
  var password = "";
  
  var passwordLength = prompt("Password must be between 8 and 128 characters");
  
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Choose a number between 8 and 128");
    return generatePassword();
  }
  
  var useUpperCase = confirm("Include uppercase letters?");
  var useLowerCase = confirm("Include lowercase letters?");
  var useNumbers = confirm("Include numbers?");
  var useSpecialCharacters = confirm("Include special characters?");
  
  if (!(useUpperCase || useLowerCase || useNumbers || useSpecialCharacters)) {
    alert("Pick a character type");
    return generatePassword();
  }
  
  var characterSets = [];

  if (useUpperCase) characterSets.push(upperCase);
  if (useLowerCase) characterSets.push(lowerCase);
  if (useNumbers) characterSets.push(numbers);
  if (useSpecialCharacters) characterSets.push(specialCharacters);
  
  var combinedCharacters = characterSets.join('');
  
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * combinedCharacters.length);
    password += combinedCharacters.charAt(randomIndex);
  }
  
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);