// printReverse()
// Write a function that takes an array as an argument
// Function prints out the elements of the array in reverse order.

function printReverse(array) {
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

// isUniform()
// Write a function that takes an array as an argument.
// Function returns "true" if all elements in the array are identical

function isUniform(array) {
  // The first item in the array
  var initial = array[0];

  for (var i = 0; i < array.length; i++) {
    if (array[i] !== initial) {
      return false;
    }
  }
  return true;
}

// sumArray()
// WRite a function that accepts an array of numbers.
// Function returns the sum of all numbers in the array.

function sumofArray(array) {
  var sum = 0;
  array.forEach(function(element) {
    sum += element;
  });
  return sum;
}

// max()
// Write a function that accepts an array of numbers. 
// Function returns the maximum number in the array. 

function max(array){
    var max = 0;
    for (var i = 0; i < array.length; i++){
        if (array[i] > max){
            max = array[i];
        }
    }
    return max;
}