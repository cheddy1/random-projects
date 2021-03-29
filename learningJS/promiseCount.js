function timings(timeArray) {
    return Promise.all(timeArray.map(timing => new Promise((resolve, reject) => {
        setTimeout(() => { resolve(console.log(timing)) }, timing * 1000)
    })))
}
timings([1, 2, 3]).then(() => console.log("Done"))
