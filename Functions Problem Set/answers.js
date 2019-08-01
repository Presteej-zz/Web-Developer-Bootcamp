// isEven()
// Write a function that takes a single numeric argument. 
// Function returns true if the number is even. 
// Function returns false if otherwise. 

function isEven(num) {

    return num % 2 === 0
        
}

// factorial()
// Write a function that takes a single numeric argument. 
// Return the factorial of the number.
// e.g. factorial(4) would return 4 x 3 x 2 x 1

function factorial (num) {

    var result = 1;

    for (var i = 2; i<= num; i++){
        result *= i;
    }

    return result;
}


//kebabToSnake()
// Write a function that takes a single kebab-cased string argument.
// Funtion returns the snake-cased verson of the string. 
// Function does this by replacing the "-"s with "_"s.

function kebabToSnake (str) {
    
    var newStr = str.replace(/-/g , "_");
    return newStr;
}