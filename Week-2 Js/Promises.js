
// // settimeout

// // function fname(){
// //     console.log("manish Chaudhary");
    
// // }
// // setTimeout(fname,5000)

// // Promise is js that reprsent that the eventual completion or the failure
// // it has two version
// // 1.Callback base approach   setTimeout(callback,3000)
// // 2.promisified base approach setTimeoutpromsified(3000).then(callback,3000)



// // Using a function that returns a promise

// function setTimeoutpromsified(ms){
//     return new Promise(resolve=>setTimeout(resolve, ms)) 
        
//     }
//     function callback(){
//         console.log("5 second passed")
//     }
//     setTimeoutpromsified(3000).then(callback)


// Simple understanding of promises in js


// function random(){
    
// }
// let p = new Promise(random);
// console.log(p)



// Q Create a promisifed version of fs.readfile, fs.writefile ,fs.cleanfile