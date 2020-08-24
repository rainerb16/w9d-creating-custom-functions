// FUNCTION 1 //
function addMultiply(numberOne, numberTwo) {
    var answer = (numberOne + numberTwo) * 5;
    return answer;
}

//Uncomment to test
var finalAnswer = addMultiply(10, 10);
//var finalAnswer = addMultiply(5, 10);
//var finalAnswer = addMultiply(20, 10);

console.log(finalAnswer);




// FUNCTION 2 //
function checkLength(userString) {
    if (userInput.length > 10) {
        return true;
    } else if (userInput.length <= 10) {
        return false;
    } else {
        console.log("Something went wrong...");
    }
}

// Uncomment to test 
var userInput = "This is an example sentence";
//var userInput = "Hi!";
//var userInput = "This is 10";

var stringToCheck = checkLength(userInput);
console.log(stringToCheck); 




// FUNCTION 3 //
function lettersIdentifier(stringExample) {
    for(var i = 0; i < stringExample.length; i++) {
        if (stringExample[i].startsWith("ph"))
            return stringExample[i];
    }
    console.log("These words don't start with a ph");
}

// Uncomment to test
//var stringInput = ["Hello", "Bugs", "Tom", "Cats", "phone"];
//var stringInput = ["Tom", "Phil", "Chris", "nancy", "pheobe"];
var stringInput = ["Opera", "singer", "Theater", "dapper", "hero"];

var stringResult = lettersIdentifier(stringInput);
console.log(stringResult);


