// An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.

export const isArmstrongNumber = (number) => {
    // convert input number to a string array, then convert each string item back to a number
    let numbers =  Array.from(String(number), Number);
    let total= [];

    for (let i = 0; i < numbers.length; i++) {
        // raise each number in numbers to the power of the total count of numbers
        total.push(Math.pow(numbers[i], numbers.length));
    }
    // Get sum of numbers
    var sum = total.reduce(function(a, b){
        return a + b;
    }, 0);

    if (sum === number ) {
        return true;
    }

    return false;

};
