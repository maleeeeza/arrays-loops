function max(numbers) {
//starting with the first number in the array as max,
//check to see if the number to the right is larger.
//if not, check the following number
//If the number is larger,
//set the new larger number as the max and loop
//until there are no more numbers in the array

  var maximum = numbers[0];
  for(var i=0; i<=numbers.length; i++){
    if (numbers[i] > maximum) {
       maximum = numbers[i];
  }
  
}

return maximum;
}


function min(numbers) {

  var minimum = numbers[0];
  for(var i=0; i<=numbers.length; i++){
    if (numbers[i] < minimum) {
       minimum = numbers[i];
  }
  
}

return minimum;
}



/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/


// tests

function testFunctionWorks(fn, input, expected) {
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  }
  else {
    console.log(
      'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input)
    );
    return false;
  }
}


(function runTests() {
  // we'll use the variables in our test cases
  var numList1 = [-5, 28, 98, -20013, 0.7878, 22, 115];
  var realMin1 = numList1[3];
  var realMax1 = numList1[6];
  var numList2 = [0, 1, 2, 3, 4];
  var realMin2 = numList2[0];
  var realMax2 = numList2[4];
  
  var testResults = [
    testFunctionWorks(max, numList1, realMax1),
    testFunctionWorks(max, numList2, realMax2),
    testFunctionWorks(min, numList1, realMin1),
    testFunctionWorks(min, numList2, realMin2),
  ];
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
})();
