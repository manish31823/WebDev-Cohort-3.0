const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
console.log(contents);


const contents2 = fs.readFileSync("b.txt", "utf-8");
console.log(contents2);

// CPU bound tasks 
// CPU-bound tasks are operations that are limited by the speed and power of the CPU. These tasks require significant computation and processing power, meaning that the performance bottleneck is the CPU itself.
let ans = 0;
for (let i = 1; i <= 1000000; i++) {
	ans = ans + i
}
console.log(ans);

// I/O bound tasks
// I/O-bound tasks are operations that are limited by the system’s input/output capabilities, such as disk I/O, 
// network I/O, or any other form of data transfer. These tasks spend most of their time waiting for I/O operations to complete.

const fs = require("fs");

const contents1 = fs.readFileSync("a.txt", "utf-8");
console.log(contents1);


// Functional arguments

function sum(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function doOperation(a, b, op) {
    return op(a, b)
  }
  
  console.log(doOperation(1, 2, sum))