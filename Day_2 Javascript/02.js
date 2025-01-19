// Function - function are the define a functions one time and called it on multiple times.
// declare

function greet(name){
    return "Hello"+name;
}

// function call
let msg = greet("manish")
console.log(msg);


// QNo1 Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a number and see what happens?

function sum(a,b){
    let totalsum = a+b;
    return totalsum


}

// ?function call
let messgae = sum("7"+10) //it will take as the string concateniation
console.log(messgae);


// qno2 Write a function called canVote that returns true or false if the age of a user
//  is > 18

function canvote(age) {
    if (age>18) {
        console.log("user can vote");
        
        
    }else{
        console.log("user cannot vote");
        
    }
    
}
 let vote = canvote("17")
 let vote1 = canvote("77")
 let vote2 = canvote("19")