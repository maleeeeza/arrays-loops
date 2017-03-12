function fizzBuzz(countTo) {
  //create an empty array
  //for each element counted up to in the array, determine if
  //divisible by 3&5, if yes, convert element to fizzbuzz
  //diviisble by only 3, convert element to fizz
  //divisible by only 5, convert element to buzz
  //if none of the above scenarios match, keep number

  var array = [];
  for(i=1; i<=countTo;i++){
    if (i%5===0 && i%3===0){
      array.push('fizzbuzz'); 
    }
    
    else if (i%3===0){
      array.push('fizz');
    }
    
    else if (i%5===0){
      array.push('buzz');
    }
    
    else {
      array.push(i);
    }
  }
  
  return array;
  

}




/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/



// tests
(function testFizzBuzz() {
  // we'll use the variables in our test cases
  var countTo = 16;
  var expected = [
    1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz',
    'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16
  ];

  var actual = fizzBuzz(countTo) || [];
  
  if (
    expected.length === actual.length &&
    expected.every(function(item, index) {
      return actual[index] === item;}) ) {
    
      console.log('SUCCESS: fizzBuzz is working');
  }
  else {
    console.log('FAILURE: fizzBuzz is not working');
  }  
})();