//'reverse a string not using a for loop'

function revString(string){
    return string.split("").reverse().join('');
    // 1) string.split("")  = [ 'j', 'a', 'm', 'e', 's' ]
    // 2) .reverse()        = [ 's', 'e', 'm', 'a', 'j' ]
    // 3) .join()           = semaj
}

revString('james');