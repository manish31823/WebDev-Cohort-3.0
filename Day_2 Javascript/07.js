// Array - Grouping of the data togther known as array.
// define
let num = [1,56,85,88]
console.log(num);
console.log(typeof(num));

// Write a function that takes an array of numbers as input, and returns a new array with 
// only even values. Read about filter in JS


function getevennumber(arr) {
    return arr.filter(num => num % 2 === 0)
    
}
const numbers = [22,444,78,95,63]
const evennumber = getevennumber(numbers)
console.log(evennumber);



