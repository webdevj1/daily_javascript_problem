//'reverse a string not using a for loop'

function revString(string){
    return string.split('').reverse().join('');
    // 1) string.split('')  = [ 'j', 'a', 'm', 'e', 's' ]   (split each letter of string into array)
    // 2) .reverse()        = [ 's', 'e', 'm', 'a', 'j' ]   (.reverse() method)
    // 3) .join('')           = semaj                       (join array into string with out commas)
}

revString('james'); // 'semaj'