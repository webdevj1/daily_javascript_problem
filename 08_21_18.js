/*
08_21_18: Take a array and a number as an input and return the array rotated the number of times given.
*/

function row2(array, num){
    var count = 1;
  
    for(i=num; i>0; i--){
      var poppedIndex = array.pop();
      console.log(`rotation ${count} = "${poppedIndex}"` )
      array.unshift(poppedIndex);
      count++;
    }
    return array;
  }
  
  row2([1,2,3,4],2); // => [ 3, 4, 1, 2 ] 