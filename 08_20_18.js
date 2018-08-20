/*
Take a string as an input and return the string with the letters in alphabetical order
*/



function sortLetters(string){
    return string.split('').sort().join('');
        // 1) use .split('') to go from string to array
        // 2) .sort() the letters in array
        // 3) .join('') to go from array back to string

}

sortLetters('monday');