// Normal functions in JS
// Wap sum of two numbers(SYncrohonus)

function sum(a,b){
    return parseInt(a)+parseInt(b)

}
// Called FUnction
const results = sum("22",65)// if want to adir the string concatinate two ways to do
console.log(results); //1.Typescript 2.parseInt to a number


// q2.Find sum from 1 to a number

function sum(n){
    let ans = 0
    for(i=0; i<=n; i++){
        ans=ans+i
    }
    return ans

}

const answer=sum(100)
console.log(answer);


