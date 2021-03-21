// Assignment Code
let generateBtn = document.querySelector("#generate");
let passwordCharacters = [];
let specialChars = ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'.split('');
let lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
let upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let numericChars = '1234567890'.split('');
let newPassword = [];



// Write password to the #password input
function writePassword() {
    
    var passwordText = document.querySelector("#password");
    passwordText.value = '';
    
    
    let passwordLength = prompt('How long would you like the password to be? (Must be greater than 8 and less than 128');
    if(isNaN(passwordLength)){
        alert('Password must be a number');
        return;
    }
    if(passwordLength < 8)
    {
        alert('Password must be at least 8 characters long');
        return;
    }
    if(passwordLength > 128)
    {
        alert('Password length must be no longer than 128 characters');
        return;
    }
    if(confirm('Click OK to include numeric characters in your password'))
    {
       passwordCharacters.push(numericChars);
    }
    if(confirm('Click OK to include special characters in your password'))
    {
        passwordCharacters.push(specialChars);
    }
    if(confirm('Click OK to include upper case alphabetic characters'))
    {
        passwordCharacters.push(upperCaseChars);
    }
    if(confirm('Click OK to include lower case alphabetic characters'))
    {
        passwordCharacters.push(lowerCaseChars);
    }   
    if(passwordCharacters.length === 0)
    {
        alert('No characters were selected to be included in the password.');
        return;
    }
    for(let x = 0; x < passwordLength; x++)
    {
        let newCharacter = generateCharacter();
        newPassword.push(newCharacter);
    }


  passwordText.value = newPassword.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generateCharacter() {
   let firstIndex = getRandomIndex(passwordCharacters.length - 1);
   let characterSet = passwordCharacters[firstIndex];
   let secondIndex = getRandomIndex(characterSet.length - 1);
   return characterSet[secondIndex];
   
}
const getRandomIndex = (max) => {
    return Math.floor(Math.random() * (max + 1));
}









