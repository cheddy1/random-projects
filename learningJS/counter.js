/*
Write a JavaScript program with a number state, and three methods. (1) inc -- increment the state by 1 (2) dec - decrement the state by 1, and (3) value - return the value. 
Also write a constructor that take an initial number. The class, and constructor should be called Counter.
*/

function Counter(number) {
    this.number = number
}
Counter.prototype.inc = function () {
    this.number++
}
Counter.prototype.dec = function () {
    this.number--
}
Counter.prototype.value = function () {
    return this.number
}
counter = new Counter(0)
counter.inc()
counter.dec()
console.log(counter.value())
