// create a function that takes in a  string and outputs an object with a count of each letter from that input string.

function letterCount(string){
    var object = {};// store count for letters of input string.

    //loop thur each character in input string
    for(i=0;i<string.length;i++){
        //create a variable that gets each character in string -> string.atChar(i)
        //console.log(string.charAt(i));
        var character = string.charAt(i);

        // logic that decides weather the current character of input string exsist in result object. 
        if(object[character]){
            // if the letter has already been counted and we find another one add it to the total count.
            object[character]++; 
       
        }else{
            object[character] = 1;
            //if the letter has not been counted. add it to the object.
            //object = {character:1}
        }
        
    }
    return object;
}

console.log(letterCount('testing'));