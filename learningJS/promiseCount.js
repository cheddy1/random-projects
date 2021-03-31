/*
Write a JavaScript function called timings that uses Promises to take an array of times, and then print the numbers after that number of seconds. 
The timings function should return a Promise that resolves after the final print.
*/

function timings(timeArray) {
    return Promise.all(timeArray.map(timing => new Promise((resolve, reject) => {
        setTimeout(() => { resolve(console.log(timing)) }, timing * 1000)
    })))
}
timings([1, 2, 3]).then(() => console.log("Done"))
