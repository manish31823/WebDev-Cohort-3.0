// Complex types of object
// Objects- it is an key value pairs key-string and value-can be datatype,incluing object

// creating an obect of myself
let obj ={
    Name : "Manish Chaudhary",
    age : 25,
    add : "xyvvv colony"

}
console.log("Manish age is "  +  obj.age)
// console.log(obj.age)

// // Q1 Write a function that takes a user as an input and greets them with their name and age.

function greet(username){
    return username + " Manish,  your age 19"
}
const hello = greet("Good morning")
console.log(hello);

// Q2 Write a function that takes a new object as input which has name , age  and gender  
//and  greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greet(username) {
    console.log("Hi Mr. " + username.name + " your age is " + username.age)
    
    
}
let username ={
    name : "manish",
    age : 25,
    gender : "male"
};
greet(username)
console.log(username);
// Also tell the user if they are legal to vote or not.
function isvoter(user){
    for (let i = 0; i < user.length; i++) {
        if (user.age>=18) {
            console.log("he can vote");
            
            
        }
        else{
            console.log("he can't give vote");
            
        }
    }

}
isvoter(user)


    

